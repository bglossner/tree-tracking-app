import { IOAuth2Options, UserSession, validateAppAccess } from "@esri/arcgis-rest-auth";
import { CLIENT_ID as clientId } from "../../constants/ArcGIS";

interface ILocationState {
  accessToken: string;
}

const redirectUri = encodeURIComponent('http://localhost:3000/arcgis-redirect');

export function getPopupWindowFeatures(w: number, h: number): string | null {
  // centers popup
  if (!window.top) {
    return null;
  }

  const y = window.top.outerHeight / 2 + window.top.screenY - h / 2;
  const x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
  return 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=' + w + ',height=' + h + ',top=' + y + ',left=' + x;
}

export function checkIfExistingUserSession(): UserSession | null {
  const serializedSession = localStorage.getItem('__ARCGIS_REST_USER_SESSION__');
  if (serializedSession !== null && serializedSession !== "undefined") {
    localStorage.removeItem('__ARCGIS_REST_USER_SESSION__');
    const session = UserSession.deserialize(serializedSession);
    updateSessionInfo(session);
    return session;
  }

  return null;
}

export async function hasAppAccess(clientId: string, userSession: UserSession): Promise<boolean> {
  try {
    const { valid } = await validateAppAccess(userSession.token, clientId);

    return valid;
  } catch (e) {
    console.error('App access validate error!');
    console.log(e);
    return false;
  }
}

export function updateSessionInfo(session?: UserSession) {
  if (session) {
    localStorage.setItem('__ARCGIS_REST_USER_SESSION__', session.serialize());
  } else {
    localStorage.removeItem('__ARCGIS_REST_USER_SESSION__');
  }
}

export function defaultOAuthOptions(): IOAuth2Options {
  return {
    clientId,
    redirectUri: window.location.origin + window.location.pathname,
    popup: true,
  };
}

export function parseAuthOutOfURL(): boolean {
  const parsedHash = new URLSearchParams(
    window.location.hash.substring(1) // skip the first char (#)
  );
  const clientIdFromURL = parsedHash.get('state');

  if (clientIdFromURL === clientId && parsedHash.has('access_token')) {
    UserSession.completeOAuth2(defaultOAuthOptions());

    return true;
  }

  return false;
}

export function signIn(): Promise<UserSession> {
  const oauth2Options: IOAuth2Options = defaultOAuthOptions();
  
  const popupFeatures = getPopupWindowFeatures(500, 500);
  if (popupFeatures) oauth2Options.popupWindowFeatures = popupFeatures;

  return new Promise((resolve, reject) => {
    const ret = UserSession.beginOAuth2(oauth2Options)?.then((session) => {
      console.log('DONE!');
      console.log(session);
      updateSessionInfo(session);
      resolve(session);
    }).catch((e) => {
      reject(e);
    });
  
    console.log(ret);
  
    if (!ret) {
      reject(new Error('beginOAuth failed'));
    }
  });
}

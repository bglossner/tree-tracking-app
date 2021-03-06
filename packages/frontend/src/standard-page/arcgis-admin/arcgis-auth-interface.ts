/**
 * This file contains helper functions for dealing with ArcGIS authentication
 */

import { IOAuth2Options, UserSession, validateAppAccess } from "@esri/arcgis-rest-auth";
import { CLIENT_ID as clientId } from "../../constants/ArcGIS";

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
  // ArcGIS thinks there is no query string when using hash routing so need to add one
  const redirectUri = window.location.href.includes('?') ?
    window.location.href :
    window.location.href + '?1=1';

  return {
    clientId,
    redirectUri,
    popup: true,
  };
}

// Check to see if user has just completed authentication. Returns user to session, closing window
export function parseAuthOutOfURL(): boolean {
  const parsedHash = new URLSearchParams(
    window.location.hash.substring(1) // skip the first char (#)
  );
  const clientIdFromURL = parsedHash.get('state');

  // If access_token exists, authentication has been completed successfully
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
      updateSessionInfo(session);
      resolve(session);
    }).catch((e) => {
      reject(e);
    });
    
    if (!ret) {
      reject(new Error('beginOAuth failed'));
    }
  });
}

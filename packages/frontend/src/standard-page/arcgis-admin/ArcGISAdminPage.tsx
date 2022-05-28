import { UserSession } from "@esri/arcgis-rest-auth";
import { useState, useEffect } from "react";
import { CLIENT_ID } from "../../constants/ArcGIS";
import { Footer } from "../../footer/Footer";
import { Header, ILinkComponentProps, INavLinkInfo } from "../../header/Header";
import {
  checkIfExistingUserSession,
  parseAuthOutOfURL,
  updateSessionInfo,
  signIn,
  hasAppAccess
} from "./arcgis-auth-interface";
import { ArcGISSignIn } from "./arcgis-signin/ArcGISSignIn";
import styles from './ArcGISAdminPage.module.scss';

export interface IProps {
  /**
   * Whether to use padding between header and main content
   */
  useTopPadding?: boolean;
  /**
   * The component (function, not JSX) to be rendered if signed in
   */
  component: React.FC<any>;
};

interface IAdditionalButtonProps {
  buttonText: string;
  onClick: () => void;
};

// Specific implementation of INavLinkInfo
interface INavLinkOverrideProps extends INavLinkInfo<ILinkComponentOverrideProps>, IAdditionalButtonProps {};
interface ILinkComponentOverrideProps extends ILinkComponentProps, IAdditionalButtonProps {};

type IUserSessionError = boolean;

export interface IUserSessionInfo {
  /**
   * Whether an error exists for sign in
   */
  error: IUserSessionError;
  /**
   * User session (null if no session)
   */
  userSession: UserSession | null;
  /**
   * Whether the login is loading
   */
  loading: boolean;
};

/**
 * Component for rendering a button
 */
const ArcGISAdminButton: React.FC<ILinkComponentOverrideProps> = ({ onClick, ...props }) => {
  return (
    <button onClick={onClick} className={styles.navbarBtn}>
      {props.buttonText}
    </button>
  );
};

/**
 * Helper function for when user clicks sign in button
 * @returns 
 */
function onSignInClickedWrapper(
  setUserSession: (u: UserSession) => void,
  setError: (b: boolean) => void,
  _setLoading?: (b: boolean) => void
) {
  return () => {
    const prom = signIn();
    prom.then((userSession) => {
      setUserSession(userSession);
      setError(false);
    }).catch(_e => {
      setError(true);
    });
  }
}

/**
 * Wrapper component for a page that requires signing into ArcGIS
 * 
 * Still has header, main content, and footer
 */
export const ArcGISAdminPage = ({ component: Component, useTopPadding }: IProps) => {
  const [error, setError] = useState(false);
  const [userSession, setUserSession] = useState<UserSession | null>(checkIfExistingUserSession);
  const [loading, setLoading] = useState<boolean>(false);

  // Links live INSIDE component because there are references to state setters
  const adminPageNavbarLinks: INavLinkOverrideProps[] = [
    // Link to home page
    {
      to: '/',
      shouldUnderline: false,
      innerText: 'Home',
      buttonText: '',
      // Do nothing special on click. Instead, use built-in navigation
      onClick: () => null,
    }
  ];

  // Display signout button in navbar as well if user is signed in
  if (userSession && !loading) {
    adminPageNavbarLinks.push({
      to: '',
      shouldUnderline: false,
      innerText: '',
      componentType: ArcGISAdminButton,
      buttonText: 'Sign Out',
      onClick: () => { updateSessionInfo(undefined); setUserSession(null); setError(false); }
    });
  }

  useEffect(() => {
    // Check if user has access to app. Not really in use (behind environment variable)
    if (userSession && process.env.REACT_APP_CHECK_APP_ACCESS === 'true') {
      hasAppAccess(CLIENT_ID, userSession)
        .then((hasAccess) => {
          setError(!hasAccess);
        })
        .catch((e) => {
          setError(true);
        });
    }
  }, [userSession]);

  // On page load, check if user has just been redirected to this page from the ArcGIS portal
  // If so, this means this window will close shortly!
  useEffect(() => {
    parseAuthOutOfURL();
  }, []);

  return (
    <>
      <Header navbarLinks={adminPageNavbarLinks} />
      <div className={`standard-page ${useTopPadding ? 'standard-page-top-padding' : ''}`}>
        {!loading && !userSession && !error ?
            <ArcGISSignIn onSignInClicked={onSignInClickedWrapper(setUserSession, setError, setLoading)} />
          :
            <Component loading={loading} userSession={userSession} error={error} />
        }
      </div>
      <Footer />
    </>
  )
};
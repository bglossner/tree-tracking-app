import { UserSession, IOAuth2Options } from "@esri/arcgis-rest-auth";
import { getLayer } from "@esri/arcgis-rest-feature-layer";
import { useState, useEffect } from "react";
import { featureServerUrl } from "../../admin-verification/AdminVerification";
import { Footer } from "../../footer/Footer";
import { Header, ILinkComponentProps, INavLinkInfo } from "../../header/Header";
import {
  checkIfExistingUserSession,
  parseAuthOutOfURL,
  updateSessionInfo,
  signIn
} from "./arcgis-auth-interface";
import { ArcGISSignIn } from "./arcgis-signin/ArcGISSignIn";
import styles from './ArcGISAdminPage.module.scss';

export interface IProps {
  useTopPadding?: boolean;
  component: React.FC<any>;
};

interface IAdditionalButtonProps {
  buttonText: string;
  onClick: () => void;
};

interface INavLinkOverrideProps extends INavLinkInfo<ILinkComponentOverrideProps>, IAdditionalButtonProps {};

interface ILinkComponentOverrideProps extends ILinkComponentProps, IAdditionalButtonProps {};

/* interface IUserSessionError {
}; */

type IUserSessionError = boolean;

export interface IUserSessionInfo {
  error: IUserSessionError;
  userSession: UserSession | null;
  loading: boolean;
};

const ArcGISAdminButton: React.FC<ILinkComponentOverrideProps> = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} className={styles.navbarBtn}>
      {props.buttonText}
    </button>
  );
};

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

export const ArcGISAdminPage = ({ component: Component, useTopPadding }: IProps) => {
  const [error, setError] = useState(false);
  const [userSession, setUserSession] = useState<UserSession | null>(checkIfExistingUserSession);
  const [loading, setLoading] = useState<boolean>(false);

  const adminPageNavbarLinks: INavLinkOverrideProps[] = [];

  if (userSession) {
    if (userSession && !loading) {
      adminPageNavbarLinks.push({
        to: '',
        shouldUnderline: false,
        innerText: '',
        componentType: ArcGISAdminButton,
        buttonText: 'Sign Out',
        onClick: () => { updateSessionInfo(undefined); setUserSession(null); }
      });
    }
  }

  // check with validateAppAccess

  useEffect(() => {
    if (parseAuthOutOfURL()) {
      return;
    }
  }, []);

  return (
    <>
      <Header navbarLinks={adminPageNavbarLinks} />
      <div className={`standard-page ${useTopPadding ? 'standard-page-top-padding' : ''}`}>
        {!loading && !userSession ?
            <ArcGISSignIn onSignInClicked={onSignInClickedWrapper(setUserSession, setError, setLoading)} />
          :
            <Component loading={loading} userSession={userSession} error={error} />
        }
      </div>
      <Footer />
    </>
  )
};
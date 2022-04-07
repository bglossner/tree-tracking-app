import { CSSProperties } from 'react';
import { To, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './Header.scss';
import ufeiLogo from '../assets/images/ufei-logo.png';

const ACTIVE_STYLE: CSSProperties = {
  textDecoration: "underline",
  textUnderlineOffset: "2vh",
};

export interface ILinkComponentProps {
  to: To;
  smooth?: boolean;
  style?: React.CSSProperties | ((props: {
      isActive: boolean;
  }) => React.CSSProperties);
};

export interface INavLinkInfo<T extends ILinkComponentProps> {
  to: To;
  innerText?: string;
  shouldUnderline?: boolean;
  componentType?: React.FC<T>;
};

interface IProps<T extends ILinkComponentProps> {
  navbarLinks: INavLinkInfo<T>[];
}

export const Header = ({ navbarLinks }: IProps<any>) => {
  const location = useLocation();

  const isActiveDecider = (activeByPath: boolean, to: To): CSSProperties => {
    const locationHash = location.hash?.split("#")[1];
    let hash: string | undefined;

    if (typeof to === 'string') {
      const toHash = to?.split("#")[1];
      if (locationHash === toHash || (to === "#top" && !locationHash)) {
        return activeByPath ? ACTIVE_STYLE : {};
      }

      hash = to;
    } else {
      hash = to.hash;
    }

    if (hash === undefined && !locationHash) {
      return activeByPath ? ACTIVE_STYLE : {};
    } else {
      return activeByPath && locationHash === hash ? ACTIVE_STYLE : {};
    }
  };

  return (
    <header className="App-header">
      <a id="ufei-logo-header-container" href="https://ufei.calpoly.edu/">
        <img alt="UFEI Logo" src={ufeiLogo} />
      </a>
      <nav>
        {navbarLinks.map(({ to, innerText, componentType, shouldUnderline, ...rest }) => {
          const LinkType = componentType ?? NavHashLink; 

          return (
            <div className="nav-link-container">
              <LinkType
                to={to}
                smooth
                key={innerText}
                style={({ isActive }) => shouldUnderline ? isActiveDecider(isActive, to) : {}}
                {...rest}
              >
                &nbsp;&nbsp;&nbsp;{innerText}&nbsp;&nbsp;&nbsp;
              </LinkType>
            </div>
          );
        })}
      </nav>
    </header>
  );
};
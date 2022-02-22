import { CSSProperties } from 'react';
import { To, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './Header.scss';
import ufeiLogo from '../assets/images/ufei-logo.png';

const ACTIVE_STYLE: CSSProperties = {
  textDecoration: "underline",
  textUnderlineOffset: "2vh",
};

interface INavLinkInfo {
  to: To;
  innerText: string;
};

const HomeNavLinks: INavLinkInfo[] = [
  {
    to: "/#top",
    innerText: "Register a Tree",
  },
  {
    to: {
      hash: "About",
      pathname: "/",
    },
    innerText: "About",
  },
  {
    to: {
      hash: "Map",
      pathname: "/",
    },
    innerText: "Map",
  },
];

export const Header = () => {
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
        {HomeNavLinks.map(({ to, innerText }) => (
          <div className="nav-link-container">
            <NavHashLink
              to={to}
              smooth
              key={innerText}
              style={({ isActive }) => isActiveDecider(isActive, to)}
            >
              &nbsp;&nbsp;&nbsp;{innerText}&nbsp;&nbsp;&nbsp;
            </NavHashLink>
          </div>
        ))}
      </nav>
    </header>
  );
};
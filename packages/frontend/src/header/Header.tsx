import { Location, To, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './Header.scss';
import ufeiLogo from '../assets/images/ufei-logo.png';
import { CSSProperties } from 'react';
import { HamburgerNavbar } from './hamburger-nav/HamburgerNavigator';
import { useWindowSize } from '../util/hooks/useWindowInfo';

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

const isActiveDecider = (activeByPath: boolean, to: To, location: Location): CSSProperties => {
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

export type isActiveDeciderFn = typeof isActiveDecider;

const RegularNavbar = ({ navbarLinks }: IProps<any>) => {
  const location = useLocation();

  return (
    <>
      <a id="ufei-logo-header-container" href="https://ufei.calpoly.edu/">
        <img alt="UFEI Logo" src={ufeiLogo} />
      </a>
      <nav className='full-nav-bar'>
        {navbarLinks.map(({ to, innerText, componentType, shouldUnderline, ...rest }) => {
          const LinkType = componentType ?? NavHashLink; 

          return (
            <div className="nav-link-container">
              <LinkType
                to={to}
                smooth
                key={innerText}
                style={({ isActive }) => shouldUnderline ? isActiveDecider(isActive, to, location) : {}}
                {...rest}
              >
                {innerText}
              </LinkType>
            </div>
          );
        })}
      </nav>
    </>
  );
}

export const Header = ({ navbarLinks }: IProps<any>) => {
  const { isDesktop } = useWindowSize();

  return (
    <header className="App-header">
      {isDesktop ? (
        <RegularNavbar navbarLinks={navbarLinks} />
      ) : (
        <HamburgerNavbar navbarLinks={navbarLinks} />
      )}
    </header>
  );
};
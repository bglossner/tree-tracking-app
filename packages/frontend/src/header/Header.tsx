import { Location, To, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './Header.scss';
import ufeiLogo from '../assets/images/ufei-logo.png';
import { CSSProperties } from 'react';
import { HamburgerNavbar } from './hamburger-nav/HamburgerNavigator';
import { useWindowSize } from '../util/hooks/useWindowInfo';
import { Divider } from '@mui/material';

// Style for link in navbar when on that page/location
const ACTIVE_STYLE: CSSProperties = {
  textDecoration: "underline",
  textUnderlineOffset: "2vh",
};

const TEXT_TWO_LINES = 1516;
/**
 * Type for what to actually pass to NavHashLink or NavLink or
 * whatever Link type is being used.
 */
export interface ILinkComponentProps {
  /**
   * Where to go on website (link or hash)
   */
  to: To;
  /**
   * Whether to use a smooth transition when scrolling.
   * 
   * Default: true
   */
  smooth?: boolean;
  /**
   * Style of link component. Overrides default ACTIVE_STYLING if desired
   * 
   * Default: ACTIVE_STYLE
   */
  style?: React.CSSProperties | ((props: {
      isActive: boolean;
  }) => React.CSSProperties);
};

/**
 * Wrapper type for @ILinkComponentProps with more information about metadata of general
 * component for the NavLink or NavHashLink 
 */
export interface INavLinkInfo<T extends ILinkComponentProps> {
  /**
   * Where to go on website (link or hash)
   */
  to: To;
  /**
   * The actual text for the link (blank if not given)
   * 
   * May not be provided if componentType is used to display text or it's an image
   */
  innerText?: string;
  /**
   * Whether the link should be underlined when active
   */
  shouldUnderline?: boolean;
  /**
   * Link component type (NavHashLink or NavLink or something conforming to that API)
   */
  componentType?: React.FC<T>;
};

interface IProps<T extends ILinkComponentProps> {
  /**
   * Navbar links and info for how to properly display them in menu
   */
  navbarLinks: INavLinkInfo<T>[];
}

/**
 * @param activeByPath determines whether to display the ACTIVE_STYLE if on this link
 * @param to - The link to become active on
 * @param location - Actual location the user is at on the website
 * @returns styling for link component if link is active 
 */
const isActiveDecider = (activeByPath: boolean, to: To, location: Location, width: number | undefined): CSSProperties => {
  const locationHash = location.hash?.split("#")[1];
  let hash: string | undefined;

  let styleToUse = ACTIVE_STYLE;

  if (width && (width <= TEXT_TWO_LINES)) {
    styleToUse = {
      ...ACTIVE_STYLE,
      textUnderlineOffset: "0",
    }
  }

  // If "to" is string, need to parse hash out of it. Else, hash can be grabbed by property
  if (typeof to === 'string') {
    const toHash = to?.split("#")[1];
    // Active if on that hash or link is to top of page and user has no hash
    if (locationHash === toHash || (to === "#top" && !locationHash)) {
      return activeByPath ? styleToUse : {};
    }

    hash = to;
  } else {
    hash = to.hash;
  }

  if (hash === undefined && !locationHash) {
    return activeByPath ? styleToUse : {};
  } else {
    return activeByPath && locationHash === hash ? styleToUse : {};
  }
};

export type isActiveDeciderFn = typeof isActiveDecider;

/**
 * Component that acts as a regular top navigation bar.
 * 
 * Alternative to HamburgerNavbar
 * 
 * @param navbarLinks Navigation links
 */
const RegularNavbar = ({ navbarLinks }: IProps<any>) => {
  const location = useLocation();
  const { width } = useWindowSize();

  return (
    <>
      <a id="ufei-logo-header-container" href="https://ufei.calpoly.edu/">
        <img alt="UFEI Logo" src={ufeiLogo} />
      </a>
      <nav className='full-nav-bar'>
        {navbarLinks.map<React.ReactNode>(({ to, innerText, componentType, shouldUnderline, ...rest }) => {
          const LinkType = componentType ?? NavHashLink; 

          return (
            <div className="nav-link-container">
              <LinkType
                to={to}
                smooth
                key={innerText}
                style={({ isActive }) => shouldUnderline ? isActiveDecider(isActive, to, location, width) : {}}
                {...rest}
              >
                {innerText}
              </LinkType>
            </div>
          );
        }).reduce((prev, curr) => [prev, <Divider orientation='vertical' variant='middle' style={{background: '#666', height: '3vh', width: '0.1em' }} flexItem/>, curr])
        }
      </nav>
    </>
  );
}

/**
 * Header for application
 * 
 * @param navbarLinks Navigation links (to be passed down)
 */
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
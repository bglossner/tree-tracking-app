import { Divider, IconButton, List, ListItem, styled, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { ILinkComponentProps, INavLinkInfo } from "../Header";
import ufeiLogo from '../../assets/images/ufei-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './HamburgerNavigator.scss';

// Width of navigation menu in pixels
const drawerWidth = 240;

interface IProps<T extends ILinkComponentProps> {
  /**
   * Navbar links and info for how to properly display them in menu
   */
  navbarLinks: INavLinkInfo<T>[];
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

/**
 * Component that acts as a hamburger menu navigation bar.
 * 
 * On click, opens up menu. On back or outside click, closes menu.
 * 
 * @param navbarLinks Navigation links
 */
export const HamburgerNavbar = ({ navbarLinks }: IProps<any>) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='hamburger-menu'>
        {/* Icon/Button to show navigation menu */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <a id="ufei-logo-header-container" href="https://ufei.calpoly.edu/">
          <img alt="UFEI Logo" src={ufeiLogo} />
        </a>
      </div>
      {/* Actual swipable component */}
      <SwipeableDrawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor="left"
        open={open}
        onOpen={handleDrawerOpen}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navbarLinks.map(({ to, innerText, componentType, shouldUnderline, ...rest }) => {
            const LinkType = componentType ?? NavHashLink; 

            return (
              <>
                <ListItem key={innerText}>
                  <div className="nav-link-container">
                    <LinkType
                      to={to}
                      smooth
                      key={innerText}
                      /* Need to close navigation bar or else page navigation will not actually occur */
                      onClick={() => { handleDrawerClose(); }}
                      {...rest}
                    >
                      {innerText}
                    </LinkType>
                  </div>
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      </SwipeableDrawer>
    </>
  );
}
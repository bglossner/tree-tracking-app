import { Divider, IconButton, List, ListItem, styled, SwipeableDrawer, useTheme } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { ILinkComponentProps, INavLinkInfo, isActiveDeciderFn } from "../Header";
import ufeiLogo from '../../assets/images/ufei-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './HamburgerNavigator.scss';

const drawerWidth = 240;

interface IProps<T extends ILinkComponentProps> {
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
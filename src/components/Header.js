import {
    AppBar,
    Button,
    Drawer, IconButton,
    Link, makeStyles,
    MenuItem, Toolbar,
    Typography
} from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

  const headersData = [
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Insights",
      href: "/insights",
    },
    {
      label: "Support",
      href: "/account",
    },
    {
      label: "Account",
      href: "/login",
    },
  ];
  

  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  
  const useStyles = makeStyles((theme) => ({
    header: {
      background: 'transparent', 
      boxShadow: 'none',
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    appBarScrolled: {
        backgroundColor: '#212121',
        //borderBottom: '1px solid #ededed',
        transition: theme.transitions.create(['background-color'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.standard
        })
      },
    logo: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }));
  
  export default function Header(props) {
    const { header, logo, menuButton, toolbar, drawerContainer, appBarScrolled,  } = useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
    }, []);
  
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
      });
      
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
          
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
  
          <div>{femmecubatorLogo}</div>
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };
  
    const femmecubatorLogo = (
      <Typography variant="h6" component="h1" className={logo}>
        Hyperion Professional Services
      </Typography>
    );
  
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <header>
        <AppBar className={`${header} ${
          trigger === false ? '' : appBarScrolled
        }`}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }
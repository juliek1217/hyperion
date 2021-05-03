import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  makeStyles,
  MenuItem,
  Toolbar,
  Typography
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import { Link, Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Products",
    href: "/products"
  },
  {
    label: "Insights",
    href: "/insights"
  },
  {
    label: "Support",
    href: "/support"
  },
  {
    label: "Account",
    href: "/login"
  }
];

const useStyles = makeStyles(theme => ({
  header: {
    boxShadow: "none",
    background: "#212121"
  },
  logo: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left"
  },
  logoImage: {
    height: "30px",
    marginRight: "10px",
    verticalAlign: "middle"
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  drawerContainer: {
    padding: "20px 30px"
  },
  logoLink: {
    color: "#FFFEFE",
    textDecoration: "none"
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: "none"
  }
}));

export default function Header(props) {
  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    logoLink,
    link,
    logoImage
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1100
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>
          {getMenuButtons()}
          {specialButton}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState(prevState => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState(prevState => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen
          }}
        >
          <MenuIcon />
        </IconButton>
        {femmecubatorLogoMobile}
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()} </div>
        </Drawer>
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
            key: label
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Typography component="h1" variant="h6" className={logo}>
      <Link exact to="/" className={logoLink}>
        {" "}
        <img className={logoImage} src="/logo.svg" alt="logo" />
        Hyperion Analytics
      </Link>
    </Typography>
  );

  const femmecubatorLogoMobile = (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Typography component="h1" variant="h6" className={logo}>
      <Link exact to="/" className={logoLink}>
        {" "}
        <img className={logoImage} src="/logo.svg" alt="logo" />
        Hyperion
      </Link>
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
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const ColorButton = withStyles(theme => ({
    root: {
      //color: theme.palette.getContrastText(lightBlue[500]),
      color: "#fff",
      backgroundColor: blue[800],
      "&:hover": {
        backgroundColor: blue[900]
      }
    }
  }))(Button);
  const specialButton = (
    <Link to="/request/" className={link}>
      <ColorButton variant="contained" color="primary">
        Request a demo
      </ColorButton>
    </Link>
  );

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

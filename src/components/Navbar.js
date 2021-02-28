/* eslint-disable jsx-a11y/alt-text */
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import teal from '@material-ui/core/colors/teal';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      appBar: {
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`,
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,.20)",
      color: "#5f6368"
  },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
      textDecoration: 'none',
    },
    appbarmenu: {
        fontSize: "14px",
        fontWeight: 400,
    },
    logo: {
        height: "40px",
        marginRight: "10px",
        verticalAlign: "middle"
    },
    title: {
      flexGrow: 1,
      fontFamily: "Roboto",
      color: theme.palette.type === "dark" ? "#fff" : undefined
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    '&:hover': {
      backgroundColor: teal[700],
    },
  },
}))(Button);




export default function Navbar() {
    const classes = useStyles();
        return(
            <div className={classes.root}>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>

        <Typography component="h1" variant="h6" className={classes.title}>
                            <img className={classes.logo} src="/logo_nav.svg" />
                            
                        </Typography>
          <nav>

          <Link variant="button" color="textPrimary" exact to="/" className={classes.link}>
              <Button href="#text-buttons" color="black">Home</Button>
          </Link>

          <Link  to="/dashboard/" className={classes.link}>
            <Button href="#text-buttons" color="black">
              Dashboard
              </Button>
            </Link>

            <Link  to="/products/" className={classes.link}>
            <Button href="#text-buttons" color="black">
              Products
              </Button>
            </Link>
            <Link to="/support/" className={classes.link}>
            <Button href="#text-buttons" color="black">
              Support
              </Button>
            </Link>
            <Link to="/about/" className={classes.link}>
            <Button href="#text-buttons" color="black">
              About us
              </Button>
            </Link>
          </nav>
          <Link to="/login/" className={classes.link}>
          <Button href="#" variant="outlined" color="black" className={classes.link}>
            Log In
          </Button>
          </Link>
          <Link to="/signup/" className={classes.link}>
          <ColorButton variant="contained" color="black" className={classes.margin}>
          Sign Up
          </ColorButton>
          </Link>
        </Toolbar>
      </AppBar>
      </div>
        );
}


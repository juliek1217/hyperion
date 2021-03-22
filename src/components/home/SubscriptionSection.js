import { Box, Button, Grid, Typography } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import React from 'react'
import { Link } from "react-router-dom"

const features = [
  'Invest Any Amount',
  'Build a Balanced Portfolio',
  'Trade in Real Time',
  'Fractional Shares Disclosure'
]

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(10, 10),
    background: "#212121",
    color: "#fff",
  },
  demo: {
    padding: theme.spacing(2)
  },
  card: {
    height: '100%', 
    marginRight: theme.spacing(2)
  },
  cardImg: {
    height: '100%'
  },
  progress: {
    height: 7, 
    borderRadius: 15, 
    margin: theme.spacing(0, 2) 
  },
  subtitle: {
    fontSize: 12,
    [theme.breakpoints.up('sm')]: {
      fontSize: 14
    }
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
  },
  }))
  

  
  const ColorButton = withStyles((theme) => ({
    root: {
      //color: theme.palette.getContrastText(lightBlue[500]),
      color:  blue[500],
      //backgroundColor: blue[800],
      '&:hover': {
        color: blue[600],
        //backgroundColor: blue[900],
      },
    },
  }))(Button);

export default function FeaturesSection() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container justify="space-between">
        <Grid item xs={11} sm={8} md={4} style={{padding: 10}}>
          <Box style={{position: 'relative'}} mb={10}>
          <Typography variant="h7">
          Looking for a Terminal subscription?
            </Typography>
          
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>

        <Grid item xs={12} md={12} style={{padding: '0px 10px 0px'}}>
          <Box mb={2}>
            <Typography variant="h4">
            Financial Data Analytics
            </Typography>
            <Typography variant="h6">
            Real-time data on every market, unparalleled news and research, powerful analytics, communications tools and world-class execution capabilities–in one fully integrated solution.
            </Typography>
          </Box>
        </Grid>

          <Box style={{textAlign: 'right'}}>
      <Link to="/request/" className={classes.link}>
      <ColorButton color="primary">
              <ArrowRightIcon />
              Gain a competitive advantage from your data
              </ColorButton>
      </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
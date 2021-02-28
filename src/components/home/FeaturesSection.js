import { Box, Button, Card, CardMedia, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import React from 'react'
import laptop2 from '../../assets/img/laptop-2.jpg'
import laptop3 from '../../assets/img/laptop-3.jpg'

const features = [
  'Invest Any Amount',
  'Build a Balanced Portfolio',
  'Trade in Real Time',
  'Fractional Shares Disclosure'
]

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(10, 0),
    padding: theme.spacing(10, 10),
    background: "rgb(240, 235, 230)"
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
  }
  }))
  
export default function FeaturesSection() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container justify="space-between">
        <Grid item xs={11} sm={8} md={4} style={{padding: 10}}>
          <Box style={{position: 'relative'}} mb={10}>
            <Card style={{height: 200, width: '85%'}}>
              <CardMedia component="img" src={laptop2} style={{height: '100%'}} />
            </Card>
            <Card style={{position: 'absolute', height: 220, top: 50, left: 50}}>
              <CardMedia component="img" src={laptop3} style={{height: '100%'}}/>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>

        <Grid item xs={12} md={12} style={{padding: '0px 10px 0px'}}>
          <Box mb={2}>
            <Typography variant="h4">
              <b>{'Introducing Fractional Shares'}</b> 
            </Typography>
            <Typography variant="h6">
              {'Invest in thousands of stocks with as little as $1.'} 
            </Typography>
          </Box>
        </Grid>


          <Grid container justify="space-between">
            {features.map((feature, f) => (
              <Grid item xs={6} sm={5} style={{padding: '0px 10px'}} key={f}>
                <Typography variant="body1">
                  <b>{feature}</b> 
                </Typography>
                <Typography paragraph variant="body2">
                {`Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.`}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Box style={{textAlign: 'right'}}>
            <Button color="primary">
              <ArrowRightIcon />
              Register for a Free Trial
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
import { Box, Button, Card, CardMedia, Container, Grid, Hidden, Typography } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import React from 'react'
import laptop2 from '../../assets/img/laptop-2.jpg'
import laptop3 from '../../assets/img/laptop-3.jpg'

const analytics = [
  'Manage Your Portfolio',
  'Learn As You Grow',
  'Keep Tabs on Your Money',
  'The financial news you need to start your day.'
]

export default function AnalyticsSection() {
  return (
    <Container style={{padding: 15}}>
      <Grid container>
        <Grid item xs={12} md={6} style={{padding: '0px 10px 0px'}}>
          <Typography variant="h4">
            <b>{`Our Products`}</b> 
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{padding: '15px 0px'}} justify="space-between">
        <Grid item xs={12} md={7}>
          <Grid container justify="space-between">
            {analytics.map((analytic, a) => (
              <Grid item xs={6} sm={5} md={5} style={{padding: '0px 10px'}} key={a}>
                <Typography variant="body1">
                  <b>{analytic}</b> 
                </Typography>
                <Typography paragraph variant="body2">
                  {`Earn 0.30% APY* on your uninvested cash and get more flexibility with your brokerage account. 
                  Keep your portfolio in your pocket. Everything you need to manage your assets is available in a single app`}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Box>
            <Button color="primary">
              <ArrowRightIcon />
              Sign up now
            </Button>
          </Box>
        </Grid>
        <Hidden smDown>
          <Grid item md={4} container justify="flex-end">
            <Box style={{position: 'relative'}} mb={10}>
              <Card  elevation={0} style={{height: 200, width: '85%'}}>
                <CardMedia component="img" src={laptop2} style={{height: '100%'}} />
              </Card>
              <Card elevation={0} style={{position: 'absolute', height: 250, top: 50, left: 50}}>
                <CardMedia component="img" src={laptop3} style={{height: '100%'}}/>
              </Card>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}
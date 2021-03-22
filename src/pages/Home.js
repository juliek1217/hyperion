import { Box, Button, Card, CardMedia, Container, Grid, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CastIcon from '@material-ui/icons/Cast';
import EditIcon from '@material-ui/icons/Edit';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilledWhite';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import React from 'react';
import laptop1 from '../assets/img/laptop-1.jfif';
import laptop2 from '../assets/img/laptop-2.jpg';
import laptop3 from '../assets/img/laptop-3.jpg';
import LandingVideo from '../assets/landing.mp4';
import AnalyticsSection from '../components/home/AnalyticsSection';
import DemoSection from '../components/home/DemoSection';
// homepage components
import FeaturesSection from '../components/home/FeaturesSection';

const useStyles = makeStyles(theme => ({
  landing: {
    width: '100vw',
    height: '600px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    zIndex: '-1'
  },
  intro: {
    //backgroundImage: 'linear-gradient(135deg, #212121 40%, #323232 60%)',
    padding: theme.spacing(8, 0),
    color: 'white'
  },
  intro2: {
    background: '#212121',
    padding: theme.spacing(8, 0),
    color: 'white'
  },
  introHeadline: {
    fontWeight: 1000,
    marginTop: theme.spacing(10),
    fontSize: '60px',
    [theme.breakpoints.up('md')]: {
      fontSize: '50px'
    },
    marginBottom: theme.spacing(2)
  },
  title: {
    margin: '50px 0 30px',
  },
  introSubtitle: {
    marginBottom: theme.spacing(3)
  },
  ctaBtn: {
    background: 'white',
    color: theme.palette.pink,
    textTransform: 'capitalize'
  },
  container: {
    width: '100%',
    //paddingLeft: theme.spacing(4)
  },
  step: {
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: '50%',
    padding: theme.spacing(2),
    height: 75,
    width: 75,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: { 
    position: 'relative',
    height: 200
  },
  overlay: {
    position: 'absolute',
    background: 'rgba(0,0,0, 0.45)', 
    left: 0, top: 0, 
    bottom: 0, right: 0, 
    height: '100%',
    color: 'white',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '30px',
  },
  adMedia: {
    position: 'relative',
    borderRadius: 0,
    height: 250,
    margin: theme.spacing(2, 0)
  },
  adMediaOverlay: {
    position: 'absolute',
    background: '#651fffab', 
    left: 0, top: 0, 
    bottom: 0, right: 0, 
    height: '100%',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outro: {
    background: theme.palette.primary.main,
    padding: theme.spacing(8, 0),
    color: 'white',
    textAlign: 'center',
    marginTop: theme.spacing(2)
  },
}))

const steps = [
  {text: 'Type your content', icon: <EditIcon />, image: laptop1},
  {text: 'Text to speech', icon: <CastIcon />, image: laptop2},
  {text: 'Your podcast is live!', icon: <RssFeedIcon />, image: laptop3}
]


export default function Homepage() {
  const classes = useStyles();
  
  return ( 
      <main>

        <div className={classes.landing}>
        <video className='videoTag' autoPlay loop muted>
      <source src={LandingVideo} type='video/mp4' />
  </video>
  </div>
  
        <div className={classes.intro}>
          <Container>
            <Grid 
              container  
              alignItems='center' 
              className={classes.container}
            >
              <Grid item xs={11} sm={8} md={7} lg={6}>
                <Typography className={classes.introHeadline} paragraph>
                Information, connectivity and opportunity.
                </Typography>
                <Typography className={classes.introSubtitle} paragraph>
                Hyperion Professional Services connect decision makers to a dynamic network of information, people and ideas. At the core of this network is our ability to deliver data, news and analytics through innovative technology, quickly and accurately to individuals and across enterprises.
                </Typography>
                <Button 
                  size='large' 
                  variant="contained"
                  className={classes.ctaBtn}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div className={classes.intro2}>
        <Container>
          <Grid item xs={11} sm={8} md={7} lg={6}>
            <Typography variant="h3" align="left" className={classes.title}>
              <b>{`We are all investors.`}</b>
            </Typography>
          </Grid>
          <Grid container justify="center">
            {steps.map((step, i) => (
              <Grid item xs={10} sm={6} md={4} style={{padding: 10}} key={i}>
                <Card className={classes.card} elevation={0}>
                  <CardMedia component="img" src={step.image} />
                  <div className={classes.overlay}>
                    <Grid>  
                      <Box style={{display: 'block'}}>
                        {step.icon}
                      </Box>
                      <Typography variant="h6">
                        {(i + 1) + '.'} {step.text}
                      </Typography>
                    </Grid>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>
        
        {/* Features section*/}
        <FeaturesSection />

        {/* Analytics section*/}
        <AnalyticsSection />
        
        <div>
          <Card className={classes.adMedia} elevation={0}>
            <CardMedia component="img" src={laptop2} style={{height: '100%'}}/>
            <div className={classes.adMediaOverlay}>
              <IconButton size="small" color="inherit">
                <PlayCircleFilledIcon style={{fontSize: '64px'}} />
              </IconButton>
            </div>
          </Card>
        </div>
        
        {/* Demo section*/}
        <DemoSection />
        

        <div className={classes.outro}>
          <Grid 
            container 
            justify="center" 
            alignItems="center" 
            style={{height: '100%'}}
          >
            <Grid item xs={10}>
              <Typography variant="h4" align="center">
                <b>{`Introducing Fractional Shares`}</b>
              </Typography>
              <Box mt={3}>
                <Button 
                  size='large' 
                  variant="contained"
                  className={classes.ctaBtn}
                >
                  Get Started for free
                </Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      </main>
  )
}
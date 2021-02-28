import {
  Box, Container, Grid,

  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
container: {
  margin: theme.spacing(10, 10),
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

export default function DemoSection() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
        <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
          <Box mt={2}>
            <Typography variant="h4">
              <b>{'Quantitative Investing: From Smart Beta to Long-Short Risk Premia'}</b> 
            </Typography>
          </Box>
          <Typography paragraph>
            {`Quantitative investment strategies, which are guided by sets of rules, aim to exploit market abnormalities in order to improve returns, control risk or diversify portfolios.

Quant strategies, as they are usually known, are built to identify and target the underlying factors responsible for the outperformance of some financial assets over others.`}
          </Typography>
        </Grid>

        </Container>
  )
}
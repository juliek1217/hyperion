import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  container: {
    background: "#212121",
    padding: theme.spacing(8, 0),
    color: "white"
  },
  subTitle: {
    marginBottom: theme.spacing(3)
  },
  dividerDarkVertical: {
    alignSelf: "stretch",
    width: "1px",
    border: "none",
    margin: 0,
    flexShrink: 0,
    backgroundColor: "#444",
    [theme.breakpoints.down("sm")]: {
      width: "0px"
    }
  }
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[700],
    "&:hover": {
      backgroundColor: purple[900]
    }
  }
}))(Button);

export default function SubscriptionSection() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Grid container justify="space-between">
          <Grid
            item
            xs={11}
            sm={8}
            md={4}
            justify="center"
            alignItems="center"
            container
          >
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                Looking for a Hyperion analytics subscription?
              </Typography>
            </Grid>
            <Grid item xs={12} alignItems="center" justify="center" container>
              <ColorButton size="large" variant="contained" align="center">
                ORDER NOW
              </ColorButton>
            </Grid>
          </Grid>

          <hr className={classes.dividerDarkVertical} />

          <Grid item xs={12} md={7}>
            <Grid item xs={12} md={12} style={{ padding: "0px 10px 0px" }}>
              <Box mb={2}>
                <Typography className={classes.subTitle} paragraph variant="h6">
                  Hyperion Professional Services connect decision makers to a
                  dynamic network of information, people and ideas. At the core
                  of this network is our ability to deliver data, news and
                  analytics through innovative technology, quickly and
                  accurately to individuals and across enterprises.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 60
  }
}));

export default function Product() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <h1>This is Product Page</h1>
    </Container>
  );
}

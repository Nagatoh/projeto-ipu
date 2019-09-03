import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import DetalhesProcedimento from './components/DetalhesProcedimento';




const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const SolicitarProcedimento = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >

        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <DetalhesProcedimento/>
        </Grid>
      </Grid>
    </div>
  );
};

export default SolicitarProcedimento;

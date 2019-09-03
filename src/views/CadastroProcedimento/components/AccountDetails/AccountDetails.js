import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    procedimento: '',
    requisitos: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  /** */

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="Cadastrar Requisitos e o nome do Procedimento"
          title="Cadastro de Procedimento"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Por favor, digite o nome do Procedimento"
                label="Procedimento"
                margin="dense"
                multiline
                name="procedimento"
                onChange={handleChange}
                required
                value={values.procedimento}
                variant="outlined"
              />
            </Grid>
            <Grid
              container
              item
              spacing={3}
              xs={12}
            >
              <Fragment>
                <Grid
                  item
                  xs={12}
                >
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        helperText="Por favor, digite o Requisito do procedimento"
                        label="Requisitos"
                        margin="dense"
                        multiline
                        name="requisitos"
                        onChange={handleChange}
                        required
                        value={values.requisitos}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Fragment>

            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
          >
            Cadastrar Procedimento
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;

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
    disciplina: '',
    criterios: [{ name: '' }]
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader
          subheader="Cadastrar os critérios e o nome do disciplina"
          title="Cadastro de Disciplina"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Por favor, digite o nome da Disciplina"
                label="Disciplina"
                margin="dense"
                multiline
                name="disciplina"
                onChange={handleChange}
                required
                value={values.disciplina}
                variant="outlined"
              />
            </Grid>

            <Grid container item spacing={3} xs={12}>
              <Fragment>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="Por favor, digite o nome do critério"
                        label="Critério 1"
                        margin="dense"
                        multiline
                        name="critério"
                        onChange={handleChange}
                        required
                        value={values.requisitos}
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        helperText="Por favor, digite o nome do critério"
                        label="Critério 2"
                        margin="dense"
                        multiline
                        name="critério"
                        onChange={handleChange}
                        required
                        value={values.requisitos}
                        variant="outlined"
                      />
                      <Button color="primary" variant="contained">
                        Adicionar Critério
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Fragment>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained">
            Cadastrar Disciplina
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

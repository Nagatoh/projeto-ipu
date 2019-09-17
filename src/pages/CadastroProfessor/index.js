import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

import { Container } from './styles';

const AccountDetails = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container>
      <form autoComplete="off" noValidate>
        <CardHeader
          title="Cadastro de Professor"
          subheader="Cadastrar as informações do Professor"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Matrícula"
                margin="dense"
                name="matricula"
                onChange={handleChange}
                required
                value={values.matricula}
                variant="outlined"
                placeholder="000000000"
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nome"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Sobrenome"
                margin="dense"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12} />
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained">
            Cadastrar Professor
          </Button>
        </CardActions>
      </form>
    </Container>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;

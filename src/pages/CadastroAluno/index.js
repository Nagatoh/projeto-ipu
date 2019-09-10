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
    lastName: '',
    email: '',
    phone: ''
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
          subheader="Cadastrar as informações do Aluno"
          title="Cadastro de Aluno"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Por favor, digite o primeiro nome"
                label="Primeiro Nome"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12} />
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Por favor, digite o Sobrenome"
                label="Ultimo Nome"
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
            Cadastrar Aluno
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

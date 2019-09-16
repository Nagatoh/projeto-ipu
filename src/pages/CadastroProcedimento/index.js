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
    <Container>
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="Cadastrar código e o descrição do Procedimento"
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
                helperText="Por favor, digite o código do Procedimento"
                label="Código"
                margin="dense"
                multiline
                name="codigo"
                onChange={handleChange}
                required
                value={values.procedimento}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            />
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Por favor, digite a Descrição"
                label="Descrição"
                margin="dense"
                multiline
                name="descricao"
                onChange={handleChange}
                required
                value={values.requisitos}
                variant="outlined"
              />
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
    </Container>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  MenuItem,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    nomeAluno: 'Ekaterina Tankova',
    disciplina: 'INTEGRADA I',
    paciente: 'ANA FAUSTINA',
    professor: 'Cristina',
    dente: '33',
    regiao: 'SUP/INF',
    face: 'OD',
    procedimento: 'EC/OH/PC',
    data: '',
    tipoAvaliacao: '',
    agilidade: '',
    materiaisUsados: '',
    dominio: '',
    comportamento: ''
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
          subheader="Avaliar Desempenho do Aluno"
          title="Avaliar Aluno"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={3} xs={3}>
              <TextField
                fullWidth
                helperText="Por favor, digite o nome do aluno"
                label="Nome do Aluno"
                margin="dense"
                name="nomeAluno"
                onChange={handleChange}
                required
                value={values.nomeAluno}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Disciplina"
                margin="dense"
                name="disciplina"
                onChange={handleChange}
                required
                value={values.disciplina}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Por favor, digite o nome do Paciente"
                label="Paciente"
                margin="dense"
                name="paciente"
                onChange={handleChange}
                required
                value={values.paciente}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Por favor, digite o nome do professor"
                label="Professor Orientador"
                margin="dense"
                name="professor"
                onChange={handleChange}
                type="text"
                value={values.professor}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Por favor, digite o nome do Procedimento"
                label="Procedimento"
                margin="dense"
                name="procedimento"
                onChange={handleChange}
                type="text"
                value={values.procedimento}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Por favor, digite o numero do dente"
                label="Dente"
                margin="dense"
                name="dente"
                onChange={handleChange}
                type="number"
                value={values.dente}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />

        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Agilidade"
                margin="dense"
                name="agilidade"
                onChange={handleChange}
                required
                value={values.agilidade}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Materiais usados"
                margin="dense"
                name="materiaisUsados"
                onChange={handleChange}
                required
                value={values.materiaisUsados}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Comportamento"
                margin="dense"
                name="comportamento"
                onChange={handleChange}
                type="text"
                value={values.comportamento}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Dominio"
                margin="dense"
                name="dominio"
                onChange={handleChange}
                type="number"
                value={values.dominio}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />

        <CardActions>
          <Button color="primary" variant="contained">
            Finalizar Avaliação
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

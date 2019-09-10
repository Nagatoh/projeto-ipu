import React, { Component } from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  MenuItem
} from '@material-ui/core';

import { Container } from './styles';

import {
  procedimentos,
  professores,
  disciplinas,
  regioes,
  faces
} from '../../database/data';

class DetalhesProcedimento extends Component {
  state = { procedimento: 0, disciplina: 0, professor: 0, regiao: 0, face: 0 };

  teste(val) {
    console.log(val);
  }
  render() {
    const { procedimento, disciplina, professor, regiao, face } = this.state;

    return (
      <Container>
        <form autoComplete="off" noValidate>
          <CardHeader
            subheader="Solicitação de um novo procedimento"
            title="Solicitar Novo Procedimento"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Por favor, selecione o Disciplina"
                  label="Disciplina"
                  margin="dense"
                  name="tipoAvaliacao"
                  onChange={event =>
                    this.setState({ disciplina: event.target.value })
                  }
                  required
                  select
                  value={disciplina}
                  variant="outlined">
                  {disciplinas.map(disciplina => (
                    <MenuItem key={disciplina.label} value={disciplina.value}>
                      {disciplina.label}
                      {''}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Por favor, digite o nome do Paciente"
                  label="Paciente"
                  margin="dense"
                  name="paciente"
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Por favor, selecione o Professor"
                  label="Professor"
                  margin="dense"
                  name="tipoAvaliacao"
                  onChange={event =>
                    this.setState({ professor: event.target.value })
                  }
                  required
                  select
                  value={professor}
                  variant="outlined">
                  {professores.map(professor => (
                    <MenuItem key={professor.label} value={professor.value}>
                      {professor.label}
                      {''}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Por favor, digite o numero do dente"
                  label="Dente"
                  margin="dense"
                  name="dente"
                  type="text"
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Por favor, selecione a Região"
                  label="Região"
                  margin="dense"
                  name="tipoAvaliacao"
                  onChange={event =>
                    this.setState({ regiao: event.target.value })
                  }
                  required
                  select
                  value={regiao}
                  variant="outlined">
                  {regioes.map(regiao => (
                    <MenuItem key={regiao.label} value={regiao.value}>
                      {regiao.label}
                      {''}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Por favor, selecione a Face"
                  label="Face(s)"
                  margin="dense"
                  name="tipoAvaliacao"
                  onChange={event =>
                    this.setState({ face: event.target.value })
                  }
                  required
                  select
                  value={face}
                  variant="outlined">
                  {faces.map(face => (
                    <MenuItem key={face.label} value={face.value}>
                      {face.label}
                      {''}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Por favor, selecione o Procedimento"
                  label="Procedimento"
                  margin="dense"
                  name="tipoAvaliacao"
                  onChange={event =>
                    this.setState({ procedimento: event.target.value })
                  }
                  required
                  select
                  value={procedimento}
                  variant="outlined">
                  {procedimentos.map(procedimento => (
                    <MenuItem
                      key={procedimento.label}
                      value={procedimento.value}>
                      {procedimento.label}
                      {''}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />

          <CardActions>
            <Button color="primary" variant="contained">
              Finalizar Procedimento
            </Button>
          </CardActions>
        </form>
      </Container>
    );
  }
}

export default DetalhesProcedimento;

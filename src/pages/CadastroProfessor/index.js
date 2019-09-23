import React, { Component } from 'react';

import {
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Input,
  InputLabel,
  MenuItem,
  Chip,
  Select
} from '@material-ui/core';

import { Container, FormController } from './styles';

import * as yup from 'yup';

import api from '../../services/api';
import CadastroProfessor from '../../controllers/CadastroProfessor';

import { toast } from 'react-toastify';

const words = /^([A-Z]|[a-z])[a-z]*?$/;
const number = /^[1-9][0-9]{8}?$/;

const schema = yup.object().shape({
  matricula: yup
    .string()
    .matches(number, 'Matricula invalida')
    .required('Matricula obrigatorio'),
  nome: yup
    .string()
    .matches(words, 'Nome invalido')
    .required('Nome obrigatorio'),
  sobrenome: yup
    .string()
    .matches(words, 'Sobrenome invalido')
    .required('Sobrenome obrigatorio')
});

class AccountDetails extends Component {
  state = {
    matricula: '',
    nome: '',
    sobrenome: '',
    disciplina: [],
    disciplinas: []
  };

  componentDidMount = async () => {
    const response = await api.get('/disciplinas');
    this.setState({ disciplinas: response.data });
  };

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleChangeSelect = event => {
    this.setState({
      disciplina: event.target.value
    });
  };

  handleSubmit = () => {
    const { matricula, nome, sobrenome, disciplina, disciplinas } = this.state;

    schema
      .validate({ matricula: matricula, nome: nome, sobrenome: sobrenome })
      .catch(err => {
        toast.error(err.errors[0]);
      });

    CadastroProfessor.store(
      matricula,
      nome,
      sobrenome,
      disciplina,
      disciplinas
    );
  };

  render() {
    const { matricula, nome, sobrenome, disciplina, disciplinas } = this.state;

    return (
      <Container>
        <form
          autoComplete="off"
          noValidate
        >
          <CardHeader
            subheader="Cadastrar as informações do Professor"
            title="Cadastro de Professor"
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
                  label="Matrícula"
                  margin="dense"
                  name="matricula"
                  onChange={event => this.handleChange(event)}
                  placeholder="000000000"
                  required
                  size="small"
                  type="number"
                  value={matricula}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Nome"
                  margin="dense"
                  name="nome"
                  onChange={event => this.handleChange(event)}
                  required
                  value={nome}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Sobrenome"
                  margin="dense"
                  name="sobrenome"
                  onChange={event => this.handleChange(event)}
                  required
                  value={sobrenome}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <FormController>
                  <InputLabel htmlFor="select-multiple-chip">
                    Disciplinas
                  </InputLabel>
                  <Select
                    input={<Input id="select-multiple-chip" />}
                    multiple
                    onChange={event => this.handleChangeSelect(event)}
                    renderValue={disciplina => (
                      <div>
                        {disciplina.map(value => (
                          <Chip
                            key={value}
                            label={value}
                          />
                        ))}
                      </div>
                    )}
                    value={disciplina}
                    variant="outlined"
                  >
                    {disciplinas.map(disciplina => (
                      <MenuItem
                        key={disciplina.nome}
                        value={disciplina.nome}
                      >
                        {disciplina.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </FormController>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              color="primary"
              onClick={() => this.handleSubmit()}
              variant="contained"
            >
              Cadastrar Professor
            </Button>
          </CardActions>
        </form>
      </Container>
    );
  }
}

export default AccountDetails;

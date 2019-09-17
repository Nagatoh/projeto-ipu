import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
  FormControl,
  Select,
  Chip,
  makeStyles
} from '@material-ui/core';

import { Container } from './styles';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
const names = [
  'INTEGRADA III',
  'INTEGRADA INFANTIL I',
  'INTEGRADA INFANTIL II',
  'DENT E PERIO I'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const AccountDetails = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: ''
  });
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  function handleChangeSelect(event) {
    setPersonName(event.target.value);
  }

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
                label="Ultimo Nome"
                margin="dense"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple-chip">
                  Disciplinas
                </InputLabel>
                <Select
                  multiple
                  variant="outlined"
                  value={personName}
                  onChange={handleChangeSelect}
                  input={<Input id="select-multiple-chip" />}
                  renderValue={selected => (
                    <div className={classes.chips}>
                      {selected.map(value => (
                        <Chip
                          key={value}
                          label={value}
                          className={classes.chip}
                        />
                      ))}
                    </div>
                  )}
                  MenuProps={MenuProps}>
                  {names.map(name => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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

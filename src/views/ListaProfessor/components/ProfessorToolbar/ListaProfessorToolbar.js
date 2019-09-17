import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const ProfessorToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
          className={classes.importButton}>
          Fechar Semestre
        </Button>
        <Button color="primary" variant="contained">
          <a href="/cadastro-professor" style={{ color: 'white' }}>
            Cadastrar Professor
          </a>
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput className={classes.searchInput} placeholder="Procurar" />
      </div>
    </div>
  );
};

ProfessorToolbar.propTypes = {
  className: PropTypes.string
};

export default ProfessorToolbar;

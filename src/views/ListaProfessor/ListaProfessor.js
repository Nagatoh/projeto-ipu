import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import mockData from './data';
//import { professoresLista } from '../../database/data';
import { ProfessorToolbar, ProfessorTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ListaProfessor = () => {
  const classes = useStyles();

  const [users] = useState(mockData);
  return (
    <div className={classes.root}>
      <ProfessorToolbar />
      <div className={classes.content}>
        <ProfessorTable users={users} />
      </div>
    </div>
  );
};
export default ListaProfessor;

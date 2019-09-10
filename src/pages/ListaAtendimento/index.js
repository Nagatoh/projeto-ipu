import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import UsersTable from '../../components/UsersTable/UsersTable';

import { atendimentos } from '../../database/data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ListaAtendimentos = () => {
  const classes = useStyles();

  const [users] = useState(atendimentos);
  return (
    <div className={(classes.content, classes.root)}>
      <UsersTable users={users} />
    </div>
  );
};

export default ListaAtendimentos;

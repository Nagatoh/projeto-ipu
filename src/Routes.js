import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  AvaliarProcedimentoAluno as AvaliarProcedimentoAlunoView
} from './views';

import CadastroProcedimento from './pages/CadastroProcedimento/index';
import ListaAtendimento from './pages/ListaAtendimento/index';
import CadastroRealizacaoProcedimento from './pages/CadastroRealizacaoProcedimento/index';
import CadastroAluno from './pages/CadastroAluno/index';
import CadastroProfessor from './pages/CadastroProfessor/index';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={AvaliarProcedimentoAlunoView}
        exact
        layout={MainLayout}
        path="/avaliar-procedimento-aluno"
      />
      <RouteWithLayout
        component={ListaAtendimento}
        exact
        layout={MainLayout}
        path="/lista-atendimentos"
      />
      <RouteWithLayout
        component={CadastroRealizacaoProcedimento}
        exact
        layout={MainLayout}
        path="/detalhes-procedimento"
      />

      <RouteWithLayout
        component={CadastroAluno}
        exact
        layout={MainLayout}
        path="/cadastro-aluno"
      />

      <RouteWithLayout
        component={CadastroProfessor}
        exact
        layout={MainLayout}
        path="/cadastro-professor"
      />
      <RouteWithLayout
        component={CadastroProcedimento}
        exact
        layout={MainLayout}
        path="/cadastro-procedimento"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;

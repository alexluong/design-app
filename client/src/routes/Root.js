import 'config/theme';

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router'; // To use history
import { Route, Switch, Redirect } from 'react-router-dom';

import store from 'modules/store';

// Layouts
import AuthLayout from 'routes/AuthLayout';
import { SidebarLayout } from 'lib';

// Pages
import AuthSuccessPage from 'pages/auth/AuthSuccessPage';
import SignInPage from 'pages/auth/SignInPage';
import SignUpPage from 'pages/auth/SignUpPage';
import SignOutPage from 'pages/auth/SignOutPage';
import Stuff from 'pages/Stuff';
import Facebook from 'pages/Facebook';
import SettingsPage from 'pages/SettingsPage';
import UploadPage from 'pages/UploadPage';
import DnDPage from 'pages/DnDPage';
import NotFoundPage from 'pages/NotFoundPage';

// Misc
import withAuthentication from 'hoc/withAuthentication';
import history from './history';
import * as routes from './';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={routes.SIGN_OUT} component={SignOutPage} />
            <AuthLayout
              path={routes.SIGN_IN}
              component={withAuthentication(true)(SignInPage)}
            />
            <AuthLayout
              path={routes.SIGN_UP}
              component={withAuthentication(true)(SignUpPage)}
            />
            <SidebarLayout
              path={routes.HOME}
              component={withAuthentication()(Stuff)}
            />
            <SidebarLayout
              path="/facebook"
              component={withAuthentication()(Facebook)}
            />
            <SidebarLayout
              path="/settings"
              component={withAuthentication()(SettingsPage)}
            />
            <Route path={routes.DRAP_AND_DROP} component={DnDPage} />
            <Route path={routes.UPLOAD_PAGE} component={UploadPage} />
            <Route path={routes.AUTH_SUCCESS} component={AuthSuccessPage} />
            {/* OAuth success */}
            <Redirect exact from="/" to={routes.HOME} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Root;

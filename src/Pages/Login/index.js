import { routes } from 'libraries';
import { Redirect, Route, Switch } from 'react-router';

const Login = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.LoginPage.path}
        component={routes.LoginPage.component}
      />
      <Redirect to={routes.Login.path} />
    </Switch>
  );
};

export default Login;

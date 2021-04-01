import { routes } from 'libraries';
import { Redirect, Route, Switch } from 'react-router';

const Users = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.UsersPage.path}
        component={routes.UsersPage.component}
      />
      <Redirect to={routes.Users.path} />
    </Switch>
  );
};

export default Users;

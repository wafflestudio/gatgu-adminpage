import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Auth, routes } from 'libraries';
import { authOptions } from 'libraries/enum';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={routes.Login.path}
          component={Auth(routes.Login.component, authOptions.MUST_NOT_LOGGED)}
        />
        <Route
          path={routes.Users.path}
          component={Auth(routes.Users.component, authOptions.MUST_LOGGED)}
        />
        <Route
          path={routes.Articles.path}
          component={Auth(routes.Articles.component, authOptions.MUST_LOGGED)}
        />
        <Route
          path={routes.Reports.path}
          component={Auth(routes.Reports.component, authOptions.MUST_LOGGED)}
        />
        <Redirect to={routes.Login.path} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

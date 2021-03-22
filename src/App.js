import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import { Auth, routes } from "Libraries";
import { authOptions } from "Libraries/HOC/Auth";

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
          path={routes.Chat.path}
          component={Auth(routes.Chat.component, authOptions.MUST_LOGGED)}
        />
        <Route
          path={routes.Report.path}
          component={Auth(routes.Report.component, authOptions.MUST_LOGGED)}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import { routes } from 'libraries';
import { Redirect, Route, Switch } from 'react-router';

const Articles = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.ArticlesPage.path}
        component={routes.ArticlesPage.component}
      />
      <Redirect to={routes.Articles.path} />
    </Switch>
  );
};

export default Articles;

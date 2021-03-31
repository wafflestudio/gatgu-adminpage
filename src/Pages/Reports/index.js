import { routes } from 'Libraries';
import { Redirect, Route, Switch } from 'react-router';

const Reports = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.ReportsPage.path}
        component={routes.ReportsPage.component}
      />
      <Redirect to={routes.Reports.path} />
    </Switch>
  );
};

export default Reports;

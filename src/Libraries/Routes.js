import Login from 'Pages/Login';
import LoginPage from 'Pages/Login/Login';
import Users from 'Pages/Users';
import UsersPage from 'Pages/Users/Users';
import Reports from 'Pages/Reports';
import ReportsPage from 'Pages/Reports/Reports';
import Articles from 'Pages/Articles';
import ArticlesPage from 'Pages/Articles/Articles';

const routes = {
  // Page groups
  Login: { path: '/login', component: Login },
  Users: { path: '/users', component: Users },
  Articles: { path: '/articles', component: Articles },
  Reports: { path: '/reports', component: Reports },

  // Exact pages
  LoginPage: { path: '/login', component: LoginPage },
  UsersPage: { path: '/users', component: UsersPage },
  ArticlesPage: { path: '/articles', component: ArticlesPage },
  ReportsPage: { path: '/reports', component: ReportsPage },
};

export default routes;

import Login from 'pages/Login';
import LoginPage from 'pages/Login/Login';
import Users from 'pages/Users';
import UsersPage from 'pages/Users/Users';
import Reports from 'pages/Reports';
import ReportsPage from 'pages/Reports/Reports';
import Articles from 'pages/Articles';
import ArticlesPage from 'pages/Articles/Articles';

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

import Login from 'Pages/Login';
import LoginPage from 'Pages/Login/Login';
import Users from 'Pages/Users';
import UsersPage from 'Pages/Users/Users';

const routes = {
  // Page groups
  Login: { path: '/login', component: Login },
  Users: { path: '/users', component: Users },
  Articles: { path: '/articles', component: '' },
  Chat: { path: '/chat', component: '' },
  Report: { path: '/report', component: '' },

  // Exact pages
  LoginPage: { path: '/login', component: LoginPage },
  UsersPage: { path: '/users', component: UsersPage },
  ArticlesPage: { path: '/articles', component: '' },
  ChatPage: { path: '/chat', component: '' },
  ReportPage: { path: '/report', component: '' },
}

export default routes;
import { lazy } from 'react';
import { FactCheck } from '@mui/icons-material';

const Login = lazy(() => import('./pages/Authentication/Login'));
const Register = lazy(() => import('./pages/Authentication/Register'));
const RecoveryPassword = lazy(() => import('./pages/Authentication/RecoveryPassword'));
const Home = lazy(() => import('./pages/Internal/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

const routes = [
    { path: '/', element: Home, title: 'Home', tab: true, icon: FactCheck, getLastRoute: false },
    { path: '/login', element: Login, title: 'Login', icon: null, getLastRoute: false },
    { path: '/register', element: Register, title: 'Registro', icon: null, getLastRoute: false },
    { path: '/recovery-password', element: RecoveryPassword, title: 'Recuperar Senha', icon: null, getLastRoute: false },
    { path: '*', element: NotFound, title: 'Página não encontrada', icon: null, getLastRoute: false },
]

export default routes;
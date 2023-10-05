import { lazy } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import { Add, AvTimer, Settings, SupervisorAccountOutlined } from '@material-ui/icons';
import { FactCheck } from '@mui/icons-material';

const Login = lazy(() => import('./pages/Authentication/Login'));
const Register = lazy(() => import('./pages/Authentication/Register'));
const RecoveryPassword = lazy(() => import('./pages/Authentication/RecoveryPassword'));
const Home = lazy(() => import('./pages/Internal/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Task = lazy(() => import('./pages/Internal/Task'));
const Profile = lazy(() => import('./pages/Internal/Profile'));
const Timeline = lazy(() => import('./pages/Internal/Timeline'));
const SettingsComp = lazy(() => import('./pages/Internal/Settings'));


const routes = [
    { path: '/', element: Home, title: 'Home', tab: true, icon: FactCheck, getLastRoute: false },
    { path: '/profile', element: Profile, title: 'perfil', tab: true, icon: SupervisorAccountOutlined, getLastRoute: false },
    { path: '/task', element: Task, title: 'Nova tarefa', tab: true, extraCss: 'add-button', icon: Add, getLastRoute: true },
    { path: '/timeline', element: Timeline, title: 'Linha do tempo', tab: true, icon: AvTimer, getLastRoute: false },
    { path: '/settings', element: SettingsComp, title: 'Configurações', tab: true, icon: Settings, getLastRoute: false },
    { path: '/login', element: Login, title: 'Login', icon: null, getLastRoute: false },
    { path: '/register', element: Register, title: 'Registro', icon: null, getLastRoute: false },
    { path: '/recovery-password', element: RecoveryPassword, title: 'Recuperar Senha', icon: null, getLastRoute: false },
    { path: '/task/:id', element: Task, title: 'Editar tarefa', icon: null, getLastRoute: true, getLastRoute: false },
    { path: '*', element: NotFound, title: 'Página não encontrada', icon: null, getLastRoute: false },
]

export default routes;
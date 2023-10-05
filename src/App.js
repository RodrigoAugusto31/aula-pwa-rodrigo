import './App.css';
import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Loading, Menu } from './components';
import routes from './routes';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { sync } from './utils/sync';

const routesWithoutMenu = ['/task', '/login', '/register', '/recovery-password'];
const loggoutRoutes = ['/login', '/register', '/recovery-password']

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL
};

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  const firebaseApp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebaseApp);

  useEffect(() => {
    setInterval(() => {
      sync(firebaseApp);
    }, 1000 * 60 * 5)
  }, [])

  useEffect(() => {
    sync(firebaseApp);
  }, [currentPath])

  return <Router>
    <Suspense fallback={<Loading/>}>
      <Routes>
        {
          routes.map((route, idx) => (
            <Route key={`${idx}_rotas`} exact path={route.path} element={<route.element firebaseApp={firebaseApp} loggoutRoutes={loggoutRoutes} setCurrentPath={setCurrentPath}/>} />
          ))
        }
      </Routes>
    </Suspense>
    <br></br>
    { !routesWithoutMenu.includes(currentPath) ? 
      <Menu routes={routes} currentPath={currentPath}/> : null
    }
  </Router>;
}

export default App;

import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './routes/home';
import { DetailJob } from './routes/detail-job';
import { Login } from './routes/login';

import { Dashboard } from './routes/dashboard';
import { Security } from './routes/security';

import { NotFound } from './routes/not-found';
import { Register } from './routes/register';

import { Layout } from './layouts';
import AuthContext from './context/auth';

function App() {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) setUser(JSON.parse(data));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout.Default />}>
        <Route index element={<Home />} />
        <Route path="/jobs/:id" element={<DetailJob />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<Layout.Dashboard />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/account/security" element={<Security />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

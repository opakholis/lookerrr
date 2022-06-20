import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './routes/home';
import { DetailJob } from './routes/detail-job';
import { Register } from './routes/register';
import { Login } from './routes/login';

import { Dashboard } from './routes/dashboard';
import { TableJob } from './routes/table-job';
import { FormJob } from './routes/form-job';
import { Security } from './routes/security';
import { Profile } from './routes/profile';

import { ProtectedRoute } from './lib/protected-route';
import { NotFound } from './routes/not-found';
import { Layout } from './layouts';

import AuthContext from './context/auth';

function App() {
  const { setUser } = useContext(AuthContext);

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
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Layout.Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/jobs" element={<TableJob />} />
        <Route path="/dashboard/form" element={<FormJob />} />
        <Route path="/dashboard/account" element={<Profile />} />
        <Route path="/dashboard/account/security" element={<Security />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

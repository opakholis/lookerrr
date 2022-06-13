import { Route, Routes } from 'react-router-dom';

import { Home } from './routes/home';
import { Login } from './routes/login';
import { Dashboard } from './routes/dashboard';
// import { Register } from './routes/register';

import { NotFound } from './routes/not-found';
import { DashboardLayout } from './components/dashboard-layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="register" element={<Register />} /> */}
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

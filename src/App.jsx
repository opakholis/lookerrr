import { Route, Routes } from 'react-router-dom';

import { Home } from './routes/home';
import { Login } from './routes/login';
import { Dashboard } from './routes/dashboard';
import { NotFound } from './routes/not-found';
// import { Register } from './routes/register';

import { Layout } from './layouts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout.Default />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
      {/* <Route path="register" element={<Register />} /> */}
      <Route path="dashboard" element={<Layout.Dashboard />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

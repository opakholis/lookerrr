import { Route, Routes } from 'react-router-dom';

import { Home } from './routes/home';
import { Dashboard } from './routes/dashboard';
import { Login } from './routes/login';
import { Register } from './routes/register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) navigate('/login');
  }, []);

  return <div className="mx-auto h-full w-11/12">Dashboard</div>;
};

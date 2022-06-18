import { useContext, useEffect } from 'react';

import AuthContext from '../context/auth';

export const Dashboard = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <div className="mx-auto h-full w-full p-6 md:p-8">
      <h1 className="text-lg font-medium text-zinc-800">
        Holaa, {user.name}! <span aria-hidden>👋</span>
      </h1>
    </div>
  );
};

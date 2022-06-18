import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';

import { Sidebar } from '../components/sidebar';

export const DashboardLayout = () => {
  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-2xl">
      <Sidebar />
      <div className="h-full flex-grow">
        <Header />
        <main className="overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

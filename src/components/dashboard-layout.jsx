import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';

export const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="h-full flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

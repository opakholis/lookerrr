import { Outlet } from 'react-router-dom';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

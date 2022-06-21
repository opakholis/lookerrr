import { useContext } from 'react';
import { Link, useMatch } from 'react-router-dom';

import AuthContext from '../context/auth';

import Logo from '../logo.svg';

export const Header = () => {
  const { user } = useContext(AuthContext);
  const match = useMatch({ path: '/dashboard/*' });

  const renderLogo = () => {
    if (!user || !match) {
      return (
        <Link to="/">
          <img src={Logo} alt="logo" className="h-28 w-28" />
        </Link>
      );
    }
  };

  return (
    <header className="border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center">{renderLogo()}</div>

        <div className="flex items-center">
          {!user ? (
            <Link
              to="/login"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Login
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="my-2.5 flex items-center rounded-xl p-2 hover:bg-zinc-100 md:space-x-2.5 md:py-1.5 md:pl-2.5 md:pr-4"
            >
              <img
                src={user.image_url}
                alt={user.name}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="hidden md:block">
                <h3 className="text-sm font-medium text-zinc-800">
                  {user.name}
                </h3>
                <p className="text-xs text-gray-600">{user.email}</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

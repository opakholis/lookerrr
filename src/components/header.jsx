import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth';

import Logo from '../logo.svg';

export const Header = () => {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <header className="border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center">
          {!user && (
            <Link to="/" className="flex">
              <img src={Logo} alt="logo" className="h-16 w-auto" />
            </Link>
          )}
        </div>

        <div className="flex items-center">
          {!user ? (
            <Link
              to="/login"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center md:space-x-2.5">
              <img
                src={user.image_url}
                alt={user.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="hidden md:block">
                <h3 className="text-sm font-medium text-zinc-800">
                  {user.name}
                </h3>
                <p className="text-xs text-gray-600">{user.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

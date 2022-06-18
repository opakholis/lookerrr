import { Link } from 'react-router-dom';

import Logo from '../logo.svg';

export const Header = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center">
          <Link to="/" className="flex">
            <img src={Logo} alt="logo" className="h-16 w-auto" />
          </Link>
        </div>

        <div className="flex items-center">
          <Link
            to="/login"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

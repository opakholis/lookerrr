import { Link } from 'react-router-dom';
import { MenuIcon, UserCircleIcon } from '@heroicons/react/outline';

import Logo from '../logo.svg';
import { NavMenu } from '../lib/navigation-data';

export const Header = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center">
          <button type="button" className="p-2 sm:mr-4 md:hidden">
            <MenuIcon className="h-6 w-6 text-zinc-800" />
          </button>

          <Link to="/" className="hidden md:flex">
            <img src={Logo} alt="logo" className="h-16 w-auto" />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex md:space-x-10 md:text-xs md:font-bold md:uppercase md:tracking-wide md:text-gray-500">
            {NavMenu.map(({ name, href }) => (
              <a
                key={href}
                href={href}
                className="block h-16 border-b-2 border-transparent leading-[4rem] hover:border-current hover:text-indigo-700"
              >
                {name}
              </a>
            ))}
          </nav>

          <div className="ml-8 flex items-center">
            <div className="flex items-center">
              <span>
                <Link
                  to="/login"
                  className="block border-b-2 border-transparent py-6 px-2 hover:border-indigo-700"
                >
                  <UserCircleIcon className="h-6 w-6 text-zinc-500" />
                  <span className="sr-only"> Account </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

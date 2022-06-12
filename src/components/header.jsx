import { AccountIcon, MenuIcon } from './icons';
import Logo from '../logo.svg';
import { Link } from 'react-router-dom';

const NavItem = [
  {
    name: 'Jobs',
    path: '#jobs'
  },
  {
    name: 'Companies',
    path: '#companies'
  },
  {
    name: 'About',
    path: '#about'
  }
];

export const Header = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center">
          <button type="button" className="p-2 sm:mr-4 md:hidden">
            <MenuIcon />
          </button>

          <a href="" className="hidden md:flex">
            <img src={Logo} alt="logo" className="h-16 w-auto" />
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex md:space-x-10 md:text-xs md:font-bold md:uppercase md:tracking-wide md:text-gray-500">
            {NavItem.map(({ name, path }) => (
              <a
                key={path}
                href={path}
                className="block h-16 border-b-2 border-transparent leading-[4rem] hover:border-current hover:text-indigo-700"
              >
                {name}
              </a>
            ))}
          </nav>

          <div className="ml-8 flex items-center">
            <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
              <span>
                <Link
                  to="/login"
                  className="block border-b-2 border-transparent p-6 hover:border-indigo-700"
                >
                  <AccountIcon />
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

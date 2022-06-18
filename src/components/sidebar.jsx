import { createElement } from 'react';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Cookies from 'js-cookie';
import clsx from 'clsx';
import Logo from '../logo.svg';

import { SidebarMenu } from '../lib/navigation-data';

const CustomLink = ({ children, to, className }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={clsx(
        'flex items-center rounded-lg p-2.5 text-zinc-500 hover:bg-zinc-100 md:px-4 md:py-3',
        match && 'bg-zinc-100 text-zinc-700',
        className
      )}
    >
      {children}
    </Link>
  );
};

export const Sidebar = () => {
  const navigate = useNavigate();

  const renderItem = (item) => {
    return (
      <>
        {createElement(item.icon, {
          className: 'h-6 w-6 text-zinc-400',
          'aria-hidden': 'true'
        })}
        <span className="hidden text-sm font-medium md:ml-3 md:block">
          {item.name}
        </span>
      </>
    );
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    Cookies.remove('token');
    navigate('/login', { replace: true });
  };

  return (
    <div className="flex h-screen w-20 flex-col justify-between overflow-y-auto border-r bg-white md:w-64">
      <div className="px-4 pb-6">
        <img src={Logo} alt="logo" className="h-16 w-auto" />
        <nav className="mt-6 flex flex-col space-y-2">
          {SidebarMenu.map((item) => {
            if (item.children) {
              return (
                <details key={'index' + 1} className="group">
                  <summary className="flex cursor-pointer items-center rounded-lg px-4 py-3 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    {renderItem(item)}
                    <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                      <ChevronDownIcon className="h-4 w-4 text-gray-500" />
                    </span>
                  </summary>
                  <nav className="mt-1.5 flex flex-col md:ml-8">
                    {item.children.map((child) => {
                      if (child.name === 'Logout') {
                        return (
                          <button
                            key={child.name}
                            onClick={handleLogout}
                            className="flex items-center rounded-lg p-2.5 text-zinc-500 hover:bg-zinc-100 md:px-4 md:py-3"
                          >
                            {renderItem(child)}
                          </button>
                        );
                      } else {
                        return (
                          <CustomLink to={child.href} key={child.name}>
                            {renderItem(child)}
                          </CustomLink>
                        );
                      }
                    })}
                  </nav>
                </details>
              );
            }
            return (
              <CustomLink key={item.href} to={item.href}>
                {renderItem(item)}
              </CustomLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

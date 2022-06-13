import { createElement } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/outline';
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
        'flex items-center rounded-lg p-2.5 text-zinc-500 md:px-4 md:py-3',
        match && 'bg-zinc-100',
        className
      )}
    >
      {children}
    </Link>
  );
};

export const Sidebar = () => {
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

  return (
    <div className="flex h-screen w-20 flex-col justify-between border-r bg-white md:w-64">
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
                    {item.children.map((child) => (
                      <CustomLink to={child.href} key={child.name}>
                        {renderItem(child)}
                      </CustomLink>
                    ))}
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

      {/* bottom of sidebar */}
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href=""
          className="flex shrink-0 items-center bg-white p-4 hover:bg-gray-50"
        >
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://www.hyperui.dev/photos/man-4.jpeg"
            alt="Simon Lewis"
          />

          <div className="hidden md:ml-1.5 md:block">
            <p className="text-xs">
              <strong className="block font-medium">Simon Lewis</strong>

              <span> simonlewis@fakemail.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';

export const Breadcrumb = ({ role }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex items-center space-x-1 text-sm text-zinc-800"
      >
        <li>
          <Link
            to="/"
            className="block font-medium transition-colors hover:text-zinc-600"
            href="/"
          >
            Home
          </Link>
        </li>

        <li>
          <ChevronRightIcon className="h-5 w-5 text-zinc-500" />
        </li>

        <li>
          <div className="text-zinc-600">{role}</div>
        </li>
      </ol>
    </nav>
  );
};

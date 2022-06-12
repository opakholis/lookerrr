import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';

export const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Not Found';
  }, []);

  return (
    <main className="mx-auto h-screen w-full max-w-screen-lg px-6 lg:px-12">
      <div class="flex h-full w-full flex-col items-center justify-center">
        <h2 class="text-lg text-zinc-600">Woppsss!</h2>

        <p class="mt-4 text-2xl font-medium text-indigo-600">404 - Not Found</p>

        <Link
          to="/"
          class="mt-8 inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-500"
        >
          Kembali
          <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
        </Link>
      </div>
    </main>
  );
};

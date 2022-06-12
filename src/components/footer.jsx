import { ChevronUpIcon } from '@heroicons/react/solid';
import Logo from '../logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-zinc-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
          <a
            className="inline-block rounded-full bg-indigo-600 p-2 text-white shadow transition hover:bg-indigo-500 sm:p-3 lg:p-4"
            href="#root"
          >
            <span className="sr-only">Back to top</span>
            <ChevronUpIcon className="h-6 w-6 text-white" />
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-indigo-600 lg:justify-start">
              <img src={Logo} alt="logo" className="h-20 w-auto" />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-zinc-500 lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <nav className="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
            <h2 className="sr-only" id="footer-navigation">
              Footer navigation
            </h2>

            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-zinc-700 transition hover:text-zinc-700/75"
                  href="#jobs"
                >
                  Jobs
                </a>
              </li>

              <li>
                <a
                  className="text-zinc-700 transition hover:text-zinc-700/75"
                  href="#companies"
                >
                  Companies
                </a>
              </li>

              <li>
                <a
                  className="text-zinc-700 transition hover:text-zinc-700/75"
                  href="#about"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 text-center text-sm text-zinc-400 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

import { SearchIcon } from './icons';

export const Hero = () => {
  return (
    <div className="mx-auto h-60 w-full max-w-screen-xl px-6 md:h-80 md:px-12">
      <div className="flex h-full flex-col items-center justify-end">
        <h1 className="text-center text-3xl font-bold tracking-tight text-zinc-800 md:text-5xl">
          Temukan{' '}
          <span className="text-indigo-700 underline decoration-wavy">
            Pekerjaan
          </span>{' '}
          Impian
        </h1>
        <p className="my-6 text-center text-zinc-700">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
      <div className="mx-auto flex w-full justify-center">
        <div className="flex w-full items-center justify-center rounded-lg border-2 border-zinc-100 bg-white py-2 px-4 shadow-lg shadow-zinc-100 focus-within:border-indigo-700/80 md:w-3/4 lg:w-3/5">
          <SearchIcon />
          <input
            type="text"
            className="w-full border-none bg-transparent pl-4 text-zinc-700 focus:ring-0"
            placeholder="Masukan kata kunci"
          />
        </div>
      </div>
    </div>
  );
};

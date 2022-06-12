export const Job = ({ data }) => {
  return (
    <a
      href=""
      className="group mb-4 flex transform break-inside-avoid flex-col justify-between rounded-xl border border-zinc-100 bg-white p-4 shadow-lg shadow-zinc-100 transition duration-200 hover:scale-105 hover:border-indigo-400 hover:shadow-lg lg:hover:scale-110"
    >
      <div>
        <h5 className="text-lg font-bold text-indigo-600 md:text-xl lg:text-2xl">
          {data.company_name}
        </h5>
        <div className="mt-4 border-t-2 border-zinc-200/60 pt-2">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            {data.title}
          </p>
        </div>
      </div>

      <div className="mt-16 inline-flex items-center text-indigo-600">
        <p className="font-medium lg:text-lg">
          {data.job_tenure} &#183; {data.job_type}
        </p>
      </div>
    </a>
  );
};

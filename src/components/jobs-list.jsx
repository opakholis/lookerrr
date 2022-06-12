import { Job } from './job';

export const JobsList = ({ jobs, search }) => {
  const filteredJobs = jobs?.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company_name.toLowerCase().includes(search.toLowerCase())
  );

  const renderJobs = () => {
    if (filteredJobs.length < 3) {
      return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <Job data={job} key={job.id} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="md:masonry-2-col lg:masonry-3-col">
          {filteredJobs.map((job) => (
            <Job data={job} key={job.id} />
          ))}
        </div>
      );
    }
  };

  return (
    <div
      id="jobs"
      className="mx-auto mb-12 mt-28 w-full max-w-screen-lg scroll-mt-32 px-6 md:px-12"
    >
      {!jobs
        ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} />)
        : renderJobs()}
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="mb-4 break-inside-avoid bg-white p-4 shadow-lg shadow-zinc-100 ">
      <div className="animate-pulse">
        <div className="h-10 w-full rounded bg-zinc-100" />
        <div className="mt-4 mb-2 h-28 w-full rounded bg-zinc-100" />
        <div className="h-8 w-full rounded bg-zinc-100" />
      </div>
    </div>
  );
};

import { useEffect, useState } from 'react';

import { Job } from './job';
import { getAllJobs } from '../api';

export const JobsList = () => {
  const [jobs, setJobs] = useState(null);

  const fetchJobs = async () => {
    try {
      const res = await getAllJobs();
      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [jobs]);

  return (
    <div
      id="jobs"
      className="mx-auto mb-12 mt-28 w-full max-w-screen-lg scroll-mt-32 px-6 md:px-12"
    >
      <div className="md:masonry-2-col lg:masonry-3-col">
        {!jobs
          ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} />)
          : jobs.data.map((job) => <Job key={job.id} data={job} />)}
      </div>
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

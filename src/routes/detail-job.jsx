import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BriefcaseIcon, CashIcon } from '@heroicons/react/outline';

import { Breadcrumb } from '../components/breadcrumb';
import { toPrice } from '../utils/toPrice';

import { job as currentJob } from '../api';

export const DetailJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const fetchJob = async () => {
    try {
      await currentJob.detail(id).then((res) => {
        setJob(res.data);
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  });

  if (!job) {
    return (
      <div className="flex h-[75vh] items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto mb-12 mt-8 min-h-screen w-full max-w-screen-lg  px-6 md:px-12">
      <Breadcrumb role={job.title} />
      <div className="mt-4 w-3/4 space-y-6">
        <section className="flex">
          <img
            src={job.company_image_url}
            alt="job"
            className="h-28 w-28 rounded-full object-cover"
          />
          <article className="mt-2 ml-4 space-y-3">
            <h2 className="text-lg font-medium">{job.title}</h2>
            <div className="font-medium text-indigo-600">
              {job.company_name} &#183; {job.company_city}
            </div>
            <div className="flex items-center">
              <CashIcon className="h-5 w-5 text-zinc-500" />
              <span className="ml-2">
                {toPrice(job.salary_min)} - {toPrice(job.salary_max)}
              </span>
            </div>
            <div className="flex items-center">
              <BriefcaseIcon className="h-5 w-5 text-zinc-500" />
              <span className="ml-2">{job.job_tenure}</span>
            </div>
          </article>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-800">
            Deskripsi Pekerjaan
          </h2>
          <p className="mb-8 leading-loose text-zinc-600">
            {job.job_description}
          </p>
          <h2 className="mb-2 text-lg font-medium text-zinc-800">
            Kualifikasi Pekerjaan
          </h2>
          <p className="leading-loose text-zinc-600">{job.job_qualification}</p>
        </section>
      </div>
    </div>
  );
};

import { useEffect, useState } from 'react';

import { JobsList } from '../components/jobs-list';
import { Hero } from '../components/hero';

import { job } from '../api';

export const Home = () => {
  const [jobs, setJobs] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const fetchJobs = async () => {
    try {
      await job.all().then((res) => {
        setJobs(res.data.data);
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Hero inputValue={searchValue} setInputValue={setSearchValue} />
      <JobsList jobs={jobs} search={searchValue} />
    </>
  );
};

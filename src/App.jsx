import { useEffect, useState } from 'react';

import { Navigation } from './components/navigation';
import { JobsList } from './components/jobs-list';
import { Hero } from './components/hero';
import { Footer } from './components/footer';

import { getAllJobs } from './api';

function App() {
  const [jobs, setJobs] = useState(null);
  const [searchValue, setSearchValue] = useState('');

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
  }, []);

  return (
    <>
      <Navigation />
      <Hero inputValue={searchValue} setInputValue={setSearchValue} />
      <JobsList jobs={jobs} search={searchValue} />
      <Footer />
    </>
  );
}

export default App;

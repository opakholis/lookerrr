import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../components/header';
import { JobsList } from '../components/jobs-list';
import { Hero } from '../components/hero';
import { Footer } from '../components/footer';

import { getAllJobs } from '../api';

export const Home = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const fetchJobs = async () => {
    try {
      const res = await getAllJobs();
      setJobs(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) navigate('/dashboard', { replace: true });
  });

  return (
    <>
      <Header />
      <Hero inputValue={searchValue} setInputValue={setSearchValue} />
      <JobsList jobs={jobs} search={searchValue} />
      <Footer />
    </>
  );
};

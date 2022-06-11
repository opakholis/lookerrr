import client from './request';

const getAllJobs = () => {
  return client.get('/job-vacancy');
};

const getJobById = (id) => {
  return client.get(`/job-vacancy/${id}`);
};

export { getAllJobs, getJobById };

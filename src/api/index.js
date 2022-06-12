import client from './request';

const getAllJobs = () => {
  return client.get('/job-vacancy');
};

const getJobById = (id) => {
  return client.get(`/job-vacancy/${id}`);
};

const login = ({ email, password }) => {
  return client.post('/login', { email, password });
};

export { getAllJobs, getJobById, login };

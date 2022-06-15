import client from './request';

const getAllJobs = () => {
  return client.get('/job-vacancy');
};

const getJobById = (id) => client.get(`/job-vacancy/${id}`);

const login = ({ email, password }) =>
  client.post('/login', { email, password });

export { getAllJobs, getJobById, login };

import client from './request';

const getAllJobs = () => client.get('/job-vacancy');

const getJobById = (id) => client.get(`/job-vacancy/${id}`);

const login = ({ email, password }) =>
  client.post('/login', { email, password });

const changePassword = (oldPassword, newPassword, token) =>
  client.post(
    '/change-password',
    {
      current_password: oldPassword,
      new_password: newPassword
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

export { getAllJobs, getJobById, login, changePassword };

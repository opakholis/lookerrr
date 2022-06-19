import client from './request';

const user = {
  login: (credentials) => client.post('/login', credentials),
  register: (payload) => client.post('/register', payload),
  change_password: (payload) =>
    client.post('/change-password', payload, {
      headers: {
        Authorization: `Bearer ${payload.token}`
      }
    })
};

const job = {
  all: () => client.get('/job-vacancy'),
  detail: (id) => client.get(`/job-vacancy/${id}`),
  add: (payload) => client.post('/job-vacancy', payload),
  edit: (id, payload) => client.put(`/job-vacancy/${id}`, payload),
  delete: (id, token) =>
    client.delete(`/job-vacancy/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
};

export { job, user };

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import { user } from '../api';

export const Security = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value
    });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const { oldPassword, newPassword, confirmPassword } = password;
      const token = Cookies.get('token');

      const body = {
        current_password: oldPassword,
        new_password: newPassword
      };

      if (newPassword !== confirmPassword) {
        console.log('Passwords do not match');
      } else {
        await user.change_password({ ...body, token }).then((res) => {
          console.log(res);
          setPassword({
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
          });
          console.log(res.data);
        });
      }
    } catch (err) {
      console.log(err.response?.data);
      setPassword({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }
  };

  useEffect(() => {
    document.title = 'Keamanan';
  }, []);

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) navigate('/login');
  }, []);

  return (
    <div className="mx-auto h-full w-11/12">
      <h2>Keamanan</h2>
      <form className="w-full max-w-xs" onSubmit={handleChangePassword}>
        <div className="mb-6 mt-8">
          <label htmlFor="oldPassword" className="text-sm font-medium">
            Password Lama
          </label>
          <input
            id="oldPassword"
            name="oldPassword"
            type="password"
            value={password.oldPassword}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Masukkan password saat ini"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="newPassword" className="text-sm font-medium">
            Password Baru
          </label>
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            value={password.newPassword}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Masukkan password saat ini"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Konfirmasi Password Baru
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={password.confirmPassword}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Konfirmasi password"
          />
        </div>
        <button
          type="submit"
          className="mt-6 block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

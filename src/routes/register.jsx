import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  EyeOffIcon,
  AtSymbolIcon,
  EyeIcon,
  UserIcon,
  DeviceMobileIcon
} from '@heroicons/react/outline';

import { user } from '../api';

import Logo from '../logo.svg';

export const Register = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: '',
    imageUrl: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // visible password
  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { name, imageUrl, email, password } = input;
      const body = {
        name,
        image_url: imageUrl,
        email,
        password
      };

      await user.register(body).then(() => {
        // redirect to login
        navigate('/login', { replace: true });
      });
    } catch (err) {
      console.log(err.response?.data);
      setInput({ ...input, name: '', imageUrl: '', email: '', password: '' });
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) navigate('/dashboard', { replace: true });
  });

  useEffect(() => {
    document.title = 'Register';
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <img src={Logo} alt="logo" className="mx-auto h-24 w-auto" />

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          onSubmit={handleRegister}
          className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Nama
            </label>

            <div className="relative mt-1">
              <input
                id="name"
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Masukkan nama"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <UserIcon className="h-5 w-5 text-zinc-400" />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="imageUrl" className="text-sm font-medium">
              Foto Profil
            </label>

            <div className="relative mt-1">
              <input
                id="imageUrl"
                type="text"
                name="imageUrl"
                value={input.imageUrl}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Masukkan nama"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <DeviceMobileIcon className="h-5 w-5 text-zinc-400" />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>

            <div className="relative mt-1">
              <input
                id="email"
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Masukkan email"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <AtSymbolIcon className="h-5 w-5 text-zinc-400" />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>

            <div className="relative mt-1">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={input.password}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Masukkan password"
              />

              <button
                className="absolute inset-y-0 right-4 inline-flex items-center"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-zinc-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-zinc-400" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-500">
            Sudah memiliki akun?
            <Link className="ml-1 underline" to="/login">
              Masuk
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

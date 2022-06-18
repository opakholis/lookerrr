import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeOffIcon, AtSymbolIcon, EyeIcon } from '@heroicons/react/outline';

import { user } from '../api';

import Logo from '../logo.svg';

export const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = input;
      await user
        .login({ email, password })
        .then((res) => {
          console.log(res);
          Cookies.set('token', res.data.token);
        })
        .then(() => {
          // redirect to dashboard
          navigate('/dashboard', { replace: true });
        });
    } catch (err) {
      console.log(err.response?.data);
      setInput({ email: '', password: '' });
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) navigate('/dashboard', { replace: true });
  });

  useEffect(() => {
    document.title = 'Login';
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
          onSubmit={handleLogin}
          className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
        >
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
            Login
          </button>

          <p className="text-center text-sm text-gray-500">
            Belum punya akun?
            <Link className="ml-1 underline" to="/register">
              Daftar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

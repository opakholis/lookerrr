import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { EyeIcon, EyeOffIcon, AtSymbolIcon } from '../components/icons';
import { login } from '../api';

import Logo from '../logo.svg';

export const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
    showPassword: false
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = input;

      const res = await login({ email, password });
      const { token } = res.data;
      Cookies.set('token', token);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) navigate('/dashboard', { replace: true });
  });

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
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Masukkan email"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <AtSymbolIcon />
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
                type={input.showPassword ? 'text' : 'password'}
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Masukkan password"
              />

              <button
                className="absolute inset-y-0 right-4 inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setInput({ ...input, showPassword: !input.showPassword });
                }}
              >
                {input.showPassword ? <EyeOffIcon /> : <EyeIcon />}
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

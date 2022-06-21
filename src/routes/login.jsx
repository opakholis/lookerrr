import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { EyeOffIcon, EyeIcon } from '@heroicons/react/outline';

import { ErorrMsg } from '../components/error-message';
import { FormLabel, InputText } from '../ui/forms';

import AuthContext from '../context/auth';
import { user as userApi } from '../api';

import Logo from '../logo.svg';

export const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const [showPassword, setShowPassword] = useState(false);

  // visible password
  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data, e) => {
    try {
      await userApi
        .login(data)
        .then((res) => {
          setUser(res.data.user);
          Cookies.set('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.user));
        })
        .then(() => {
          // redirect to dashboard
          navigate('/dashboard', { replace: true });
        });
    } catch (err) {
      e.target.reset();
      toast.error('Email/Password tidak ditemukan!');
    }
  };

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-auto max-w-lg">
        <img src={Logo} alt="logo" className="mx-auto h-24 w-auto" />

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
        >
          <div>
            <FormLabel htmlFor="email">Email</FormLabel>
            <InputText
              id="email"
              className="pr-12"
              placeholder="Masukkan email"
              {...register('email', {
                required: 'Email tidak boleh kosong',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Format email tidak sesuai'
                }
              })}
            />
            {errors.email && <ErorrMsg msg={errors.email.message} />}
          </div>

          <div>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputText
              id="password"
              type={showPassword ? 'text' : 'password'}
              className="pr-12"
              placeholder="Masukkan password"
              {...register('password', {
                required: 'Password tidak boleh kosong'
              })}
            >
              <button
                className="absolute inset-y-0 right-4 inline-flex items-center"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOffIcon aria-hidden className="h-5 w-5 text-zinc-400" />
                ) : (
                  <EyeIcon aria-hidden className="h-5 w-5 text-zinc-400" />
                )}
              </button>
            </InputText>
            {errors.password && <ErorrMsg msg={errors.password.message} />}
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

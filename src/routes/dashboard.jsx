import { useContext, useEffect, useState } from 'react';
import { job } from '../api';

import AuthContext from '../context/auth';

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      await job.all().then((res) => {
        setData(res?.data.data);
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <div className="mx-auto h-full w-full p-6 md:p-8">
      <h1 className="text-lg font-medium text-zinc-800">
        Holaa, {user.name}! <span aria-hidden>👋</span>
      </h1>
      <div className="mt-8">
        <h2 className="py-3 font-medium tracking-wide text-zinc-800">
          Statistik
        </h2>
        <div className="w-52 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
          <a className="block rounded-xl bg-white p-6 sm:p-8" href="">
            <div className="mt-16 sm:pr-8">
              <h5 className="text-xl font-bold text-gray-900">
                {data?.length ?? '--'}
              </h5>
              <p className="mt-2 text-sm text-gray-500">
                Total Lowongan Tersedia
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

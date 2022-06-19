import { useContext, useEffect } from 'react';
import AuthContext from '../context/auth';

export const Profile = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = 'Detail Profile';
  }, []);

  return (
    <div className="mx-auto h-full w-11/12">
      <div className="flex items-center space-x-4">
        <img
          src={user.image_url}
          alt={user.name}
          className="h-28 w-28 rounded-full border border-zinc-400 object-cover"
        />
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide text-zinc-800">
            {user.name}
          </h2>
          <p className="text-zinc-600">{user.email}</p>
        </section>
      </div>

      {/* alert */}
      <div
        className="mt-8 w-full max-w-sm rounded border border-red-900/10 bg-red-50 p-4 text-red-700"
        role="alert"
      >
        <strong className="text-sm font-medium">
          Fitur Edit Profile belum tersedia.
        </strong>
      </div>
    </div>
  );
};

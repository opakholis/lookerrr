import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { job } from '../api';

export const FormJob = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  useEffect(() => {
    document.title = 'Data Form';
  }, []);

  return (
    <div className="mx-auto h-full w-full p-6 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
              Role
            </label>
            <input
              id="title"
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Front-end Developer"
              {...register('title', { required: true })}
            />
          </div>

          <div>
            <label
              htmlFor="company_name"
              className="mb-2 block text-sm font-medium"
            >
              Perusahaan
            </label>
            <input
              id="company_name"
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Google"
              {...register('company_name')}
            />
          </div>

          <div>
            <label
              htmlFor="company_city"
              className="mb-2 block text-sm font-medium"
            >
              Lokasi
            </label>
            <input
              id="company_city"
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="Jakarta"
              {...register('company_city')}
            />
          </div>
        </section>

        <div>
          <label
            htmlFor="company_logo"
            className="mb-2 block text-sm font-medium"
          >
            Logo Instansi
          </label>
          <input
            id="company_logo"
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            placeholder="https://www.google.com/logo.png"
            {...register('company_image_url')}
          />
        </div>

        <div>
          <label
            htmlFor="job_description"
            className="mb-2 block text-sm font-medium"
          >
            Deskripsi
          </label>
          <input
            id="job_description"
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            placeholder="Melakukan implementasi tampilan web"
            {...register('job_description', { required: true })}
          />
        </div>

        <div>
          <label
            htmlFor="job_qualification"
            className="mb-2 block text-sm font-medium"
          >
            Kualifikasi
          </label>
          <input
            id="job_qualification"
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            placeholder="ReactJS, NodeJS, MongoDB"
            {...register('job_qualification')}
          />
        </div>

        <section className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="job_type"
              className="mb-2 block text-sm font-medium"
            >
              Penempatan
            </label>
            <select
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              id="job_type"
              {...register('job_type')}
            >
              <option>--Pilih--</option>
              <option value="on-site">On-site</option>
              <option value="hybird">Hybird</option>
              <option value="remote">Full Remote</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="job_tenure"
              className="mb-2 block text-sm font-medium"
            >
              Tipe Pekerjaan
            </label>
            <select
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              id="job_tenure"
              {...register('job_tenure')}
            >
              <option>--Pilih--</option>
              <option value="magang">Magang</option>
              <option value="ful-ltime">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="kontrak">Kontrak</option>
            </select>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="salary_min"
              className="mb-2 block text-sm font-medium"
            >
              Salary Minimal
            </label>
            <input
              id="salary_min"
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="8000000"
              {...register('salary_min')}
            />
          </div>

          <div>
            <label
              htmlFor="salary_max"
              className="mb-2 block text-sm font-medium"
            >
              Salary Maksimal
            </label>
            <input
              id="salary_max"
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              placeholder="13000000"
              {...register('salary_max')}
            />
          </div>
        </section>

        <div className="pb-8">
          <label
            htmlFor="job_status"
            className="mb-2 block text-sm font-medium"
          >
            Status Pekerjaan
          </label>
          <div className="relative">
            <input
              type="checkbox"
              id="job_status"
              name="job_status"
              className="h-5 w-5 rounded"
              defaultValue={0}
              value={1}
              {...register('job_status')}
            />
            <span className="absolute inset-y-0 ml-2 inline-flex items-center rounded-md border border-blue-500 bg-blue-50 px-3 py-3 text-sm text-zinc-800">
              <p>Tersedia</p>
            </span>
          </div>
        </div>

        <submit
          type="submit"
          className="mt-8 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Submit
        </submit>
      </form>
    </div>
  );
};

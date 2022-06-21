import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';

import { FormLabel, InputCheckbox, InputSelect, InputText } from '../ui/forms';
import { JobTypeOption, JobTenureOption } from '../lib/jobs-option';
import { job } from '../api';

export const FormJob = () => {
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      job_status: 0
    }
  });

  const onSubmit = (data, e) => {
    try {
      const token = Cookies.get('token');
      const res = job.create(data, token).then(() => {
        toast.success('Data berhasil ditambahkan');
        e.target.reset();
      });
      console.log(`response: ${res}`);
    } catch (err) {
      console.log(err.response?.data);
      toast.error(err.response?.data?.message);
    }
  };

  useEffect(() => {
    document.title = 'Data Form';
  }, []);

  return (
    <div className="mx-auto h-full w-full p-6 md:p-8">
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8 space-y-4">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <FormLabel htmlFor="title">Role</FormLabel>
            <InputText
              id="title"
              placeholder="Front-end Developer"
              {...register('title', { required: true })}
            />
          </div>

          <div>
            <FormLabel htmlFor="company_name">Name Perusahaan</FormLabel>
            <InputText
              id="company_name"
              placeholder="Google"
              {...register('company_name')}
            />
          </div>

          <div>
            <FormLabel htmlFor="company_city">Lokasi</FormLabel>
            <InputText
              id="company_city"
              placeholder="Jakarta"
              {...register('company_city')}
            />
          </div>
        </section>

        <div>
          <FormLabel htmlFor="company_logo">Logo Perusahaan</FormLabel>
          <InputText
            id="company_logo"
            placeholder="https://www.google.com/logo.png"
            {...register('company_image_url')}
          />
        </div>

        <div>
          <FormLabel htmlFor="job_description">Deskripsi</FormLabel>
          <InputText
            id="job_description"
            placeholder="Melakukan implementasi tampilan web"
            {...register('job_description')}
          />
        </div>

        <div>
          <FormLabel htmlFor="job_qualification">Kualifikasi</FormLabel>
          <InputText
            id="job_qualification"
            placeholder="ReactJS, NodeJS, MongoDB"
            {...register('job_qualification')}
          />
        </div>

        <section className="grid gap-4 md:grid-cols-2">
          <div>
            <FormLabel htmlFor="job_type">Penempatan</FormLabel>
            <select
              className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
              id="job_type"
              {...register('job_type')}
            >
              {JobTypeOption.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <FormLabel htmlFor="job_tenure">Tipe Pekerjaan</FormLabel>
            <InputSelect id="job_tenure" {...register('job_tenure')}>
              {JobTenureOption.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </InputSelect>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div>
            <FormLabel htmlFor="salary_min">Salary Minimal</FormLabel>
            <InputText
              id="salary_min"
              placeholder="8000000"
              {...register('salary_min', { required: true })}
            />
          </div>

          <div>
            <FormLabel htmlFor="salary_max">Salary Maksimal</FormLabel>
            <InputText
              id="salary_max"
              placeholder="13000000"
              {...register('salary_max', { required: true })}
            />
          </div>
        </section>

        <div className="pb-4">
          <FormLabel htmlFor="job_status">Status Pekerjaan</FormLabel>
          <div className="relative">
            <InputCheckbox
              id="job_status"
              value={1}
              {...register('job_status')}
            />
            <span className="absolute inset-y-0 ml-2 inline-flex items-center rounded-md border border-blue-500 bg-blue-50 px-3 py-3 text-sm text-zinc-800">
              <p>Tersedia</p>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            Submit
          </button>

          <button
            type="reset"
            onClick={reset}
            className="rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

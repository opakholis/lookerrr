import { useEffect, useMemo, useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import Cookies from 'js-cookie';

import { job } from '../api';
import { Datatable } from '../components/datatable';

const Button = ({ onClick, purpose }) => {
  return (
    <button
      onClick={onClick}
      className="border:zinc-100 rounded-md border bg-zinc-50 p-2 hover:bg-zinc-100"
    >
      {purpose === 'edit' ? (
        <PencilIcon aria-label="Edit" className="h-4 w-4 text-emerald-500" />
      ) : (
        <TrashIcon aria-label="Hapus" className="h-4 w-4 text-red-500" />
      )}
    </button>
  );
};

export const TableJob = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      await job.all().then((res) => {
        setData(res.data.data);
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
  const handleDelete = async (id) => {
    try {
      const cookie = Cookies.get('token');
      await job.delete(id, cookie).then((res) => {
        console.log(res.data);
        fetchData();
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Pekerjaan',
        accessor: 'title'
      },
      {
        Header: 'Jenis',
        accessor: 'job_type'
      },
      {
        Header: 'Masa Jabatan',
        accessor: 'job_tenure'
      },
      {
        Header: 'Instansi',
        accessor: 'company_name'
      },
      {
        Header: 'Lokasi',
        accessor: 'company_city'
      },
      {
        Header: 'Action',
        accessor: (originalRow) => (
          <div className="flex items-center justify-around space-x-1.5">
            <Button
              purpose="edit"
              onClick={() => console.log(originalRow.id)}
            />
            <Button onClick={() => handleDelete(originalRow.id)} />
          </div>
        )
      }
    ],
    []
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.title = 'Daftar Lowongan ';
  }, []);

  return (
    <div className="mx-auto mb-24 h-full w-full p-6 md:p-8">
      <Datatable data={data} columns={columns} />
    </div>
  );
};

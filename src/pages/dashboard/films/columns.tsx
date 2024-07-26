/* eslint-disable @typescript-eslint/no-explicit-any */
import { Film } from '@/store/slices/api/films';
import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<Film>[] = [
  {
    accessorKey: 'title',
    header: 'Film Title',
  },
  {
    accessorKey: 'release_date',
    header: 'Release Date',
  },
  {
    accessorKey: 'director',
    header: 'Director',
  },
  {
    accessorKey: 'producer',
    header: 'Producer',
  },
  {
    accessorKey: 'episode_id',
    header: 'Episode ID',
  },
  {
    accessorKey: 'characters',
    header: 'Character',
    cell: ({ row }: any) => {
      const value: string = row.getValue('characters')[0];
      return <span>{value}</span>;
    },
  },
  {
    header: 'Action',
    cell: () => {
      return (
        <Link to={`/dashboard/films/1`}>
          <Eye />
        </Link>
      );
    },
  },
];

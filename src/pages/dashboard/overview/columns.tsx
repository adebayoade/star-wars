import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
// import Link from 'next/link';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Films = {
  name: string;
  birth_year: string;
  hair_color: string;
  height: string;
  created: string;
};

export const columns: ColumnDef<Films>[] = [
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
    cell: ({ row }) => {
      return <span>{row.getValue('characters')[0]}</span>;
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

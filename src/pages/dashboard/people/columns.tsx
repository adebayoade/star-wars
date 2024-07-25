import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
// import Link from 'next/link';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type People = {
  id: string;
  name: string;
  birth_year: string;
  hair_color: string;
  height: string;
  created: string;
};

export const columns: ColumnDef<People>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'birth_year',
    header: 'Birth year',
  },
  {
    accessorKey: 'hair_color',
    header: 'Hair Color',
  },
  {
    accessorKey: 'height',
    header: 'Height',
  },
  {
    accessorKey: 'created',
    header: 'Created',
    cell: ({ row }) => {
      return <span>{dayjs(row.getValue('createdAt')).format('MMM DD, YYYY HH:MM A')}</span>;
    },
  },
  {
    // accessorKey: 'created',
    header: 'Action',
    cell: () => {
      return (
        <Link to={`/dashboard/people/1`}>
          <Eye />
        </Link>
      );
    },
  },
];

import { People } from '@/store/slices/api/people';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

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

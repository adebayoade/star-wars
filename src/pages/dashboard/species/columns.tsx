import { Species } from '@/store/slices/api/species';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<Species>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'classification',
    header: 'Classification',
  },
  {
    accessorKey: 'eye_colors',
    header: 'Eye colors',
  },
  {
    accessorKey: 'hair_colors',
    header: 'Hair Color',
  },
  {
    accessorKey: 'average_height',
    header: 'Height',
  },
  {
    accessorKey: 'created',
    header: 'Created',
    cell: ({ row }) => {
      return <span>{dayjs(row.getValue('created')).format('MMM DD, YYYY HH:MM A')}</span>;
    },
  },
  {
    header: 'Action',
    cell: () => {
      return (
        <Link to={`/dashboard/species/1`}>
          <Eye />
        </Link>
      );
    },
  },
];

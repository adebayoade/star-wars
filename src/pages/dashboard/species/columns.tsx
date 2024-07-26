import { SingleSpecies } from '@/store/slices/api/species';
import { UTIL } from '@/utils';
import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<SingleSpecies>[] = [
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
      return <span>{UTIL.dateFormatter(row.getValue('created'))}</span>;
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

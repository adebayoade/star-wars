/* eslint-disable @typescript-eslint/no-explicit-any */
import { Starship } from '@/store/slices/api/starships';
import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<Starship>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'model',
    header: 'Model',
  },
  {
    accessorKey: 'crew',
    header: 'Class',
  },
  {
    accessorKey: 'passengers',
    header: 'Passenger',
  },
  {
    accessorKey: 'length',
    header: 'Length',
    cell: ({ row }: any) => {
      return <span>{row.getValue('length')} Meters</span>;
    },
  },
  {
    accessorKey: 'films',
    header: 'Character',
    cell: ({ row }: any) => {
      return <span>{row.getValue('films')[0]}</span>;
    },
  },
  {
    header: 'Action',
    cell: () => {
      return (
        <Link to={`/dashboard/starships/1`}>
          <Eye />
        </Link>
      );
    },
  },
];

import { ColumnDef } from '@tanstack/react-table';
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
  },
  {
    accessorKey: 'films',
    header: 'Character',
    cell: ({ row }) => {
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

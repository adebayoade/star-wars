/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox } from '@/components/ui/checkbox';
import { Starship } from '@/store/slices/api/starships';
import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<Starship>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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

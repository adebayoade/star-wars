/* eslint-disable @typescript-eslint/no-explicit-any */
import { Film } from '@/store/slices/api/films';
import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<Film>[] = [
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

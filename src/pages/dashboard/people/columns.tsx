import { Checkbox } from '@/components/ui/checkbox';
import { Person } from '@/store/slices/api/people';
import { UTIL } from '@/utils';
import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<Person>[] = [
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
      return <span>{UTIL.dateFormatter(row.getValue('created'))}</span>;
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

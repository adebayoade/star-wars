import Heading from '@/components/ui/heading';
import { useGetPeopleQuery } from '@/store/slices/api/people';
import { DataTable } from './data-table';
import { columns } from './columns';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';

export default function People() {
  const { data, isLoading, error } = useGetPeopleQuery();

  return (
    <>
      <MetaData title={'People'} />
      <div className="container h-screen max-w-full mt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={error?.data?.message || error?.error} />
        ) : (
          <>
            <Heading title="People" />
            <DataTable columns={columns} data={data?.results} />
          </>
        )}
      </div>
    </>
  );
}

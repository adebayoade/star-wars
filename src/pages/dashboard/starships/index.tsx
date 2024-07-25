import Heading from '@/components/ui/heading';

import { DataTable } from './data-table';
import { columns } from './columns';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import { useGetStarshipsQuery } from '@/store/slices/api/starships';

export default function Starships() {
  const { data, isLoading, error } = useGetStarshipsQuery();

  return (
    <>
      <MetaData title={'Starships'} />
      <div className="container h-screen max-w-full mt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={error?.data?.message || error?.error} />
        ) : (
          <>
            <Heading title="Starships" />
            <DataTable columns={columns} data={data?.results} />
          </>
        )}
      </div>
    </>
  );
}

import Heading from '@/components/ui/heading';
import { Film, useGetFilmsQuery } from '@/store/slices/api/films';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import useErrorMessage from '@/hooks/useErrorMessage';
import { columns } from './columns';
import { DataTable } from '@/components/data-table';

export default function Films() {
  const { data: films, isLoading, error } = useGetFilmsQuery();
  const { errMsg } = useErrorMessage(error);

  return (
    <>
      <MetaData title={'Films'} />
      <div className="container h-screen max-w-full pt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={errMsg} />
        ) : (
          <>
            <Heading title="Films" />
            <DataTable columns={columns} data={films?.results as Film[]} />
          </>
        )}
      </div>
    </>
  );
}

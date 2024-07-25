import Heading from '@/components/ui/heading';

import { DataTable } from './data-table';
import { columns } from './columns';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import { useGetStarshipsQuery } from '@/store/slices/api/starships';

export default function Starships() {
  const { data, isLoading, error } = useGetStarshipsQuery();

  let errMsg = '';
  if (error) {
    // 2) Checking if error is FetchBaseQueryError based on
    // discriminated property 'status':
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
      // 3) We're left with the 3rd case, SerializedError:
    } else {
      // you can access all properties of `SerializedError` here
      errMsg = 'An error occurred';
    }
  }

  return (
    <>
      <MetaData title={'Starships'} />
      <div className="container h-screen max-w-full mt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={errMsg} />
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

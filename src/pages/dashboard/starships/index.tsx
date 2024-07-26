import Heading from '@/components/ui/heading';

import { DataTable } from './data-table';
import { columns } from './columns';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import { Starship, useGetStarshipsQuery } from '@/store/slices/api/starships';
import useErrorMessage from '@/hooks/useErrorMessage';

export default function Starships() {
  const { data: starship, isLoading, error } = useGetStarshipsQuery();
  const { errMsg } = useErrorMessage(error);

  return (
    <>
      <MetaData title={'Starships'} />
      <div className="container h-screen max-w-full pt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={errMsg} />
        ) : (
          <>
            <Heading title="Starships" />
            <DataTable columns={columns} data={starship?.results as Starship[]} />
          </>
        )}
      </div>
    </>
  );
}

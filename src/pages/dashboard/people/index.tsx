import Heading from '@/components/ui/heading';
import { Person, useGetPeopleQuery } from '@/store/slices/api/people';
import { DataTable } from './data-table';
import { columns } from './columns';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import useErrorMessage from '@/hooks/useErrorMessage';

export default function People() {
  const { data: people, isLoading, error } = useGetPeopleQuery();
  const { errMsg } = useErrorMessage(error);

  return (
    <>
      <MetaData title={'People'} />
      <div className="container h-screen max-w-full pt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={errMsg} />
        ) : (
          <>
            <Heading title="People" />
            <DataTable columns={columns} data={people?.results as Person[]} />
          </>
        )}
      </div>
    </>
  );
}

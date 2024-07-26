import Heading from '@/components/ui/heading';
import {  SingleSpecies, useGetSpeciesQuery } from '@/store/slices/api/species';
import { DataTable } from './data-table';
import { columns } from './columns';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import useErrorMessage from '@/hooks/useErrorMessage';

export default function Species() {
  const { data: species, isLoading, error } = useGetSpeciesQuery();
  const { errMsg } = useErrorMessage(error);

  return (
    <>
      <MetaData title={'Species'} />
      <div className="container h-screen max-w-full pt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={errMsg} />
        ) : (
          <>
            <Heading title="Species" />
            <DataTable columns={columns} data={species?.results as SingleSpecies[]} />
          </>
        )}
      </div>
    </>
  );
}

import Heading from '@/components/ui/heading';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import { useGetSingleSpeciesQuery } from '@/store/slices/api/species';
import useErrorMessage from '@/hooks/useErrorMessage';

export default function SingleSpecies() {
  const { data, isLoading, error } = useGetSingleSpeciesQuery();
  const { errMsg } = useErrorMessage(error);

  return (
    <>
      <div className="container h-screen max-w-full pt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={errMsg} />
        ) : (
          <div className="flex gap-10">
            <MetaData title={`${data?.name} | Species`} />
            <img alt="species" src="/images/species-placeholder.png"></img>
            <div className="flex flex-col gap-5">
              <div className="mt-7">
                <Heading className="text-black" size="lg" title={data?.name} />
              </div>

              <div className="flex flex-col gap-2 font-medium capitalize">
                <span>Designation: {data?.designation}</span>
                <span>Language: {data?.language}</span>
                <span>Eye colors: {data?.eye_colors}</span>
                <span>Average Lifespan: {data?.average_lifespan}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

import Heading from '@/components/ui/heading';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import { useGetSingleStarshipQuery } from '@/store/slices/api/starships';

export default function SingleStarship() {
  const { data, isLoading, error } = useGetSingleStarshipQuery();

  return (
    <>
      <div className="container h-screen max-w-full mt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message
            variant="destructive"
            text={error?.data?.message || error?.error || 'Not Found'}
          />
        ) : (
          <div className="flex gap-10">
            <MetaData title={`${data.name} | Starship`} />
            <img className="" alt="species" src="/images/species-placeholder.png"></img>
            <div className="flex flex-col gap-5">
              <div className="mt-7">
                <Heading className="text-black" size="lg" title={data.name} />
              </div>
              <div className="flex flex-col gap-2 font-medium capitalize">
                <span className="">Designation: {data.designation}</span>
                <span className="">Language: {data.language}</span>
                <span className="">Eye colors: {data.eye_colors}</span>
                <span className="">Average Lifespan: {data.average_lifespan}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

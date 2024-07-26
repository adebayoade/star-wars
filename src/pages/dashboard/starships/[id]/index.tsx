import Heading from '@/components/ui/heading';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import { useGetSingleStarshipQuery } from '@/store/slices/api/starships';
import useErrorMessage from '@/hooks/useErrorMessage';

export default function SingleStarship() {
  const { data, isLoading, error } = useGetSingleStarshipQuery();
  const { errMsg } = useErrorMessage(error);

  return (
    <>
      <div className="container h-screen max-w-full pt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={errMsg} />
        ) : (
          <div className="flex flex-col md:flex-row gap-10">
            <MetaData title={`${data?.name} | Starship`} />
            <img alt="starship" src="/images/starship-placeholder.png"></img>
            <div className="flex flex-col gap-5">
              <div className="mt-7">
                <Heading className="text-black" size="lg" title={data?.name} />
              </div>
              <div className="flex flex-col gap-2 font-medium capitalize">
                <span>Model: {data?.model}</span>
                <span>Passengers: {data?.passengers}</span>
                <span>Pilots: {data?.pilots}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

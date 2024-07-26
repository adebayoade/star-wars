import Heading from '@/components/ui/heading';
import { useGetPeopleDetailsQuery } from '@/store/slices/api/people';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import useErrorMessage from '@/hooks/useErrorMessage';

export default function SinglePerson() {
  const { data, isLoading, error } = useGetPeopleDetailsQuery();
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
            <MetaData title={`${data?.name} | People`} />
            <img alt="person" src="/images/old-woman-placeholder.png"></img>
            <div className="flex flex-col gap-5">
              <div className="mt-7">
                <Heading className="text-black" size="lg" title={data?.name} />
              </div>
              <div className="flex flex-col gap-2 font-medium capitalize">
                <span>Gender: {data?.gender}</span>
                <span>Year of birth: {data?.birth_year}</span>
                <span>Skin color: {data?.skin_color}</span>
                <span>Height: {data?.height}CM</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

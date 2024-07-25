import Heading from '@/components/ui/heading';
import { useGetPeopleDetailsQuery } from '@/store/slices/api/people';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import { useGetFilmDetailsQuery } from '@/store/slices/api/films';

export default function SingleFilm() {
  const { data, isLoading, error } = useGetFilmDetailsQuery();

  return (
    <>
      <div className="container h-screen max-w-full mt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={error?.data?.message || error?.error} />
        ) : (
          <div className="flex gap-10">
            <MetaData title={`${data.title} | Film`} />
            <img className="" alt="profile picture" src="/images/film-placeholder.png"></img>
            <div className="flex flex-col gap-5">
              <div className="mt-7">
                <Heading className="text-black" size="lg" title={data.title} />
              </div>

              <div className="flex flex-col gap-2 font-medium capitalize">
                <span className="">Director: {data.title}</span>
                <span className="">Producer: {data.producer}</span>
                <span className="">Release Date: {data.release_date}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

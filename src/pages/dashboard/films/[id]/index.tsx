import Heading from '@/components/ui/heading';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import { useGetFilmDetailsQuery } from '@/store/slices/api/films';
import useErrorMessage from '@/hooks/useErrorMessage';

export default function SingleFilm() {
  const { data, isLoading, error } = useGetFilmDetailsQuery();
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
            <MetaData title={`${data?.title} | Film`} />
            <img alt="film" src="/images/film-placeholder.png"></img>
            <div className="flex flex-col gap-5">
              <div className="mt-7">
                <Heading className="text-black" size="lg" title={data?.title} />
              </div>

              <div className="flex flex-col gap-2 font-medium capitalize">
                <span>Director: {data?.title}</span>
                <span>Producer: {data?.producer}</span>
                <span>Release Date: {data?.release_date}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

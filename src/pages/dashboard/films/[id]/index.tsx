import Heading from '@/components/ui/heading';
import Spinner from '@/components/ui/spinner';
import { Message } from '@/components/message';
import MetaData from '@/components/ui/meta-data';
import { useGetFilmDetailsQuery } from '@/store/slices/api/films';

export default function SingleFilm() {
  const { data, isLoading, error } = useGetFilmDetailsQuery();

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
      <div className="container h-screen max-w-full mt-12 flex flex-col gap-10">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Message variant="destructive" text={errMsg} />
        ) : (
          <div className="flex gap-10">
            <MetaData title={`${data?.title} | Film`} />
            <img className="" alt="profile picture" src="/images/film-placeholder.png"></img>
            <div className="flex flex-col gap-5">
              <div className="mt-7">
                <Heading className="text-black" size="lg" title={data?.title} />
              </div>

              <div className="flex flex-col gap-2 font-medium capitalize">
                <span className="">Director: {data?.title}</span>
                <span className="">Producer: {data?.producer}</span>
                <span className="">Release Date: {data?.release_date}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

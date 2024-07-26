import MetaData from '@/components/ui/meta-data';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <MetaData title={'404'} />
      <div className="py-32 container h-full">
        <div className="flex items-center flex-col gap-5">
          <FaExclamationTriangle className="text-yellow-500 text-6xl" />
          <h1 className="title text-center">The requested page can not be found!</h1>
          <span className="leading-text text-center">
            Click{' '}
            <Link className="text-primary hover:underline" to={'/'}>
              Here
            </Link>{' '}
            to go back to the home page
          </span>
        </div>
      </div>
    </>
  );
}

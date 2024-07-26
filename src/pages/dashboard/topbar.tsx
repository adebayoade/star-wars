import { Icon } from '@/components/icons';
import Hamburger from './hamburger';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function Topbar() {
  const { pathname } = useLocation();
  // console.log(pathname);
  const splitPath = pathname.split('/').filter(item => item !== '');
  // console.log(splitPath);

  return (
    <div className="shadow">
      <div className="container flex gap-10 items-center max-w-full">
        {splitPath.length > 2 && (
          <Link className="flex text-[#A4A7B7] hover:text-primary" to={splitPath[1]}>
            <ChevronLeft />
            Back
          </Link>
        )}
        <div className="py-3 w-full justify-end gap-5 xl:gap-20 flex items-center">
          <Link className="hover:text-primary" to="/dashboard/notification">
            <Icon.Notifications />
          </Link>

          <Link to="/dashboard/account" className="flex items-center gap-5 hover:text-primary">
            <Icon.Avatar />
            <span>John Doe</span>
          </Link>

          <Hamburger />
        </div>
      </div>
    </div>
  );
}

import { Icon } from '@/components/icons';
import Hamburger from './hamburger';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="shadow">
      <div className="container max-w-full py-3 justify-between xl:justify-end gap-20 flex items-center">
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
  );
}

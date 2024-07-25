import { Icon } from '@/components/icons';
import Logo from '@/components/ui/logo';
import { DashboardMenu } from '@/constants/dashboard-menu';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar hidden h-full xl:flex flex-col gap-10 pt-10 p-5 overflow-y-auto bg-secondary">
      <Link to={'/login'} className="mx-auto">
        <Logo />
      </Link>

      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link') + ' link'}
        to={'/dashboard'}
        end
      >
        <span>
          <Icon.Overview />
        </span>
        <span>Overview</span>
      </NavLink>

      <div className="flex flex-col gap-5 mt-5">
        {DashboardMenu.map(({ route, title, icon }) => (
          <NavLink
            key={title}
            to={route}
            className={({ isActive }) => (isActive ? 'active-link' : 'non-active-link') + ' link'}
          >
            <span>{icon}</span>
            <span>{title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

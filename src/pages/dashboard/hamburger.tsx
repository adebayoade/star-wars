import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/icons';
import { DashboardMenu } from '@/constants/dashboard-menu';
import { NavLink } from 'react-router-dom';

export default function Hamburger() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="w-full h-10 flex items-center hover:text-primary">
          <Icon.Drawer />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <NavLink
          to={'/dashboard'}
          className={({ isActive }) =>
            isActive ? 'text-primary pointer-events-none' : 'non-active-link'
          }
          end
        >
          <DropdownMenuItem>Overview</DropdownMenuItem>
        </NavLink>

        {DashboardMenu.map(({ route, title }) => (
          <NavLink
            key={title}
            to={route}
            className={({ isActive }) =>
              isActive ? 'text-primary pointer-events-none' : 'non-active-link'
            }
          >
            <DropdownMenuItem>{title}</DropdownMenuItem>
          </NavLink>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

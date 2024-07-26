import { Icon } from '@/components/icons';

export const DashboardMenu = [
  {
    icon: <Icon.Starships className="w-[17px]" />,
    title: 'Starships',
    route: '/dashboard/starships',
  },
  {
    icon: <Icon.People className="w-[17px]" />,
    title: 'People',
    route: '/dashboard/people',
  },
  {
    icon: <Icon.Species className="w-[17px]" />,
    title: 'Species',
    route: '/dashboard/species',
  },
];

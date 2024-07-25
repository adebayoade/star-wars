import { Icon } from '@/components/icons';
import Hamburger from './hamburger';

export default function Topbar() {
  return (
    <div className="shadow">
      <div className="container max-w-full py-3 justify-between xl:justify-end gap-20 flex items-center">
        <Icon.Notifications />
        <div className="flex items-center gap-5">
          <Icon.Avatar />
          <span>John Doe</span>
        </div>

        <Hamburger />
      </div>
    </div>
  );
}

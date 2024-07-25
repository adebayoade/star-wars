import Sidebar from '@/pages/dashboard/sidebar';
import Topbar from '@/pages/dashboard/topbar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="dashboard h-screen">
      <div className={`grid h-full grid-cols-1 xl:grid-cols-[380px_1fr]`}>
        <Sidebar />

        <div className="pb-10 h-full">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

import { Outlet } from 'react-router-dom';
import TopLoader from '@/components/ui/top-loader';

export default function MainLayout() {
  return (
    <>
      <TopLoader />
      <Outlet />
    </>
  );
}

import { Outlet } from 'react-router-dom';
import TopLoader from '@/components/ui/top-loader';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function MainLayout() {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <TopLoader />
      <Outlet />
    </>
  );
}

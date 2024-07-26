import TopBarProgress from 'react-topbar-progress-indicator';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

TopBarProgress.config({
  barColors: {
    0: '#0A74DC',
    '1.0': '#0A74DC',
  },
  barThickness: 3,
  shadowBlur: 1,
});

export default function TopLoader() {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc('');
    }
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);

  if (progress) return <TopBarProgress />;
}

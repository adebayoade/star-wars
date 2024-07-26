import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="auth grid grid-cols-[1fr_2fr]">
      <div className="h-screen hidden xl:block bg-secondary">
        <div className="flex h-full flex-col items-center justify-center">
          <img alt="star wars logo" src="/images/star-wars.png" />
        </div>
      </div>

      <section className="flex w-full h-full flex-col justify-center justify-items-center">
        <Outlet />
      </section>
    </div>
  );
}

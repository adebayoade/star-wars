import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="auth grid xl:grid-cols-[1fr_2fr]">
      <div className="h-screen hidden xl:block bg-secondary">
        <div className="flex h-full flex-col items-center justify-center">
          <img alt="star wars logo" src="/images/star-wars.png" />
        </div>
      </div>

      <section className="flex max-w-[600px] pt-14 xl:pt-0 px-4 w-full mx-auto h-full flex-col justify-center justify-items-center">
        <Outlet />
      </section>
    </div>
  );
}

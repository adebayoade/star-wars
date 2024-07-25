import MetaData from '@/components/ui/meta-data';
import LoginForm from './login-form';

export default function Login() {
  return (
    <>
      <MetaData title={'Log in'} />
      <div className="w-full max-w-[700px] mx-auto">
        <LoginForm />
      </div>
    </>
  );
}

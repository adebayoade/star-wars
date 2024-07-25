import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import Input from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-[600px] mx-auto px-5 lg:px-20 py-10 border rounded-xl flex flex-col gap-16"
    >
      <div className="flex flex-col gap-2">
        <Heading size="md" title="Login" />
        <span className="text-[#737373]">Kindly enter your details to log in</span>
      </div>

      <div className="flex flex-col gap-10">
        {/* <div className="relative block">
          <label className="label-top">Email Address</label>
          <input
            type="email"
            name="message"
            placeholder="Enter email address"
            className="form-input border py-3 px-4 h-[48px] bg-white placeholder-gray-400 w-full block focus:outline-primary"
          />
        </div> */}
        <Input type="email" placeholder="Enter your email" label="Email Address" />

        <Input type="password" placeholder="Enter your password" label="Password" />

        <Button type="submit" size={'lg'}>
          Log in
        </Button>

        <Link to={'forgot-password'} className="text-primary text-center">
          Forgot your password?
        </Link>

        <div className="mt-[40px] text-center">
          <span>
            {' '}
            <Link to={'privacy-policy'} className="underline hover:text-primary">
              Privacy Policy
            </Link>{' '}
            <span className="text-gray-400">and</span>{' '}
            <Link to={'terms-of-services'} className="underline hover:text-primary">
              Terms of services
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
}

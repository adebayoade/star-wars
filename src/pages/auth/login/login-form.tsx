import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
// import Input from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormFields = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const navigate = useNavigate();

  const submitHandler: SubmitHandler<FormFields> = data => {
    console.log(data);
    navigate('/dashboard');
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="px-5 lg:px-20 py-10 border rounded-xl flex flex-col gap-16"
    >
      <div className="flex flex-col gap-2">
        <Heading size="md" title="Login" />
        <span className="text-[#737373]">Kindly enter your details to log in</span>
      </div>

      <div className="flex flex-col gap-10">
        <div className="relative flex flex-col gap-2">
          <label className="label-top">Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                // Regex to validate email
                value: /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/i,
                message: 'Invalid email address',
              },
            })}
            type="email"
            placeholder="Enter your email"
            className="form-input border py-3 px-4 h-[48px] bg-white placeholder-gray-400 w-full block focus:outline-primary"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email?.message as string}</span>
          )}
        </div>

        <div className="relative flex flex-col gap-2">
          <label className="label-top">Password</label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must have at least 6 characters',
              },
              pattern: {
                // Regex to validate email
                value: /^(?=.*\d)(?=.*[a-z]).{6,15}$/,
                message: 'Password must be a combination of letters and numbers',
              },
            })}
            type="password"
            placeholder="Enter your password"
            className="form-input border py-3 px-4 h-[48px] bg-white placeholder-gray-400 w-full block focus:outline-primary"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password?.message as string}</span>
          )}
        </div>

        <Button disabled={isSubmitting} type="submit" size={'lg'}>
          {isSubmitting ? 'Loading' : 'Login'}
        </Button>

        <Link to={'/forgot-password'} className="text-primary text-center text-sm">
          Forgot your password?
        </Link>

        <div className="mt-[40px] text-center text-xs">
          <span>
            <Link to={'/privacy-policy'} className="underline hover:text-primary">
              Privacy Policy
            </Link>{' '}
            <span className="text-gray-400">and</span>{' '}
            <Link to={'/terms-of-services'} className="underline hover:text-primary">
              Terms of services
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
}

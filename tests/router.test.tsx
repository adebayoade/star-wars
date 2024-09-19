import { screen } from '@testing-library/react';
import { navigateTo } from './utils';

describe('Router', () => {
  it('should render the login page for /login', () => {
    navigateTo('/login');

    expect(
      screen.getByRole('heading', {
        name: /Login/,
      })
    ).toBeInTheDocument();
  });

  it('should render the dashboard page for /dashboard', () => {
    navigateTo('/dashboard');

    expect(screen.getByText(/overview/)).toBeInTheDocument();
  });
});

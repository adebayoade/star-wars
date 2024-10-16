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

  it.skip('should render the dashboard page for /dashboard', () => {
    navigateTo('/dashboard');

    expect(screen.getByText(/overview/)).toBeInTheDocument();
  });

  it.todo('should render the starship page for /dashboard/starship', () => {});

  it.todo('should render the single starship page for /dashboard/starship/:id', () => {});

  it.todo('should render the people page for /dashboard/people', () => {});

  it.todo('should render the single person page for /dashboard/people/:id', () => {});

  it.todo('should render the species page for /dashboard/species', () => {});

  it.todo('should render the single species page for /dashboard/species/:id', () => {});

  it.todo('should render the films page for /dashboard/films', () => {});

  it.todo('should render the single film page for /dashboard/films/:id', () => {});
});

import Overview from '@/pages/dashboard/overview';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Providers from '../providers';
import { server } from '../mocks/server';
import { http, delay, HttpResponse } from 'msw';

const renderComponent = async () => {
  render(<Overview />, {
    wrapper: Providers,
  });

  const getSpinner = async () => await screen.findByRole('img', { name: /spinner/ });

  return {
    getSpinner,
  };
};

describe('Overview', () => {
  it('should show the spinner while data is being fetched', async () => {
    server.use(
      http.get('https://swapi.dev/api/films', async () => {
        await delay();
        return HttpResponse.json([]);
      })
    );
    // render(<Overview />, {
    //   wrapper: Providers,
    // });
    // const getSpinner = async () => await screen.findByRole('img', { name: /spinner/ });
    const { getSpinner } = await renderComponent();
    expect(await getSpinner()).toBeInTheDocument();
  });

  it.skip('should hide the spinner after the data is fetched', async () => {
    const { getSpinner } = await renderComponent();

    await waitForElementToBeRemoved(async () => await getSpinner());
  });

  it.skip('should render a table of films', async () => {
    renderComponent();

    const films = await screen.findByRole('table');

    expect(films).toBeInTheDocument();
  });

  it.skip('should show no results when to films are found', async () => {
    server.use(http.get('https://swapi.dev/api/films', () => HttpResponse.json([])));

    renderComponent();

    const message = await screen.findByText(/No results/);
    expect(message).toBeInTheDocument();
  });

  it.skip('should show an error when data can not be fetched', async () => {
    server.use(http.get('https://swapi.dev/api/films', () => HttpResponse.error()));

    await renderComponent();

    const message = await screen.findByRole('alert');
    expect(message).toBeInTheDocument();
  });
});

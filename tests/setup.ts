import '@testing-library/jest-dom/vitest';
import { server } from './mocks/server';

window.scrollTo = vi.fn();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

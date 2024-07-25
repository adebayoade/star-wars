import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { store } from './index';

interface StoreProvider {
  children: ReactNode;
}

export default function StoreProvider({ children }: StoreProvider) {
  return <Provider store={store}>{children}</Provider>;
}

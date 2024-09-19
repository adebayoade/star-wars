import { PropsWithChildren } from 'react';
import ReduxProvider from '../src/store/store-provider';

export default function Providers({ children }: PropsWithChildren) {
  return <ReduxProvider>{children}</ReduxProvider>;
}

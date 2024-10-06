// app/store/provider.tsx
import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../../state-management/store/app-store';

interface Props {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider> ;
};

export default ReduxProvider;

import React from 'react';
import Admin from './admin';
import { AuthProvider } from './AuthProvider';
import QueryProvider from './QueryProvider';

export default function ContexProvider({ children }) {
  return (
    <QueryProvider>
      <AuthProvider>
        <Admin>{children}</Admin>
      </AuthProvider>
    </QueryProvider>
  );
}

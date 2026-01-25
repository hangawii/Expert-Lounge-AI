import React from 'react';
import { AppLayout } from './components/AppLayout';

// This file is deprecated but kept to satisfy build systems tracking 'App.tsx'.
// The actual entry point is 'Application.tsx'.

export default function App() {
  return (
    <AppLayout>
      <div className="flex items-center justify-center h-full text-slate-500">
        Deprecated Entry Point
      </div>
    </AppLayout>
  );
}

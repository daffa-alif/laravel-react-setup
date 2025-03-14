import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Add this line for debugging
console.log('Loading Inertia app...');

// In your app.js
createInertiaApp({
  resolve: (name) => {
    // Use require.context for more direct path resolution
    console.log('Looking for page:', name);
    return import(`../../../../frontend/src/Pages/home.jsx`);
  },
  setup({ el, App, props }) {
    createRoot(el).render(React.createElement(App, props));
  },
});
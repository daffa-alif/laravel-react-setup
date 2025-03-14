import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Add this line for debugging
console.log('Loading Inertia app...');

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('../../frontend/src/Pages/**/*.jsx');
    // Add debug logging
    console.log('Trying to load page:', name);
    console.log('Available pages:', Object.keys(pages));
    return resolvePageComponent(`../../frontend/src/Pages/${name}.jsx`, pages);
  },
  setup({ el, App, props }) {
    console.log('Setting up app with props:', props);
    createRoot(el).render(React.createElement(App, props));
  },
});
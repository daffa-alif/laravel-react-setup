import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { createInertiaApp } from '@inertiajs/react'; // Use the newer version
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
  resolve: (name) => resolvePageComponent(`../../frontend/src/Pages/${name}.jsx`, import.meta.glob('../../frontend/src/Pages/**/*.jsx')),
  setup({ el, App, props }) {
    createRoot(el).render(React.createElement(App, props));
  },
});
import './bootstrap';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
  resolve: (name) => resolvePageComponent(`../../frontend/src/Pages/${name}.jsx`, import.meta.glob('../../frontend/src/Pages/**/*.jsx')),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
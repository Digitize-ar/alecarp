export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/galeria_1aa12a9e.mjs').then(n => n.g);

export { page };

export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/galeria_b6b4d3e2.mjs').then(n => n.g);

export { page };

export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/image-endpoint_6058505d.mjs').then(n => n.i);

export { page };

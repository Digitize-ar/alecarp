import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_c74ec097.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_22587153.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_a5beb0ab.mjs');
const _page1  = () => import('./chunks/index_f940fb4f.mjs');
const _page2  = () => import('./chunks/servicios_8663e338.mjs');
const _page3  = () => import('./chunks/galeria_dbc82651.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/servicios.astro", _page2],["src/pages/galeria.astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

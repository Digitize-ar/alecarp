/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_22587153.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './galeria_ceca5df3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
/* empty css                           */import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
/* empty css                             */
function CardImg() {
  return /* @__PURE__ */ jsxs(Card, { className: "py-4", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pb-0 pt-2 px-4 flex-col items-start" }),
    /* @__PURE__ */ jsx(CardBody, { className: "overflow-visible py-2", children: /* @__PURE__ */ jsx("img", { src: "/img-home2.jpg", alt: "", className: "rounded-lg" }) })
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alecarp", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-j7pv25f6><section id="inicio" data-astro-cid-j7pv25f6><div class="left-container animate__animated animate__slideInLeft" data-astro-cid-j7pv25f6><h1 class="mt-8" data-astro-cid-j7pv25f6>Inspiración y excelencia en cada detalle, descubre los muebles a medida de <span class="text-gradient" data-astro-cid-j7pv25f6>Alecarp</span></h1></div><div class="righ-container animate__animated animate__slideInRight" data-astro-cid-j7pv25f6>${renderComponent($$result2, "CardImg", CardImg, { "data-astro-cid-j7pv25f6": true })}</div></section></main>` })}`;
}, "C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/alecarp/src/pages/index.astro", void 0);

const $$file = "C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/alecarp/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

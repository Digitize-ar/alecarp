/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_22587153.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './galeria_ceca5df3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faHammer, faPaintRoller, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Card, CardHeader, Divider, CardBody, CardFooter } from '@nextui-org/react';
/* empty css                               *//* empty css                             */
function CardDesign() {
  return /* @__PURE__ */ jsxs(Card, { className: "max-w-[450px] bg-gray-900", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex gap-3 bg-gray-950", children: [
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPen, width: 30, color: "#9bf6ff" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-medium text-white", children: "Diseño del mueble a medida del cliente" }) })
    ] }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsxs(CardBody, { children: [
      /* @__PURE__ */ jsx("li", { className: "text-white", children: "Trabajamos estrechamente con nuestros clientes y sus arquitectos para crear diseños personalizados que se ajusten a sus necesidades y preferencias." }),
      /* @__PURE__ */ jsx("li", { className: "text-white", children: "Seguimos los planos diseñados por los arquitectos del cliente" })
    ] }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx(CardFooter, {})
  ] });
}

function CardMake() {
  return /* @__PURE__ */ jsxs(Card, { className: "max-w-[450px] bg-gray-900", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex gap-3 bg-gray-950", children: [
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faHammer, width: 30, color: "#9bf6ff" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-medium text-white", children: "Fabricación en melamina o madera" }) })
    ] }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsxs(CardBody, { children: [
      /* @__PURE__ */ jsx("li", { className: "text-white", children: "Ofrecemos la fabricación de muebles utilizando melamina de alta calidad o madera, según las preferencias del cliente y las especificaciones del arquitecto." }),
      /* @__PURE__ */ jsx("li", { className: "text-white", children: "Nuestros personal se encarga de garantizar una construcción precisa y duradera." })
    ] }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx(CardFooter, {})
  ] });
}

function CardPaint() {
  return /* @__PURE__ */ jsxs(Card, { className: "max-w-[450px] bg-gray-900", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex gap-3 bg-gray-950", children: [
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPaintRoller, width: 30, color: "#9bf6ff" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-medium text-white", children: "Laqueados" }) })
    ] }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsxs(CardBody, { children: [
      /* @__PURE__ */ jsx("li", { className: "text-white", children: "Realizamos acabados de laqueado profesional para brindar a los muebles un aspecto elegante y duradero." }),
      /* @__PURE__ */ jsx("li", { className: "text-white", children: "Trabajamos en estrecha colaboración con los arquitectos y clientes para asegurarnos de que los acabados se alineen con la visión de diseño general." })
    ] }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx(CardFooter, {})
  ] });
}

function CardDelivery() {
  return /* @__PURE__ */ jsxs(Card, { className: "max-w-[450px] bg-gray-900", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex gap-3 bg-gray-950", children: [
      /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faTruck, width: 30, color: "#9bf6ff" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-medium text-white", children: "Entrega y colocación" }) })
    ] }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsxs(CardBody, { children: [
      /* @__PURE__ */ jsx("li", { className: "text-white", children: "Nos encargamos de la entrega segura de los muebles a medida directamente en el lugar especificado por el cliente." }),
      /* @__PURE__ */ jsx("li", { className: "text-white", children: "Nuestro equipo de instalación profesional se asegura de que los muebles se coloquen correctamente y se ajusten a los diseños y planos proporcionados por el arquitecto y el cliente." })
    ] }),
    /* @__PURE__ */ jsx(Divider, {})
  ] });
}

const $$Astro = createAstro();
const $$Servicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servicios;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alecarp", "data-astro-cid-wrzvmyuk": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-wrzvmyuk><section id="servicios" data-astro-cid-wrzvmyuk><h1 class="mt-8 animate__animated animate__bounceInLeft" data-astro-cid-wrzvmyuk><span class="text-gradient" data-astro-cid-wrzvmyuk>Servicios</span></h1><div class="cards-container animate__animated animate__rubberBand" data-astro-cid-wrzvmyuk><div class="card" data-astro-cid-wrzvmyuk>${renderComponent($$result2, "CardDesign", CardDesign, { "data-astro-cid-wrzvmyuk": true })}</div><div class="card" data-astro-cid-wrzvmyuk>${renderComponent($$result2, "CardMake", CardMake, { "data-astro-cid-wrzvmyuk": true })}</div></div><div class="cards-container cards-container animate__animated animate__rubberBand" data-astro-cid-wrzvmyuk><div class="card" data-astro-cid-wrzvmyuk>${renderComponent($$result2, "CardPaint", CardPaint, { "data-astro-cid-wrzvmyuk": true })}</div><div class="card" data-astro-cid-wrzvmyuk>${renderComponent($$result2, "CardDelivery", CardDelivery, { "data-astro-cid-wrzvmyuk": true })}</div></div></section></main>` })}`;
}, "C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/alecarp/src/pages/servicios.astro", void 0);

const $$file = "C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/alecarp/src/pages/servicios.astro";
const $$url = "/servicios";

export { $$Servicios as default, $$file as file, $$url as url };

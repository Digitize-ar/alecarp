/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, m as maybeRenderHead } from '../astro_22587153.mjs';
import 'html-escaper';
import 'clsx';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useDisclosure, Button, Modal, ModalContent, ModalHeader, ModalBody, Input, ModalFooter, Card, CardHeader, CardBody } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
/* empty css                             */
function App$1() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const isEmailValid = validateEmail(email);
  const handleSubmit = async () => {
    if (!email || !message || !name || !phone || !isEmailValid) {
      return;
    }
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);
    formData.append("name", name);
    formData.append("phone", phone);
    try {
      const response = await fetch(
        "https://getform.io/f/7b650b4d-d3ab-40a0-9c1a-725dc59485d6",
        {
          method: "POST",
          body: formData
        }
      );
      if (response.ok) {
        console.log("Formulario enviado con éxito");
        setEmail("");
        setMessage("");
        setName("");
        setPhone("");
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error en la solicitud HTTP:", error);
    } finally {
      setIsSubmitting(false);
      onOpenChange(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Button, { onClick: onOpen, color: "primary", children: "Contacto" }),
    /* @__PURE__ */ jsx(Modal, { isOpen, onOpenChange, children: /* @__PURE__ */ jsx(ModalContent, { children: (onClose) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ModalHeader, { className: "flex flex-col gap-1", children: "¡ Contactanos !" }),
      /* @__PURE__ */ jsxs(ModalBody, { children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            value: email,
            type: "email",
            label: "Email",
            variant: "bordered",
            isInvalid: !isEmailValid,
            color: isEmailValid ? "success" : "danger",
            errorMessage: !isEmailValid && "Please enter a valid email",
            onValueChange: setEmail,
            className: "max-w"
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: name,
            type: "text",
            label: "Nombre",
            placeholder: "Ingresa tu nombre",
            labelPlacement: "outside",
            onValueChange: setName
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: phone,
            type: "number",
            label: "Número de teléfono",
            placeholder: "Ingresa tu celular",
            labelPlacement: "outside",
            onValueChange: setPhone
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: message,
            type: "text",
            label: "Mensaje",
            placeholder: "¿Qué estás buscando?",
            labelPlacement: "outside",
            onValueChange: setMessage
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(ModalFooter, { children: [
        /* @__PURE__ */ jsx(Button, { color: "danger", variant: "light", onPress: onClose, children: "Cerrar" }),
        /* @__PURE__ */ jsx(Button, { color: "primary", onPress: handleSubmit, disabled: isSubmitting, children: isSubmitting ? "Enviando..." : "Enviar" })
      ] })
    ] }) }) })
  ] });
}

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body class="h-screen"><header class="bg-white"><nav class="flex justify-between items-center w-[92%]  mx-auto "><div class="flex"><img class="w-14 cursor-pointer" src=".././public/logo-snl.png" alt="..."><p class="font-bold text-inherit text-3xl m-4">Alecarp</p></div><div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 z-30 top-[-100%] md:w-auto  w-full flex items-center px-5 mt-0"><ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8"><li><a class="hover:text-gray-500" href="/">Inicio</a></li><li><a class="hover:text-gray-500" href="/servicios">Servicios</a></li><li><a class="hover:text-gray-500" href="/galeria">Galeria</a></li></ul></div><div class="flex items-center gap-6">${renderComponent($$result, "ModalContact", App$1, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/src/components/ContactModal", "client:component-export": "default" })}<button data-toggle-menu-button class="text-3xl cursor-pointer md:hidden">${renderComponent($$result, "FontAwesomeIcon", FontAwesomeIcon, { "icon": faBars, "width": 30, "color": "#293241" })}</button></div></nav></header>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/src/layouts/Layout.astro", void 0);

const cardData = [
  {
    title: "Tocador",
    description: "Realizado con melamina blanca",
    imageSrc: ".././public/2.jpg"
  },
  {
    title: "Mueble de cocina",
    description: "Fabricado con rauvissio brillant",
    imageSrc: ".././public/3.jpg"
  },
  {
    title: "Mueble para television",
    description: "Fabricado con rauvissio brillant",
    imageSrc: ".././public/4.jpg"
  },
  {
    title: "Escalera",
    description: "Revestimiento de escalones con madera",
    imageSrc: ".././public/5.jpg"
  }
  // Agrega los datos para las otras tres cards aquí
];
function App() {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-around items-center flex-col md:flex-row", children: cardData.map((data, index) => /* @__PURE__ */ jsxs(Card, { className: "py-4 w-max mb-5", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "pb-0 pt-2 px-4 flex-col items-start", children: [
      /* @__PURE__ */ jsx("p", { className: "text-tiny uppercase font-bold", children: data.title }),
      /* @__PURE__ */ jsx("small", { className: "text-default-500", children: data.description }),
      /* @__PURE__ */ jsx("h4", { className: "font-bold text-large", children: data.title })
    ] }),
    /* @__PURE__ */ jsx(CardBody, { className: "overflow-visible py-2 items-center", children: /* @__PURE__ */ jsx(
      "img",
      {
        alt: `Card ${index + 1}`,
        className: "object-cover rounded-xl",
        src: data.imageSrc,
        width: 260,
        height: 160
      }
    ) })
  ] }, index)) });
}

const $$Astro = createAstro();
const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Galeria;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alecarp", "data-astro-cid-tvv6smhg": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-tvv6smhg><section id="galeria" data-astro-cid-tvv6smhg><h1 class="mt-8 animate__animated animate__bounceInLeft" data-astro-cid-tvv6smhg><span class="text-gradient" data-astro-cid-tvv6smhg>Galeria</span></h1><div class="cards-container animate__animated animate__rubberBand" data-astro-cid-tvv6smhg>${renderComponent($$result2, "GaleryCards", App, { "data-astro-cid-tvv6smhg": true })}</div></section></main>` })}`;
}, "C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/src/pages/galeria.astro", void 0);

const $$file = "C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/src/pages/galeria.astro";
const $$url = "/galeria";

const galeria = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galeria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, galeria as g };

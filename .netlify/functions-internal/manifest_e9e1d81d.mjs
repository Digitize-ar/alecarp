import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_22587153.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\"[data-toggle-menu-button]\"),n=document.querySelector(\".nav-links\");e.addEventListener(\"click\",()=>{e.name=e.name===\"menu\"?\"close\":\"menu\",n.classList.toggle(\"top-[8%]\")});\n"}],"styles":[{"type":"external","src":"/_astro/galeria.1d12027a.css"},{"type":"inline","content":"body{width:100%;height:100%;overflow-y:auto;background-color:#edf6f9}main[data-astro-cid-j7pv25f6]{padding:1rem;width:100%;height:100%;color:#2b2d42;font-size:20px;line-height:1.6;background-color:#edf6f9}section[data-astro-cid-j7pv25f6]{width:100%;height:90vh;overflow-y:auto}#inicio[data-astro-cid-j7pv25f6]{display:flex;justify-content:space-around}.left-container[data-astro-cid-j7pv25f6],.righ-container[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;width:45%;height:100%;align-items:center;justify-content:center}.astro-a[data-astro-cid-j7pv25f6]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-j7pv25f6]{font-size:4rem;font-weight:700;line-height:1;text-align:left;margin-bottom:1em}.text-gradient[data-astro-cid-j7pv25f6]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.instructions[data-astro-cid-j7pv25f6]{margin-bottom:2rem;background:linear-gradient(rgba(var(--accent-dark),70%),rgba(var(--accent-dark),40%));padding:1.5rem;border-radius:8px;color:#f0f8ff;width:80%;margin-left:auto;margin-right:auto}.instructions[data-astro-cid-j7pv25f6] code[data-astro-cid-j7pv25f6]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-j7pv25f6] strong[data-astro-cid-j7pv25f6]{color:rgb(var(--accent-light))}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}@media screen and (max-width: 767px){main[data-astro-cid-j7pv25f6]{width:100%;height:100%}#inicio[data-astro-cid-j7pv25f6]{width:100%;flex-direction:column;justify-content:center}h1[data-astro-cid-j7pv25f6]{font-size:3rem;font-weight:700;line-height:1;text-align:center;margin-bottom:0}.left-container[data-astro-cid-j7pv25f6],.righ-container[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;width:90%;height:50%;align-items:center;justify-content:center;margin:0 auto}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\"[data-toggle-menu-button]\"),n=document.querySelector(\".nav-links\");e.addEventListener(\"click\",()=>{e.name=e.name===\"menu\"?\"close\":\"menu\",n.classList.toggle(\"top-[8%]\")});\n"}],"styles":[{"type":"external","src":"/_astro/galeria.1d12027a.css"},{"type":"inline","content":"main[data-astro-cid-wrzvmyuk]{padding:1rem;width:100%;color:#2b2d42;font-size:20px;line-height:1.6}section[data-astro-cid-wrzvmyuk]{width:100%}#servicios[data-astro-cid-wrzvmyuk]{display:flex;flex-direction:column;justify-content:center;align-items:center}.cards-container[data-astro-cid-wrzvmyuk]{width:80%;height:auto;display:flex;justify-content:space-around;margin-bottom:15px}.astro-a[data-astro-cid-wrzvmyuk]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-wrzvmyuk]{font-size:4rem;font-weight:700;line-height:1;text-align:left;margin-bottom:1em}.text-gradient[data-astro-cid-wrzvmyuk]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.instructions[data-astro-cid-wrzvmyuk]{margin-bottom:2rem;background:linear-gradient(rgba(var(--accent-dark),70%),rgba(var(--accent-dark),40%));padding:1.5rem;border-radius:8px;color:#f0f8ff;width:80%;margin-left:auto;margin-right:auto}.instructions[data-astro-cid-wrzvmyuk] code[data-astro-cid-wrzvmyuk]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-wrzvmyuk] strong[data-astro-cid-wrzvmyuk]{color:rgb(var(--accent-light))}.link-card-grid[data-astro-cid-wrzvmyuk]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}@media screen and (max-width: 767px){main[data-astro-cid-wrzvmyuk]{width:100%;background-color:#edf6f9;display:flex;flex-direction:column;justify-content:center;align-items:center}.cards-container[data-astro-cid-wrzvmyuk]{flex-direction:column;justify-content:center}section[data-astro-cid-wrzvmyuk]{width:100%}.card[data-astro-cid-wrzvmyuk]{margin-bottom:15px}}\n"}],"routeData":{"route":"/servicios","type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\"[data-toggle-menu-button]\"),n=document.querySelector(\".nav-links\");e.addEventListener(\"click\",()=>{e.name=e.name===\"menu\"?\"close\":\"menu\",n.classList.toggle(\"top-[8%]\")});\n"}],"styles":[{"type":"external","src":"/_astro/galeria.1d12027a.css"},{"type":"inline","content":"body{overflow-y:auto}main[data-astro-cid-tvv6smhg]{padding:1rem;width:100%;height:100%;color:#2b2d42;font-size:20px;line-height:1.6}section[data-astro-cid-tvv6smhg]{width:100%;height:100%}.astro-a[data-astro-cid-tvv6smhg]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-tvv6smhg]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em;margin-top:1em}.text-gradient[data-astro-cid-tvv6smhg]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}\n"}],"routeData":{"route":"/galeria","type":"page","pattern":"^\\/galeria\\/?$","segments":[[{"content":"galeria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galeria.astro","pathname":"/galeria","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/src/pages/galeria.astro",{"propagation":"none","containsHead":true}],["C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/src/pages/servicios.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_55e76582.mjs","/src/pages/servicios.astro":"chunks/pages/servicios_5cc8a04a.mjs","\u0000@astrojs-manifest":"manifest_e9e1d81d.mjs","C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_be9e4b70.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_7972ac79.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"chunks/servicios_541755d7.mjs","\u0000@astro-page:src/pages/galeria@_@astro":"chunks/galeria_25b0a2c5.mjs","C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_f263cbb0.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.96a404e9.js","@astrojs/react/client.js":"_astro/client.69c5e195.js","C:/Users/lauty/OneDrive/Documentos/GitHub/alecarp/alecarp-astro-web/src/components/ContactModal":"_astro/ContactModal.264ea9eb.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/galeria.4c80564e.css","/_astro/galeria.1d12027a.css","/_astro/index.e4f9e1cb.css","/_astro/servicios.c0289340.css","/1.jpg","/2.jpg","/3.jpg","/4.jpg","/5.jpg","/favicon.svg","/img-home2.jpg","/logo-snl.png","/_astro/client.69c5e195.js","/_astro/ContactModal.264ea9eb.js","/_astro/index.4d320501.js"]});

export { manifest };

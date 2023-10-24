import { resolveComponent, useSSRContext, mergeProps, withCtx, createVNode, unref, defineComponent, inject, openBlock, createBlock, Fragment, renderList, ref, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderTeleport } from "vue/server-renderer";
import { useRoute, createRouter, createWebHistory } from "vue-router";
import { useMq, Vue3Mq } from "vue3-mq";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import * as d3 from "d3";
import * as cloud from "d3-cloud";
import { ViteSSG } from "vite-ssg";
const style = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$12 = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$11 = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "icon",
    viewBox: "0 0 71 71",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6664.3,-613.796)"><g transform="matrix(0.4282,0,0,0.346067,4197.29,0)"><g transform="matrix(40.2896,0,0,49.6035,-281659,-30462.9)"><path d="M7135.02,653.937C7135.02,653.95 7135.02,653.954 7135,653.954L7133.91,653.962C7133.88,653.959 7133.85,653.922 7133.85,653.871L7133.85,651.884C7133.85,651.849 7133.84,651.834 7133.88,651.799L7135.55,650.028C7135.76,649.812 7136.04,649.862 7136.2,650.031L7137.86,651.806C7137.9,651.844 7137.9,651.895 7137.9,651.923L7137.91,653.901C7137.91,653.911 7137.92,653.967 7137.86,653.962L7136.72,653.962C7136.72,653.962 7136.72,653.961 7136.72,653.955L7136.72,653.946C7136.7,652.839 7136.64,652.075 7135.84,652.09C7135.01,652.106 7135.02,653.38 7135.02,653.937ZM7136.5,653.946C7136.5,653.957 7136.5,653.962 7136.48,653.962L7135.27,653.962C7135.26,653.961 7135.26,653.96 7135.26,653.951C7135.26,653.951 7135.26,653.939 7135.26,653.936C7135.28,653.271 7135.23,652.418 7135.86,652.403C7136.58,652.387 7136.48,653.272 7136.5,653.931C7136.5,653.936 7136.5,653.946 7136.5,653.946Z" style="${ssrRenderStyle({ "fill": "rgb(88,88,88)" })}"></path></g></g></g></svg>`);
}
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/home.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const HomeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$10 = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "icon",
    height: "100%",
    viewBox: "0 0 53 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6797.49,-613.796)"><g transform="matrix(0.4282,0,0,0.346067,4197.29,0)"><g transform="matrix(41.2296,0,0,50.4532,-288670,-31017.5)"><path d="M7148.93,653.941L7151.63,653.937C7151.78,653.926 7151.78,653.875 7151.78,653.759C7151.73,653.082 7151.2,652.287 7150.3,652.302C7149.45,652.317 7148.76,653.149 7148.8,653.805C7148.81,653.901 7148.82,653.932 7148.93,653.941ZM7150.3,649.932C7150.86,649.932 7151.31,650.384 7151.31,650.941C7151.31,651.498 7150.86,651.95 7150.3,651.95C7149.75,651.95 7149.3,651.498 7149.3,650.941C7149.3,650.384 7149.75,649.932 7150.3,649.932Z" style="${ssrRenderStyle({ "fill": "rgb(88,88,88)" })}"></path></g></g></g></svg>`);
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/user.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const UserIcon = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$$ = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "icon",
    viewBox: "0 0 68 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6946.69,-528.59)"><g transform="matrix(0.4282,0,0,0.346067,4197.29,0)"><g transform="matrix(2.32683,0,0,2.87906,-10724.7,-55.2073)"><path d="M7423.25,589.909L7432.12,599.922C7437.79,605.821 7438.34,604.175 7430.93,606.667L7425.01,608.507L7423.39,615.299C7422.18,620.402 7423.32,622.128 7418.8,616.293L7406.23,600.026C7412.38,598.684 7417.67,597.26 7423.25,589.909ZM7381.74,589.909L7372.96,599.922C7367.29,605.821 7366.74,604.175 7374.15,606.667L7380.07,608.507L7381.69,615.299C7382.9,620.402 7381.76,622.128 7386.27,616.293L7398.97,599.925C7392.68,599.03 7387.66,597.022 7381.74,589.909ZM7402.63,549.703C7416.41,549.703 7427.59,560.791 7427.59,574.447C7427.59,588.103 7416.41,599.19 7402.63,599.19C7388.86,599.19 7377.67,588.103 7377.67,574.447C7377.67,560.791 7388.86,549.703 7402.63,549.703ZM7402.3,561.577C7402.37,561.405 7402.53,561.293 7402.7,561.293C7402.88,561.293 7403.03,561.405 7403.1,561.577L7406.31,569.732L7414.61,570.456C7414.78,570.471 7414.93,570.596 7414.98,570.774C7415.04,570.951 7414.99,571.145 7414.85,571.266L7408.55,577.03L7410.46,585.633C7410.5,585.814 7410.43,586.004 7410.29,586.113C7410.15,586.223 7409.96,586.231 7409.81,586.134L7402.7,581.541L7395.59,586.134C7395.44,586.231 7395.25,586.223 7395.11,586.113C7394.97,586.004 7394.9,585.814 7394.94,585.633L7396.86,577.03L7390.55,571.266C7390.42,571.145 7390.36,570.951 7390.42,570.774C7390.47,570.596 7390.62,570.471 7390.8,570.456L7399.09,569.732L7402.3,561.577Z" style="${ssrRenderStyle({ "fill": "rgb(88,88,88)" })}"></path></g></g></g></svg>`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badge-check.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const BadgesIcon = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$_ = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "icon",
    width: "100%",
    height: "100%",
    viewBox: "0 0 54 68",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-7114.98,-615.048)"><g transform="matrix(0.4282,0,0,0.346067,4197.29,0)"><g transform="matrix(2.33536,0,0,2.88961,-9802.17,0)"><path d="M7119.91,655.405C7119.91,655.405 7119.31,682.413 7127,682.467C7135.61,682.527 7147.45,682.602 7155.84,682.467C7163.53,682.342 7162.94,655.239 7162.94,655.239C7149.38,656.449 7135.03,656.5 7119.91,655.405ZM7115.92,647.963C7114.94,648.199 7114.31,653.417 7116.19,653.626C7124.64,654.57 7158.26,654.56 7166.66,653.626C7168.51,653.42 7168.96,648.362 7166.58,648.022C7166.31,647.984 7165.72,647.912 7165.72,647.912L7117.46,647.867C7117.46,647.867 7116.47,647.832 7115.92,647.963ZM7135.13,646.232L7124.06,646.221C7124.6,644.522 7125.82,643.502 7127.23,642.567C7129.63,641.075 7131.06,641.789 7132.57,642.325C7133.46,641.109 7134.74,640.803 7136.17,640.824C7138.04,640.863 7139.21,641.439 7140.22,642.14C7141.3,640.68 7142.6,640.652 7143.95,640.958C7146.15,641.418 7147.34,642.195 7148.11,643.105C7148.59,642.044 7149.47,641.712 7150.57,641.763C7151.6,641.8 7152.25,642.149 7152.66,642.712C7152.73,642.036 7153.29,641.656 7154.2,641.489C7156.17,641.543 7156.66,642.804 7157.3,643.934C7157.75,643.127 7158.41,642.856 7159.21,642.95C7160.9,643.726 7161.21,644.876 7161.82,646.257L7135.42,646.232L7135.16,646.257L7135.13,646.232ZM7142.01,639.703C7141.93,630.846 7145.52,625.677 7152.05,621.553C7155.85,627.162 7155.42,635.255 7151.81,640.891C7151.5,640.773 7151.09,640.614 7150.66,640.599C7149.55,640.548 7148.52,640.783 7148.05,641.844C7147.71,641.444 7147.29,641.069 7146.73,640.735C7147.57,639.086 7148.12,637.851 7148.57,635.87L7146.02,640.52C7145.44,640.256 7144.75,640.007 7143.9,639.829C7143.08,639.642 7142.75,639.392 7142.01,639.703ZM7130,640.634C7126.55,635.467 7126.53,629.984 7127.99,623.768C7134.21,625.157 7139.8,631.349 7141.35,639.843C7140.83,640.033 7140.49,640.202 7140.04,640.813C7139.03,640.112 7135.9,639.78 7135.88,639.78L7133.9,637.551C7134.27,638.486 7134.39,638.923 7134.84,639.746C7133.78,639.864 7132.97,640.183 7132.28,641.132C7131.54,640.869 7130.83,640.702 7130,640.634ZM7141.35,637.205C7140.53,633.159 7138.97,630.479 7136.64,627.698C7136.82,622.133 7139.14,619.123 7143.06,615.048C7145.72,617.454 7146.75,619.944 7147.37,623.642C7144.37,626.424 7142.71,628.166 7141.8,632.439L7142.76,626.527C7142.14,628.113 7141.9,630.221 7141.8,632.439C7141.73,633.75 7141.62,634.717 7141.59,636.022C7141.54,636.625 7141.36,636.571 7141.35,637.205Z" style="${ssrRenderStyle({ "fill": "rgb(88,88,88)" })}"></path></g></g></g></svg>`);
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/greenhouse.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const GreenhouseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$h]]);
const Menu_vue_vue_type_style_index_0_scoped_571ad173_lang = "";
const _sfc_main$Z = {
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const mq = useMq();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "sdgLine" }, _attrs))} data-v-571ad173>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/home/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HomeIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HomeIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(mq).mobile === true) {
        _push(ssrRenderComponent(_component_router_link, { to: "/profil/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(UserIcon, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(UserIcon)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(mq).mobile === true) {
        _push(ssrRenderComponent(_component_router_link, { to: "/badges/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(BadgesIcon, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(BadgesIcon)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(mq).mobile === false) {
        _push(ssrRenderComponent(_component_router_link, { to: "/greenhouse/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(GreenhouseIcon, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(GreenhouseIcon)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Menu.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-571ad173"]]);
const _sfc_main$Y = {
  __name: "Default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(ssrRenderComponent(Menu, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/Default.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const sdgData = [
  {
    "SDG": "1",
    "title": "Povertà zero",
    "subtitle": "Porre fine a ogni forma di povertà nel mondo",
    "description": [
      { "number": "736", "unit": "milioni", "text": "persone che vivono in estrema povertà" },
      { "number": "1.90$", "unit": "", "text": "al giorno è la definizione di povertà estrema" },
      { "number": "50%", "unit": "", "text": "delle persone in povertà estrema hanno meno di 18 anni" }
    ],
    "desc_kiosk": "L’Obiettivo 1 adotta un approccio globale alla povertà nel suo complesso includendo un obiettivo sulla povertà relativa basato su definizioni nazionali. I poveri sono particolarmente vulnerabili alle crisi economiche e politiche, alla perdita di biodiversità e di servizi ecosistemici, ai disastri naturali e alla violenza. Per garantire che le persone sfuggite alla povertà non vi ricadano, questo obiettivo prevede anche misure volte a rafforzare la resilienza dei mezzi di sostentamento, compresa l’istituzione di sistemi di sicurezza sociale.",
    "course_units": "291",
    "publications_Unibo": "554",
    "project": "1",
    "key_number": "",
    "keyNum_label": "",
    "keyNum_popUp": "false",
    "img_author": "@jcomp"
  },
  {
    "SDG": "2",
    "title": "Fame zero",
    "subtitle": "Porre fine alla fame, raggiungere la sicurezza alimentare, migliorare la nutrizione e promuovere un’agricoltura sostenibile",
    "description": [
      { "number": "821", "unit": "milioni", "text": "stimati essere cronicamente sottonutriti nel 2017" },
      { "number": "90", "unit": "milioni", "text": "di bambini sotto i cinque anni sono pericolosamente sottopeso" },
      { "number": "1.3", "unit": "bilioni", "text": "di tonnellate di cibo vengono sprecate ogni anno" }
    ],
    "desc_kiosk": "L’Obiettivo 2 prevede di porre fine a tutte le forme di malnutrizione. La qualità del cibo è importante tanto quanto la quantità del cibo. L’Obiettivo 2 incorpora anche aspetti economici, come il raddoppio della produttività agricola e del reddito dei piccoli agricoltori entro il 2030. Inoltre, prevede disposizioni sull’agricoltura sostenibile per evitare che l’aumento della produzione alimentare danneggi l’ambiente.",
    "course_units": "220",
    "publications_Unibo": "577",
    "project": "2",
    "key_number": "",
    "keyNum_label": "",
    "keyNum_popUp": "false",
    "img_author": "@jcomp"
  },
  {
    "SDG": "3",
    "title": "Salute e benessere",
    "subtitle": "Assicurare la salute e il benessere per tutti e per tutte le età",
    "description": [
      { "number": "400", "unit": "milioni", "text": "di persone non hanno assistenza sanitaria di base" },
      { "number": "40%", "unit": "", "text": "delle persone non hanno protezione sociale" },
      { "number": "31", "unit": "anni", "text": "di divario tra l’aspettativa di vita più breve e quella più lunga" }
    ],
    "desc_kiosk": "L'Obiettivo 3 mira a raggiungere una copertura sanitaria universale e un accesso equo ai servizi sanitari per tutti gli uomini e le donne. Propone di porre fine alla morte prevenibile di neonati, lattanti e bambini sotto i cinque anni (mortalità infantile) e di porre fine alle epidemie.",
    "course_units": "1,573",
    "publications_Unibo": "8,402",
    "project": "3",
    "key_number": "349",
    "keyNum_label": "Convenzionati con USL e aziende ospedaliere",
    "keyNum_popUp": "false",
    "img_author": "Freepik"
  },
  {
    "SDG": "4",
    "title": "Istruzione di qualità",
    "subtitle": "Fornire un’istruzione di qualità inclusiva ed equa e promuovere opportunità di apprendimento permanente per tutti",
    "description": [
      { "number": "57", "unit": "milioni", "text": "di bambini in età primaria rimangono esclusi dalla scuola" },
      { "number": "91%", "unit": "", "text": "di iscrizioni alla scuola primaria nei paesi in via di sviluppo" },
      { "number": "1 su 4", "unit": "ragazze", "text": "non va a scuola nei paesi in via di sviluppo" }
    ],
    "desc_kiosk": "L’Obiettivo 4 mira a garantire che tutti i bambini, gli adolescenti e gli adulti – soprattutto quelli più emarginati e vulnerabili – abbiano accesso a un’istruzione e una formazione adeguate alle loro esigenze e al contesto in cui vivono. Ciò rende l’istruzione un fattore che contribuisce a rendere il mondo più sicuro, sostenibile e interdipendente.",
    "course_units": "2,419",
    "publications_Unibo": "118",
    "project": "3",
    "key_number": "25",
    "keyNum_label": "Librerie",
    "keyNum_popUp": "false",
    "img_author": "@jcomp"
  },
  {
    "SDG": "5",
    "title": "Uguaglianza di genere",
    "subtitle": "Raggiungere l’uguaglianza di genere ed emancipare tutte le donne e le ragazze",
    "description": [
      { "number": "77", "unit": "centesimi", "text": "guadagnano le donne per ogni dollaro che gli uomini guadagnano per lo stesso lavoro" },
      { "number": "750", "unit": "milioni", "text": "di ragazze si sono sposate prima dei 18 anni" },
      { "number": "24%", "unit": "", "text": "dei parlamentari nazionali erano donne nel 2018" }
    ],
    "desc_kiosk": "L’Obiettivo 5 sostiene le pari opportunità per uomini e donne nella vita economica, l’eliminazione di tutte le forme di violenza contro le donne e le ragazze, l’eliminazione dei matrimoni precoci e forzati e la parità di partecipazione a tutti i livelli.",
    "course_units": "927",
    "publications_Unibo": "248",
    "project": "3",
    "key_number": "",
    "keyNum_label": "",
    "keyNum_popUp": "false",
    "img_author": "Freepik"
  },
  {
    "SDG": "6",
    "title": "Acqua pulita e igiene",
    "subtitle": "Garantire a tutti la disponibilità e la gestione sostenibile dell’acqua e delle strutture igienico-sanitarie",
    "description": [
      { "number": "70%", "unit": "", "text": "delle zone umide naturali è scomparsa" },
      { "number": "39%", "unit": "", "text": "della popolazione disponeva di servizi igienico-sanitari sicuri nel 2015" },
      { "number": "844", "unit": "milioni", "text": "di persone non hanno acqua potabile" }
    ],
    "desc_kiosk": "L’Obiettivo 6 mira a migliorare la qualità dell’acqua e a ridurre l’inquinamento idrico, in particolare quello causato da sostanze chimiche pericolose. Sostiene inoltre la cooperazione transfrontaliera come chiave per gestire le risorse idriche in modo integrato a tutti i livelli.",
    "course_units": "201",
    "publications_Unibo": "730",
    "project": "1",
    "key_number": "-0,79",
    "keyNum_label": "consumo di acqua dal 2015",
    "keyNum_popUp": "true",
    "img_author": "Freepik"
  },
  {
    "SDG": "7",
    "title": "Energia pulita e accessibile",
    "subtitle": "Assicurare a tutti l’accesso a sistemi di energia economici, affidabili, sostenibili e moderni",
    "description": [
      { "number": "28.2%", "unit": "", "text": "di energia proverrà da fonti rinnovabili a partire dal 2020" },
      { "number": "9%", "unit": "", "text": "delle persone non ha elettricità" },
      { "number": "29%", "unit": "", "text": "delle persone si affida ancora a sistemi di cottura inefficienti e inquinanti" }
    ],
    "desc_kiosk": "L’Obiettivo 7 mira ad un aumento sostanziale della quota di energie rinnovabili nel mix energetico globale e ad un raddoppio del tasso globale di miglioramento dell’efficienza energetica. Un altro obiettivo è promuovere la ricerca sulle energie rinnovabili e sull’efficienza energetica, nonché gli investimenti nelle infrastrutture energetiche e nelle tecnologie energetiche pulite.",
    "course_units": "385",
    "publications_Unibo": "823",
    "project": "2",
    "key_number": "1,258",
    "keyNum_label": "MWH/anno di energia solare prodotta",
    "keyNum_popUp": "false",
    "img_author": "Freepik"
  },
  {
    "SDG": "8",
    "title": "Lavoro dignitoso e crescita economica",
    "subtitle": "Promuovere una crescita economica duratura, inclusiva e sostenibile, la piena e produttiva occupazione e un lavoro dignitoso per tutti",
    "description": [
      { "number": "61%", "unit": "", "text": "di forza lavoro mondiale era costituita da occupazione informale nel 2018" },
      { "number": "1 su 4", "unit": "", "text": "giovani non erano in un percorso di istruzione, lavoro o formazione nel 2022" },
      { "number": "700", "unit": "milioni", "text": "Di lavoratori vivevano con meno di 3,20 dollari al giorno nel 2018" }
    ],
    "desc_kiosk": "L’Obiettivo 8 sostiene il miglioramento dell’efficienza delle risorse globali nel consumo e nella produzione e il disaccoppiamento della crescita economica dal degrado ambientale.",
    "course_units": "630",
    "publications_Unibo": "560",
    "project": "3",
    "key_number": "59",
    "keyNum_label": "Spin off e Start-up",
    "keyNum_popUp": "false",
    "img_author": "Freepik"
  },
  {
    "SDG": "9",
    "title": "Industria, innovazione e infrastrutture",
    "subtitle": "Infrastrutture resistenti, industrializzazione sostenibile e innovazione",
    "description": [
      { "number": "33%", "unit": "", "text": "delle persone non avevano accesso a Internet nel 2022" },
      { "number": "95%", "unit": "", "text": "del mondo ha accesso alla banda larga mobile (3G o +) nel 2022" },
      { "number": "36.7", "unit": "bilioni", "text": "di emissioni di CO2 provengono dalla combustione di energia e dai processi industriali" }
    ],
    "desc_kiosk": "L’Obiettivo 9 mira a sostenere lo sviluppo tecnologico, la ricerca e l’innovazione soprattutto nei paesi in via di sviluppo, fornire alle imprese industriali e di altro tipo su piccola scala un maggiore accesso ai servizi finanziari, compreso il credito a prezzi accessibili, e aumentare l’integrazione di queste aziende nelle catene del valore e nei mercati. Sostiene inoltre la fornitura di un accesso universale e conveniente a Internet nei paesi meno sviluppati del mondo.",
    "course_units": "894",
    "publications_Unibo": "1,95",
    "project": "5",
    "key_number": "32",
    "keyNum_label": "dipartimenti di ricerca",
    "keyNum_popUp": "false",
    "img_author": "Freepik"
  },
  {
    "SDG": "10",
    "title": "Ridurre le disuguaglianze",
    "subtitle": "Ridurre le disuguaglianze",
    "description": [
      { "number": "1 su 233", "unit": "", "text": "persone sono fuggite dal loro paese a causa di guerre, conflitti, ecc. nel 2022" },
      { "number": "6 876", "unit": "persone", "text": "sono morte lungo le rotte migratorie nel 2022" },
      { "number": "1 su 6", "unit": "persone", "text": "subiscono discriminazioni fondate su qualsiasi motivo" }
    ],
    "desc_kiosk": "L’Obiettivo 10 mira a garantire pari opportunità attraverso l’eliminazione di leggi, politiche e pratiche discriminatorie, facilitando al contempo la migrazione e la mobilità umana ordinata e sicura attraverso l’attuazione di solide politiche migratorie. Prevede inoltre una maggiore rappresentanza e una maggiore voce in capitolo per i paesi in via di sviluppo nel processo decisionale all’interno delle istituzioni economiche e finanziarie internazionali.",
    "course_units": "958",
    "publications_Unibo": "1,452",
    "project": "2",
    "key_number": "",
    "keyNum_label": "",
    "keyNum_popUp": "false",
    "img_author": "Freepik"
  },
  {
    "SDG": "11",
    "title": "Città e comunità sostenibili",
    "subtitle": "Rendere le città e gli insediamenti umani inclusivi, sicuri, duraturi e sostenibili",
    "description": [
      { "number": "3%", "unit": "", "text": "del mondo è occupato da città" },
      { "number": "60% - 80%", "unit": "", "text": "del consumo energetico viene utilizzato dalle città" },
      { "number": "70%", "unit": "", "text": "delle emissioni di carbonio è creato dalle città" }
    ],
    "desc_kiosk": "L’obiettivo 11 mira a ridurre l’impatto ambientale pro capite negativo delle città, in particolare in termini di qualità dell’aria e gestione dei rifiuti. Richiede forme di urbanizzazione più inclusive e sostenibili, basate in particolare su un approccio partecipativo, integrato e sostenibile alla pianificazione urbana. Inoltre, mira a garantire l’accesso universale a spazi verdi e pubblici sicuri e inclusivi, in particolare per donne e bambini, anziani e persone con disabilità, e fornire accesso a sistemi abitativi e di trasporto sicuri e convenienti.",
    "course_units": "740",
    "publications_Unibo": "969",
    "project": "4",
    "key_number": "229,925",
    "keyNum_label": "M² di smart bulding",
    "keyNum_popUp": "true",
    "img_author": "Freepik"
  },
  {
    "SDG": "12",
    "title": "Consumo e produzione responsabili",
    "subtitle": "Garantire modelli sostenibili di produzione e di consumo",
    "description": [
      { "number": "120", "unit": "kili", "text": "di spreco alimentare all’anno e per persona" },
      { "number": "70%", "unit": "", "text": "delle aziende monitorate pubblica il proprio reporting di sostenibilità" }
    ],
    "desc_kiosk": "L’Obiettivo 12 mira a dimezzare gli sprechi alimentari, incoraggiare le aziende ad adottare pratiche sostenibili e promuovere pratiche sostenibili negli appalti pubblici.",
    "course_units": "738",
    "publications_Unibo": "2,681",
    "project": "3",
    "key_number": ">75%",
    "keyNum_label": "rifiuti riciclati",
    "keyNum_popUp": "false",
    "img_author": "Freepik"
  },
  {
    "SDG": "13",
    "title": "Agire per il clima",
    "subtitle": "Promuovere azioni, a tutti i livelli, per combattere i cambiamenti climatici",
    "description": [],
    "desc_kiosk": "L’Obiettivo 13 sostiene il rafforzamento della resilienza ai disastri naturali legati al clima e riafferma l’impegno assunto dai paesi sviluppati a mobilitare ogni anno 100 miliardi di dollari congiuntamente da tutte le fonti entro il 2020 per aiutare i paesi in via di sviluppo ad adattarsi ai cambiamenti climatici.",
    "course_units": "617",
    "publications_Unibo": "390",
    "project": "2",
    "key_number": "516",
    "keyNum_label": "impronta di carbonio",
    "keyNum_popUp": "false",
    "img_author": "Freepik"
  },
  {
    "SDG": "14",
    "title": "La vita sott'acqua",
    "subtitle": "Conservare e utilizzare in modo durevole gli oceani, i mari e le risorse marine per uno sviluppo sostenibile",
    "description": [
      { "number": "75%", "unit": "", "text": "del mondo è coperto dagli oceani" },
      { "number": "30%", "unit": "", "text": "dell’anidride carbonica prodotta dall’uomo è stata assorbita dall’oceano" },
      { "number": "200k", "unit": "", "text": "le specie identificate che vivono negli oceani" }
    ],
    "desc_kiosk": "L’Obiettivo 14 sostiene la riduzione significativa di tutti i tipi di inquinamento marino e la minimizzazione dell’acidificazione degli oceani entro il 2025, nonché la gestione e la protezione sostenibile degli ecosistemi marini e costieri già nel 2020. Mira inoltre, entro il 2020, a regolamentare la raccolta in modo efficace e a fermare la pesca eccessiva ponendo fine alla pesca illegale e non regolamentata e alle pratiche di pesca distruttive. Inoltre, l’Obiettivo 14 mira a vietare tipi specifici di sussidi alla pesca.",
    "course_units": "155",
    "publications_Unibo": "24",
    "project": "3",
    "key_number": "",
    "keyNum_label": "",
    "keyNum_popUp": "false",
    "img_author": "Freepik"
  },
  {
    "SDG": "15",
    "title": "La vita sulla terra",
    "subtitle": "Proteggere, ripristinare e favorire un uso sostenibile dell’ecosistema terrestre",
    "description": [
      { "number": "80%", "unit": "", "text": "di tutte le specie terrestri di animali, piante e insetti vivono nelle foreste" },
      { "number": "60% - 80%", "unit": "", "text": "dell’acqua dolce della terra è fornita dalle montagne" },
      { "number": "100M", "unit": "ettari", "text": "di terra sana e produttiva viene degradata ogni anno" }
    ],
    "desc_kiosk": "L’Obiettivo 15 prevede la conservazione, il ripristino e l’uso sostenibile degli ecosistemi, con l’obiettivo di arrestare la deforestazione, ripristinare le foreste degradate e aumentare sostanzialmente la riforestazione entro il 2020. Sostiene inoltre la lotta alla desertificazione entro il 2030 e il ripristino dei terreni colpiti dalla desertificazione, dalla siccità e dalle inondazioni. Per proteggere la biodiversità, l’Obiettivo 15 richiede misure urgenti per porre fine al bracconaggio e al traffico di specie animali e vegetali protette.",
    "course_units": "440",
    "publications_Unibo": "121",
    "project": "2",
    "key_number": "5,197,321",
    "keyNum_label": "M² di aree verdi",
    "keyNum_popUp": "false",
    "img_author": "Freepik"
  },
  {
    "SDG": "16",
    "title": "Pace, giustizia e istituzioni forti",
    "subtitle": "Promuovere società pacifiche e inclusive per lo sviluppo sostenibile, garantire l’accesso alla giustizia per tutti e costruire istituzioni efficaci, responsabili e inclusive a tutti i livelli",
    "description": [
      { "number": "1", "unit": "bilione", "text": "di persone sono legalmente “invisibili” perché non possono dimostrare chi sono" },
      { "number": "49", "unit": "paesi", "text": "non hanno leggi che proteggano le donne dalla violenza domestica" },
      { "number": "68.5", "unit": "milioni", "text": "di persone sono state sfollate con la forza a causa di persecuzioni o violazioni dei diritti umani" }
    ],
    "desc_kiosk": "L’Obiettivo 16 prevede una riduzione significativa della corruzione e delle concussioni, nonché dei flussi finanziari e di armi illeciti. Per garantire che le società siano pacifiche e inclusive, l’Obiettivo 16 mira anche a promuovere istituzioni inclusive e lo Stato di diritto e a garantire parità di accesso alla giustizia.",
    "course_units": "447",
    "publications_Unibo": "429",
    "project": "2",
    "key_number": "",
    "keyNum_label": "",
    "keyNum_popUp": "false",
    "img_author": "@jcomp"
  },
  {
    "SDG": "17",
    "title": "Partnerships per gli obiettivi",
    "subtitle": "Rafforzare i mezzi di attuazione degli obiettivi e rinnovare il partenariato mondiale per lo sviluppo sostenibile",
    "description": [
      { "number": "18,2", "unit": "trilioni di $", "text": "investiti in sostenibilità e responsabilità a partire dal 2016" },
      { "number": "206", "unit": "milioni di $", "text": "investiti nell'aiuto pubblico allo sviluppo 2022" },
      { "number": "156", "unit": "paesi e territori", "text": "stavano attuando un piano statistico nazionale nel 2022" }
    ],
    "desc_kiosk": "L’Obiettivo 17 mira a una maggiore mobilitazione delle risorse nazionali per ridurre la dipendenza dal sostegno estero, nonché a una maggiore collaborazione internazionale nel campo della scienza, della tecnologia e dell’innovazione e alla promozione di un equo sistema commerciale multilaterale. L’Obiettivo 17 sostiene inoltre il rafforzamento della stabilità macroeconomica e della coerenza politica nell’interesse dello sviluppo sostenibile.",
    "course_units": "380",
    "publications_Unibo": "1,559",
    "project": "6",
    "key_number": "3,407",
    "keyNum_label": "studenti internazionali",
    "keyNum_popUp": "false",
    "img_author": "@jcomp"
  }
];
const sdgAdvices = [
  {
    "SDG": "1",
    "Advices": ["Dona abiti che non usi più", "Acquista prodotti equi", "Fai una donazione ad un'associazione"]
  },
  {
    "SDG": "2",
    "Advices": ["Riduci gli sprechi alimentari", "Dona cibo non deperibile a un'associazione", "Acquista cibi locali", "Acquista prodotti a breve scadenza"]
  },
  {
    "SDG": "3",
    "Advices": ["Pratica sport regolarmente", "Mangia sano", "Bevi acqua", "Smetti di fumare"]
  },
  {
    "SDG": "4",
    "Advices": ["Visita musei", "Dona libri", "Condividi le tue competenze", "Dona materiali accademici"]
  },
  {
    "SDG": "5",
    "Advices": [""]
  },
  {
    "SDG": "6",
    "Advices": ["Usa una bottiglia d'acqua riutilizzabile", "Lava la tua auto presso un autolavaggio", "Usa prodotti per la casa biodegradabili", "Chiudi il rubinetto mentre ti lavi i denti", "Fai docce brevi (5-10 minuti)"]
  },
  {
    "SDG": "7",
    "Advices": ["Spegni la luce quando non è necessaria", "Usa energie verdi", "Scollega i tuoi dispositivi elettronici"]
  },
  {
    "SDG": "8",
    "Advices": []
  },
  {
    "SDG": "9",
    "Advices": ["Partecipa ai progetti di sviluppo sostenibile"]
  },
  {
    "SDG": "10",
    "Advices": ["Parla contro il cyberbullismo", "Viaggi alla scoperta di altre culture", "Aiuta le persone vittime di discriminazione"]
  },
  {
    "SDG": "11",
    "Advices": ["Carpool"]
  },
  {
    "SDG": "12",
    "Advices": ["Ripara i tuoi oggetti danneggiati", "Compra vestiti di seconda mano", "Ricicla", "Usa i tuoi contenitori per fare la spesa", "Usa una tazza di caffè riutilizzabile"]
  },
  {
    "SDG": "13",
    "Advices": ["Calcola la tua impronta di carbonio", "Utilizzo dei trasporti pubblici", "Riduci i rifiuti", "Riduci la tua impronta di carbonio (<2 t/anno)"]
  },
  {
    "SDG": "14",
    "Advices": ["Partecipa ad azioni di pulizia delle spiagge", "Utilizza creme solari naturali", "Utilizza prodotti naturali per il corpo"]
  },
  {
    "SDG": "15",
    "Advices": ["Utilizza prodotti domestici biodegradabili", "Mangia meno carne", "Composta i tuoi rifiuti", "Mangia frutta e verdura di stagione", "Riduci il più possibile la carta"]
  },
  {
    "SDG": "16",
    "Advices": ["Vota alle elezioni del tuo paese"]
  },
  {
    "SDG": "17",
    "Advices": ["Lavoro di squadra", "Viaggia intorno al mondo", "Fai un'esperienza internazionale"]
  }
];
const projects = [
  {
    "SDG": "1",
    "projects": [
      {
        "name": "UNI-CO-RE",
        "id": "1",
        "link": "https://www.unibo.it/en/services-and-opportunities/study-grants-and-subsidies/exemptions-and-incentives/uni-co-re-university-corridors-for-refugees-ethiopia-unibo-2019-21",
        "keyWords": [
          { "text": "Ethiopia", "value": "3" },
          { "text": "Refugee student", "value": "2" },
          { "text": "University of Bologna", "value": "1" },
          { "text": "Academic careers", "value": "2" },
          { "text": "UNHCR", "value": "1" }
        ]
      }
    ]
  },
  {
    "SDG": "2",
    "projects": [
      {
        "name": "Foodland ",
        "id": "1",
        "link": "https://www.unibo.it/en/research/projects-and-initiatives/research-projects-horizon-2020/588/693/8461",
        "keyWords": [
          { "text": "Africa", "value": "2" },
          { "text": "Healthy diets", "value": "2" },
          { "text": "Combate malnutrition", "value": "3" },
          { "text": "Agriculture", "value": "1" },
          { "text": "Aquaculture", "value": "1" },
          { "text": "Innovations", "value": "1" },
          { "text": "Solutions", "value": "1" }
        ]
      },
      {
        "name": "KMO project",
        "id": "2",
        "link": "https://site.unibo.it/almagoals/en/projects/progettokm0",
        "keyWords": [
          { "text": "Azienda afrafia", "value": "3" },
          { "text": "supply chain", "value": "1" },
          { "text": "relationship", "value": "2" },
          { "text": "city", "value": "2" },
          { "text": "countryside", "value": "2" },
          { "text": "seasonal trends", "value": "1" },
          { "text": "typical agricultural", "value": "1" }
        ]
      }
    ]
  },
  {
    "SDG": "3",
    "projects": [
      {
        "name": "ELEPHANT",
        "id": "1",
        "link": "https://www.unibo.it/en/international/european-projects-of-education-and-training/empowering-universities2019-learning-and-research-capacities-in-the-one-health-approach-for-the-management-of-animals-at-the-wildlife-livestock-and-human-interface-in-south-africa201d-elephant",
        "keyWords": [
          { "text": "Improve ", "value": "2" },
          { "text": "African universities", "value": "1" },
          { "text": "European universities", "value": "1" },
          { "text": "quality of teaching", "value": "3" },
          { "text": "quality of research", "value": "3" }
        ]
      },
      {
        "name": "Actlife",
        "id": "2",
        "link": "https://www.unibo.it/en/international/european-projects-of-education-and-training/actlife-physical-activity-the-tool-to-improve-the-quality-of-life-in-osteoporosis-people",
        "keyWords": [
          { "text": "physical-activities", "value": "2 " },
          { "text": "promotion", "value": "2 " },
          { "text": "osteoporosis", "value": "3 " }
        ]
      },
      {
        "name": "Local collaboration",
        "id": "3",
        "link": "https://site.unibo.it/almagoals/en/projects/local-collaboration",
        "keyWords": [
          { "text": "Rizzoli Hospital", "value": "2 " },
          { "text": "Sant'Orsola", "value": "2 " },
          { "text": "Institute of Neurological Sciences", "value": "2 " },
          { "text": "Healthcare", "value": "3 " }
        ]
      }
    ]
  },
  {
    "SDG": "4",
    "projects": [
      {
        "name": "Spreaker",
        "id": "1",
        "link": "#",
        "keyWords": [
          { "text": "podcast", "value": "3" },
          { "text": "research", "value": "2" },
          { "text": "Spreaker platform", "value": "2" },
          { "text": "global warming", "value": "1" },
          { "text": "Artifical intelligence", "value": "1" },
          { "text": "Inclusive language", "value": "1" },
          { "text": "Futur transport", "value": "1" }
        ]
      },
      {
        "name": "UNICORN",
        "id": "2",
        "link": "#",
        "keyWords": [
          { "text": "podcast", "value": "3" },
          { "text": "higher education", "value": "2 " },
          { "text": "learning", "value": "3 " },
          { "text": "civic competences", "value": "1 " },
          { "text": "democratic competences", "value": "1 " },
          { "text": "community", "value": "2 " }
        ]
      },
      {
        "name": "What makes life life ?",
        "id": "3",
        "link": "#",
        "keyWords": [
          { "text": "cultural event", "value": "3 " },
          { "text": "Almafest", "value": "1 " },
          { "text": "University of Bologna", "value": "1 " },
          { "text": "academic community", "value": "2 " },
          { "text": "city community", "value": "2 " },
          { "text": "together", "value": "2 " }
        ]
      }
    ]
  },
  {
    "SDG": "5",
    "projects": [
      {
        "name": "Baby pit-stop",
        "id": "1",
        "link": "#",
        "keyWords": [
          { "text": "Mothers", "value ": "2 " },
          { "text": "baby", "value ": "2 " },
          { "text": "quiet area", "value ": "1 " },
          { "text": "feed baby", "value ": "1 " },
          { "text": "change baby", "value ": "1 " }
        ]
      },
      {
        "name": "Women in science",
        "id": "2",
        "link": "#",
        "keyWords": [
          { "text": "worshop", "value ": "2 " },
          { "text": "discussion", "value ": "2 " },
          { "text": "Women in science", "value ": "3 " }
        ]
      },
      {
        "name": "Gender Equality Annual Report",
        "id": "3",
        "link": "#",
        "keyWords": [
          { "text": "Gender Equality", "value ": "4 " },
          { "text": "Monitor", "value ": "2 " },
          { "text": "teaching", "value ": "1 " },
          { "text": "Research ", "value ": "1 " },
          { "text": "Carrer progression", "value ": "1 " },
          { "text": "Leadership position", "value ": "1 " },
          { "text": "Equal right", "value ": "3 " }
        ]
      }
    ]
  },
  {
    "SDG": "6",
    "projects": [
      {
        "name": "Wastewater for agriculture",
        "id": "1",
        "link": "#",
        "keyWords": [
          { "text": "Wastewater", "value ": "4 " },
          { "text": "Agriculture", "value ": "3 " },
          { "text": "Palestine", "value ": "3 " },
          { "text": "Sustainable farming", "value ": "1 " },
          { "text": "Beit Dajan", "value ": "2 " },
          { "text": "Project", "value ": "1 " },
          { "text": "Water", "value ": "1 " }
        ]
      }
    ]
  },
  {
    "SDG": "7",
    "projects": [
      {
        "name": "Photovoltaic system",
        "id": "1",
        "link": "https://site.unibo.it/almagoals/en/projects/green-roofs",
        "keyWords": [
          { "text": "Photovoltaic ", "value ": "3 " },
          { "text": "Energy", "value ": "2 " },
          { "text": "Reduce", "value ": "2 " },
          { "text": "Responsible", "value ": "1 " },
          { "text": "Sustainability", "value ": "1 " }
        ]
      },
      {
        "name": "Energy policies and consumptions",
        "id": "2",
        "link": "#",
        "keyWords": [
          { "text": "Energy", "value ": "4 " },
          { "text": "Energy consumption", "value ": "2 " },
          { "text": "Policies", "value ": "1 " },
          { "text": "Heating system", "value ": "3 " },
          { "text": "Cooling system", "value ": "3 " },
          { "text": "Innovation", "value ": "1 " },
          { "text": "Regulation", "value ": "2 " }
        ]
      }
    ]
  },
  {
    "SDG": "8",
    "projects": [
      {
        "name": "Start-up day",
        "id": "1",
        "link": "#",
        "keyWords": [
          { "text": "Event", "value ": "2 " },
          { "text": "Entrepreuneurship", "value ": "3 " },
          { "text": "Project", "value ": "2 " },
          { "text": "Coworking path", "value ": "1 " },
          { "text": "Skills", "value ": "1 " }
        ]
      },
      {
        "name": "AlmaLabor",
        "id": "2",
        "link": "https://site.unibo.it/almagoals/en/projects/almalabor-unibo",
        "keyWords": [
          { "text": "Workshop", "value": "3 " },
          { "text": "Business ideas", "value": "2 " },
          { "text": "Training space", "value": "2 " },
          { "text": "Coworking", "value": "2 " },
          { "text": "Students", "value": "1 " }
        ]
      },
      {
        "name": "occupational health and safety",
        "id": "3",
        "link": "#",
        "keyWords": [
          { "text": "Protection", "value": "2 " },
          { "text": "Health", "value": "2 " },
          { "text": "Safety", "value": "2 " },
          { "text": "Work", "value": "2 " },
          { "text": "Measures", "value": "1 " }
        ]
      }
    ]
  },
  {
    "SDG": "9",
    "projects": [
      {
        "name": "I.E.D.A center",
        "id": "1",
        "link": "https://site.unibo.it/almagoals/en/projects/innovation-development-entrepreneurship-almamater-i-e-d-a-centre",
        "keyWords": [
          { "text": "Center", "value": "4" },
          { "text": "Innovation", "value": "3" },
          { "text": "Development", "value": "3" },
          { "text": "Entrepreuneurship", "value": "3" },
          { "text": "Students", "value": "1" },
          { "text": "Teachers", "value": "1" },
          { "text": "Researchers", "value": "1" },
          { "text": "Business potential ", "value": "2" },
          { "text": "Projetcs", "value": "1" }
        ]
      },
      {
        "name": "Incubators",
        "id": "2",
        "link": "#",
        "keyWords": [
          { "text": "Network", "value": "3 " },
          { "text": "Idea-scouting", "value": "2 " },
          { "text": "Space", "value": "1 " },
          { "text": "Multicampus", "value": "1 " }
        ]
      },
      {
        "name": "Almaclub",
        "id": "3",
        "link": "https://site.unibo.it/almagoals/en/projects/alma-e-club",
        "keyWords": [
          { "text": "Club", "value": "3 " },
          { "text": "Faculty members", "value": "1 " },
          { "text": "Scholar members", "value": "1 " },
          { "text": "Entrepreunarial culture", "value": "2 " },
          { "text": "network", "value": "2 " }
        ]
      },
      {
        "name": "Fondation for education university oriented professional",
        "id": "4",
        "link": "#",
        "keyWords": [
          { "text": "Partnership", "value": "3 " },
          { "text": "University", "value": "2 " },
          { "text": "Industrial network", "value": "2 " },
          { "text": "Design", "value": "1 " },
          { "text": "Promote", "value": "1 " },
          { "text": "Manage", "value": "1 " },
          { "text": "Vocationally degrees", "value": "2 " },
          { "text": "Technical sector", "value": "2 " }
        ]
      },
      {
        "name": "Emilia 4LT",
        "id": "5",
        "link": "#",
        "keyWords": [
          { "text": "Solar car", "value": "3" },
          { "text": "Challenge", "value": "2" },
          { "text": "Solar-powered", "value": "2" },
          { "text": "Vehicle", "value": "1" },
          { "text": "European Solar Challenge", "value": "1" }
        ]
      }
    ]
  },
  {
    "SDG": "10",
    "projects": [
      {
        "name": "FRIENDS",
        "id": "1",
        "link": "https://site.unibo.it/almagoals/en/projects/friends",
        "keyWords": [
          { "text": "Fostering resilience", "value": "3 " },
          { "text": "Inclusive education", "value": "3 " },
          { "text": "Non-discrimination", "value": "3 " },
          { "text": "Policiy reform", "value": "2 " },
          { "text": "School", "value": "2 " },
          { "text": "European Union", "value": "1 " }
        ]
      },
      {
        "name": "CUG",
        "id": "2",
        "link": "https://site.unibo.it/almagoals/en/projects/cug",
        "keyWords": [
          { "text": "Committee", "value": "3 " },
          { "text": "equal opportunities", "value": "2 " },
          { "text": "employee wellbeing", "value": "2 " },
          { "text": "prevent discrimination", "value": "2 " },
          { "text": "proposals", "value": "1 " }
        ]
      }
    ]
  },
  {
    "SDG": "11",
    "projects": [
      {
        "name": "REACH",
        "id": "1",
        "link": "https://site.unibo.it/almagoals/en/projects/improving-research-capacities-of-albanian-higher-education-institutions-in-conservation-and-restoration-of-cultural-heritage-reach",
        "keyWords": [
          { "text": "Albanian universities", "value": "1 " },
          { "text": "Italian universities", "value": "1 " },
          { "text": "Spanish universities", "value": "1 " },
          { "text": "Albanian cultural heritage", "value": "3 " },
          { "text": "Multidisciplinary skills", "value": "1 " },
          { "text": "Restore", "value": "2 " },
          { "text": "Conserve", "value": "2 " }
        ]
      },
      {
        "name": "ROCHEMP",
        "id": "2",
        "link": "https://site.unibo.it/almagoals/en/projects/rochemp-armenia-1",
        "keyWords": [
          { "text": "Regional center", "value": "3 " },
          { "text": "Conservation", "value": "1 " },
          { "text": "Management ", "value": "1 " },
          { "text": "Enhancement", "value": "1 " },
          { "text": "Cultural heritage", "value": "4 " },
          { "text": "Restoration", "value": "1 " },
          { "text": "Tourism", "value": "2 " },
          { "text": "training courses", "value": "1 " }
        ]
      },
      {
        "name": "GOAL",
        "id": "3",
        "link": "https://site.unibo.it/multicampus-sostenibile/en/green-office",
        "keyWords": [
          { "text": "Green office", "value": "3 " },
          { "text": "Relationship", "value": "2 " },
          { "text": "Campus", "value": "1 " },
          { "text": "University community", "value": "1 " },
          { "text": "Action", "value": "1 " },
          { "text": "Sustainability strategies", "value": "2 " }
        ]
      },
      {
        "name": "UniboCultura",
        "id": "4",
        "link": "https://www.unibo.it/en/services-and-opportunities/studying-and-beyond/the-unibocultura-initiatives",
        "keyWords": [
          { "text": "Promotion", "value": "2 " },
          { "text": "Cultural events", "value": "3 " },
          { "text": "Gather", "value": "2 " },
          { "text": "Non-specialist events", "value": "2 " }
        ]
      }
    ]
  },
  {
    "SDG": "12",
    "projects": [
      {
        "name": "Resources and waste policies and management",
        "id": "1",
        "link": "https://site.unibo.it/almagoals/en/projects/waste-treatment",
        "keyWords": [
          { "text": "Regulation", "value": "2 " },
          { "text": "Prevention", "value": "2 " },
          { "text": "Reduction", "value": "2 " },
          { "text": "Waste", "value": "3 " },
          { "text": "Circular economy", "value": "3 " }
        ]
      },
      {
        "name": "European week for waste reduction",
        "id": "2",
        "link": "#",
        "keyWords": [
          { "text": "Waste generation", "value": "3 " },
          { "text": "Green office", "value": "2" },
          { "text": "Reducing", "value": "2 " },
          { "text": "Reusing", "value": "2 " },
          { "text": "Recycling", "value": "2 " },
          { "text": "Action", "value": "1 " },
          { "text": "Event", "value": "1 " }
        ]
      },
      {
        "name": "Greenathon",
        "id": "3",
        "link": "#",
        "keyWords": [
          { "text": "Hackathon", "value": "2 " },
          { "text": "Issues", "value": "2 " },
          { "text": "Sustainability", "value": "2 " },
          { "text": "Carbon neutral", "value": "3 " }
        ]
      }
    ]
  },
  {
    "SDG": "13",
    "projects": [
      {
        "name": "GREAT",
        "id": "1",
        "link": "https://site.unibo.it/almagoals/en/projects/inclusive-schools-and-communities-for-another-citizenship-community-alliance-for-social-inclusion-and-violence-prevention-in-the-department-of-chalatenango-el-salvador",
        "keyWords": [
          { "text": "Climate", "value": "3 " },
          { "text": "Rural communities", "value": "3 " },
          { "text": "Dry zone", "value": "3 " },
          { "text": "Adaptation", "value": "2 " },
          { "text": "Help", "value": "2 " },
          { "text": "Climate change", "value": "4 " }
        ]
      },
      {
        "name": "Alma Climate",
        "id": "2",
        "link": "#",
        "keyWords": [
          { "text": "Institution", "value": "3 " },
          { "text": "Climate change", "value": "2 " },
          { "text": "Scientific research", "value": "1 " },
          { "text": "Issues", "value": "1 " },
          { "text": "Remedies", "value": "1 " }
        ]
      }
    ]
  },
  {
    "SDG": "14",
    "projects": [
      {
        "name": "Trasmares",
        "id": "1",
        "link": "#",
        "keyWords": [
          { "text": "Sustainability", "value": "2 " },
          { "text": "Marine ecosystems", "value": "3 " },
          { "text": "MOOCs", "value": "2 " },
          { "text": "Tools", "value": "2 " },
          { "text": "Trainning", "value": "1 " },
          { "text": "Higher education", "value": "1 " }
        ]
      },
      {
        "name": "Environment, energy and sea research center",
        "id": "2",
        "link": "#",
        "keyWords": [
          { "text": "Marina di Ravenna", "value": "3 " },
          { "text": "Technological innovation", "value": "2 " },
          { "text": "Environment", "value": "1 " },
          { "text": "Energy", "value": "1 " },
          { "text": "Sea", "value": "1 " },
          { "text": "Research center", "value": "2 " }
        ]
      },
      {
        "name": "Meraviglie Blu Event",
        "id": "3",
        "link": "https://site.unibo.it/almagoals/en/projects/spiaggialonga",
        "keyWords": [
          { "text": "Event", "value": "1 " },
          { "text": "National Geographic", "value": "1 " },
          { "text": "Safeguard", "value": "2 " },
          { "text": "Marine heritage", "value": "3 " },
          { "text": "Coral forest", "value": "2 " }
        ]
      }
    ]
  },
  {
    "SDG": "15",
    "projects": [
      {
        "name": "Experimental farm",
        "id": "1",
        "link": "https://site.unibo.it/almagoals/en/projects/aub-the-university-of-bologna-experimental-farm",
        "keyWords": [
          { "text": "Experimental farm", "value": "4 " },
          { "text": "Agricultural science", "value": "2 " },
          { "text": "Veterinary medical", "value": "2 " },
          { "text": "Green areas", "value": "1 " }
        ]
      },
      {
        "name": "Biodiversity festival",
        "id": "2",
        "link": "#",
        "keyWords": [
          { "text": "DayforBiological", "value": "3 " },
          { "text": "Nature", "value": "3 " },
          { "text": "Ecological crisis", "value": "2 " },
          { "text": "Green office", "value": "1 " },
          { "text": "Festival", "value": "1 " },
          { "text": "Biodiversity", "value": "4 " },
          { "text": "Protection", "value": "2 " },
          { "text": "Safeguarding", "value": "1 " },
          { "text": "Restauration", "value": "1 " }
        ]
      }
    ]
  },
  {
    "SDG": "16",
    "projects": [
      {
        "name": "Inclusive school and communities",
        "id": "1",
        "link": "https://site.unibo.it/almagoals/en/projects/inclusive-schools-and-communities-for-another-citizenship-community-alliance-for-social-inclusion-and-violence-prevention-in-the-department-of-chalatenango-el-salvador",
        "keyWords": [
          { "text": "Violence prevention", "value": "4 " },
          { "text": "Social inclusion", "value": "3 " },
          { "text": "Educational system", "value": "2 " },
          { "text": "Pedagogical skills", "value": "2 " },
          { "text": "Educational method", "value": "2 " },
          { "text": "El Salvador", "value": "1 " },
          { "text": "Technical assistance", "value": "1 " }
        ]
      },
      {
        "name": "MORALE",
        "id": "2",
        "link": "https://site.unibo.it/almagoals/en/projects/morale-capacity-building-for-curricula-modernization-of-syrian-and-lebanese-heis-and-lifelong-learning-provision-towards-sustainable-ngos-management-and-operation-with-special-focus-on-refugees",
        "keyWords": [
          { "text": "Syria", "value": "1 " },
          { "text": "Lenanon", "value": "1 " },
          { "text": "Curricula", "value": "2 " },
          { "text": "Modernisation", "value": "3 " },
          { "text": "NGO", "value": "2 " },
          { "text": "networking ", "value": "1 " },
          { "text": "Life Long Learning", "value": "3 " },
          { "text": "Refugees", "value": "1 " },
          { "text": "HEI", "value": "2 " }
        ]
      }
    ]
  },
  {
    "SDG": "17",
    "projects": [
      {
        "name": "International mobility",
        "id": "1",
        "link": "#",
        "keyWords": [
          { "text": "Europe", "value": "2 " },
          { "text": "Erasmus+", "value": "1 " },
          { "text": "University study", "value": "1 " },
          { "text": "Internship", "value": "1 " },
          { "text": "Mobility", "value": "3 " },
          { "text": "World", "value": "2 " },
          { "text": "International", "value": "3 " }
        ]
      },
      {
        "name": "AlmaEngage",
        "id": "2",
        "link": "https://site.unibo.it/almagoals/en/projects/alma-engage",
        "keyWords": [
          { "text": "Virtual structure", "value": "3 " },
          { "text": "Engagment", "value": "4 " },
          { "text": "Cordination", "value": "1 " },
          { "text": "Opening up ", "value": "1 " },
          { "text": "Active participation", "value": "1 " },
          { "text": "Internationalisation", "value": "2 " },
          { "text": "Social commitment", "value": "2 " },
          { "text": "Sustainable social development", "value": "3 " }
        ]
      },
      {
        "name": "IHEA",
        "id": "3",
        "link": "https://site.unibo.it/almagoals/en/projects/ihea-italian-higher-education-with-africa",
        "keyWords": [
          { "text": "Higher education", "value": "4 " },
          { "text": "Africa", "value": "1 " },
          { "text": "Educational qualification", "value": "3 " },
          { "text": "Managerial academic", "value": "2 " },
          { "text": "Political-administrative carrers", "value": "2 " },
          { "text": "Exchange", "value": "1 " },
          { "text": "Foudation", "value": "2 " }
        ]
      },
      {
        "name": "Una Europa",
        "id": "4",
        "link": "https://site.unibo.it/una-europa/en",
        "keyWords": [
          { "text": "European universities", "value": "4 " },
          { "text": "Alliance", "value": "3 " },
          { "text": "Multilingual", "value": "2 " },
          { "text": "Multidisciplinary", "value": "2 " },
          { "text": "Academic space", "value": "3 " },
          { "text": "Students mobility", "value": "1 " },
          { "text": "Shared", "value": "1 " }
        ]
      },
      {
        "name": "Networks",
        "id": "5",
        "link": "https://site.unibo.it/almagoals/en/projects/networks",
        "keyWords": [
          { "text": "Networks", "value": "1 " },
          { "text": "International", "value": "3 " },
          { "text": "Instutution", "value": "1 " },
          { "text": "European areas", "value": "2 " },
          { "text": "Mediterranean areas", "value": "2 " },
          { "text": "Cooperation", "value": "4 " },
          { "text": "Common European area", "value": "3 " }
        ]
      },
      {
        "name": "RUS",
        "id": "6",
        "link": "#",
        "keyWords": [
          { "text": "Sustainable development", "value": "4 " },
          { "text": "Spreading culture of sustanability", "value": "3 " },
          { "text": "Network", "value": "1 " },
          { "text": "Good practives", "value": "2 " },
          { "text": "Positive impact", "value": "2 " },
          { "text": "Environmental", "value": "1 " },
          { "text": "Social", "value": "1 " },
          { "text": "Ethical", "value": "1 " },
          { "text": "Italian experience", "value": "3 " },
          { "text": "SDGs", "value": "3" }
        ]
      }
    ]
  }
];
const colors = [
  {
    "SDG": "1",
    "color": "#E5243B",
    "name": "red"
  },
  {
    "SDG": "2",
    "color": "#DDA63A",
    "name": "mustard"
  },
  {
    "SDG": "3",
    "color": "#4C9F38",
    "name": "kelly green"
  },
  {
    "SDG": "4",
    "color": "#C5192D",
    "name": "dark red"
  },
  {
    "SDG": "5",
    "color": "#ff3a21",
    "name": "red orange"
  },
  {
    "SDG": "6",
    "color": "#26bde2",
    "name": "bright blue"
  },
  {
    "SDG": "7",
    "color": "#FCC30B",
    "name": "yellow"
  },
  {
    "SDG": "8",
    "color": "#A21942",
    "name": "burgundy red"
  },
  {
    "SDG": "9",
    "color": "#FD6925",
    "name": "orange"
  },
  {
    "SDG": "10",
    "color": "#DD1367",
    "name": "mangenta"
  },
  {
    "SDG": "11",
    "color": "#FD9D24",
    "name": "golden yellow"
  },
  {
    "SDG": "12",
    "color": "#BF8B2E",
    "name": "dark mustard"
  },
  {
    "SDG": "13",
    "color": "#3F7E44",
    "name": "dark green"
  },
  {
    "SDG": "14",
    "color": "#0A97D9",
    "name": "blue"
  },
  {
    "SDG": "15",
    "color": "#56C02B",
    "name": "lime green"
  },
  {
    "SDG": "16",
    "color": "#00689D",
    "name": "royal blue"
  },
  {
    "SDG": "17",
    "color": "#19486a",
    "name": "navy blue"
  }
];
const badges = [
  {
    "Badge": "Fashion for Good",
    "SDG": "1",
    "Point": "10",
    "Subtitle": "Fai 5 donazioni di vestiti",
    "Description": "Dividi i tuoi vestiti e dona quelli troppo piccoli o che non indossi più alle associazioni. Puoi anche depositarli in un contenitore specifico. Ogni volta che fai una donazione, non dimenticare di convalidare nell'app.",
    "Image": "clothes",
    "State": "unvalidated",
    "Type": "MultiCheckbox",
    "Checkbox": 5,
    "actionName": "donazione"
  },
  {
    "Badge": "Expiration Extender",
    "SDG": "2",
    "Point": "10",
    "Subtitle": "Acquista 10 volte prodotti a breve scadenza",
    "Description": "",
    "Image": "unavailable",
    "State": "unvalidated",
    "Type": "MultiCheckbox",
    "Checkbox": 20
  },
  {
    "Badge": "Fitness Fanatic",
    "SDG": "3",
    "Point": "5",
    "Subtitle": "Fai sport 2 volte a settimana in un mese",
    "Description": "",
    "Image": "sport",
    "State": "unvalidated",
    "Type": "Checkbox",
    "Checkbox": 8
  },
  {
    "Badge": "Hydration Hero",
    "SDG": "3",
    "Point": "5",
    "Subtitle": "Bevi 2 litri al giorno per un mese",
    "Description": "",
    "Image": "water",
    "State": "unvalidated",
    "Type": ""
  },
  {
    "Badge": "Museum Explorer",
    "SDG": "4",
    "Point": "30",
    "Subtitle": "Visita 3 volte un museo",
    "Description": "",
    "Image": "museum",
    "State": "unvalidated",
    "Type": "MultiCheckbox",
    "Checkbox": 3,
    "actionName": "visit"
  },
  {
    "Badge": "Equality Advocate",
    "SDG": "5",
    "Point": "10",
    "Subtitle": "Fai il quiz sull'uguaglianza di genere",
    "Description": "",
    "Image": "gender",
    "State": "validated",
    "Type": "Quizz"
  },
  {
    "Badge": "Eco Hydrato",
    "SDG": "6",
    "Point": "10",
    "Subtitle": "Riempi la tua borraccia 50 volte",
    "Description": "",
    "Image": "unavailable",
    "State": "unvalidated",
    "Type": "QR-Code",
    "Checkbox": 50
  },
  {
    "Badge": "Drip Drop Champion",
    "SDG": "6",
    "Point": "10",
    "Subtitle": "Fai 10 docce brevi",
    "Description": "Per risparmiare acqua, fai una doccia breve (meno di 10 minuti). Ogni volta che fai la doccia, avvia il timer dell'app per convalidare la tua doccia.",
    "Image": "shower",
    "State": "validated",
    "Type": "Timer",
    "Checkbox": 10
  },
  {
    "Badge": "Laundry Potion",
    "SDG": "6",
    "Point": "20",
    "Subtitle": "Crea il tuo detersivo liquido per bucato",
    "Description": "",
    "Image": "landry",
    "State": "unvalidated",
    "Type": "Checkbox",
    "Checkbox": 1
  },
  {
    "Badge": "Green Power",
    "SDG": "7",
    "Point": "10",
    "Subtitle": "Fai il quiz sull'energia",
    "Description": "",
    "Image": "energy",
    "State": "unvalidated",
    "Type": "Quizz"
  },
  {
    "Badge": "Carpool Captain",
    "SDG": "11",
    "Point": "50",
    "Subtitle": "Fai 10 viaggi in carpool",
    "Description": "",
    "Image": "carpool",
    "State": "unvalidated",
    "Type": "Checkbox",
    "Checkbox": 10
  },
  {
    "Badge": "Caffeine Conscious",
    "SDG": "12",
    "Point": "10",
    "Subtitle": "Usa la tua tazza 20 volte",
    "Description": "",
    "Image": "coffee",
    "State": "validated",
    "Type": "Checkbox",
    "Checkbox": 20
  },
  {
    "Badge": "Eco Shopper",
    "SDG": "12",
    "Point": "10",
    "Subtitle": "Riutilizza 10 volte i tuoi contenitori per la spesa",
    "Description": "",
    "Image": "bag",
    "State": "unvalidated",
    "Type": "MultiCheckbox",
    "Checkbox": 10
  },
  {
    "Badge": "Carbon Tracker",
    "SDG": "13",
    "Point": "50",
    "Subtitle": "Calcola la tua impronta di carbonio",
    "Description": "",
    "Image": "co2",
    "State": "unvalidated",
    "Type": "Input"
  },
  {
    "Badge": "Climate Champion",
    "SDG": "13",
    "Point": "200",
    "Subtitle": "Avere un'impronta di carbonio inferiore a 2 tonnellate all'anno",
    "Description": "",
    "Image": "carbonFootprint",
    "State": "unvalidated",
    "Type": "Input"
  },
  {
    "Badge": "Beach Cleaner",
    "SDG": "14",
    "Point": "50",
    "Subtitle": "Partecipa a 5 iniziative per ripulire la spiaggia",
    "Description": "",
    "Image": "beach",
    "State": "unvalidated",
    "Type": "Checkbox",
    "Checkbox": 5
  },
  {
    "Badge": "Herbivore Hero",
    "SDG": "15",
    "Point": "20",
    "Subtitle": "Mangia vegetariano due volte a settimana per un mese",
    "Description": "",
    "Image": "vegetarian",
    "State": "validated",
    "Type": "Checkbox",
    "Checkbox": 1
  },
  {
    "Badge": "Eco Chemist",
    "SDG": "15",
    "Point": "20",
    "Subtitle": "Crea 3 prodotti per la casa",
    "Description": "",
    "Image": "holdhouseProduct",
    "State": "unvalidated",
    "Type": "Checkbox",
    "Checkbox": 3
  },
  {
    "Badge": "Responsible Gardener",
    "SDG": "17",
    "Point": "20",
    "Subtitle": "Collegati alla serra Unibo",
    "Description": "",
    "Image": "unavailable",
    "State": "unvalidated"
  }
];
const getSdgData = (sdg) => {
  return sdgData.find((s) => s.SDG == sdg);
};
const getSdgTitle = (sdg) => {
  return sdgData.find((s) => s.SDG == sdg).title;
};
const getSdgAdvices = (sdg) => {
  return sdgAdvices.find((s) => s.SDG == sdg).Advices;
};
const getTESTProjet = (sdg) => {
  return projects.find((s) => s.SDG == sdg).projects;
};
const getAllBadges = () => {
  return badges;
};
const getBadgeByName = (name) => {
  return badges.find((n) => n.Badge == name);
};
const getBadgesBySDG = (sdg) => {
  return badges.filter((s) => s.SDG == sdg);
};
const getColorName = (id) => {
  var _a;
  return (_a = colors.find((color2) => color2.SDG == id)) == null ? void 0 : _a.name;
};
const img_extension = ".png";
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "SdgCard",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const mq = useMq();
    const publicPath = inject("publicPath");
    const img_url = publicPath + "/assets/medias/sdgs_icons/sdg";
    const getlink = () => {
      if (mq.mobile === true) {
        return "/sdg/" + props.id;
      } else {
        return "/kiosk/" + props.id;
      }
    };
    const link = getlink();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(_component_router_link, mergeProps({ to: unref(link) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "background-image": "url(" + unref(publicPath) + "/assets/medias/sdgs_background/sdg" + props.id + ".jpg)", "border-color": "var(--sdg" + _ctx.id + ")" })}" data-v-18fe7587${_scopeId}><img${ssrRenderAttr("src", img_url + _ctx.id + img_extension)}${ssrRenderAttr("alt", unref(getSdgTitle)(_ctx.id))} data-v-18fe7587${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", {
                style: { "background-image": "url(" + unref(publicPath) + "/assets/medias/sdgs_background/sdg" + props.id + ".jpg)", "border-color": "var(--sdg" + _ctx.id + ")" }
              }, [
                createVNode("img", {
                  src: img_url + _ctx.id + img_extension,
                  alt: unref(getSdgTitle)(_ctx.id)
                }, null, 8, ["src", "alt"])
              ], 4)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const SdgCard_vue_vue_type_style_index_0_scoped_18fe7587_lang = "";
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SdgCard.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-18fe7587"]]);
const _sfc_main$W = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    id: "Outline",
    viewBox: "0 0 24 24",
    width: "50",
    height: "50"
  }, _attrs))}><path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"></path></svg>`);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/arrow-back.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const arrowBackIcon = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "Bandeau",
  __ssrInlineRender: true,
  props: {
    backLink: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sdgLine" }, _attrs))} data-v-468f2465>`);
      if (_ctx.backLink != "") {
        _push(ssrRenderComponent(_component_router_link, { to: "/home" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(arrowBackIcon, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(arrowBackIcon)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-468f2465>Hi NAME !</p></div>`);
    };
  }
});
const Bandeau_vue_vue_type_style_index_0_scoped_468f2465_lang = "";
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Bandeau.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const Bandeau = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-468f2465"]]);
const Home_vue_vue_type_style_index_0_scoped_f33aedfc_lang = "";
const _sfc_main$U = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const sdgs = [
      // id (string) = the number of the SDG 
      // desc (string) = the name of the SDG
      { id: "1" },
      { id: "2" },
      { id: "3" },
      { id: "4" },
      { id: "5" },
      { id: "6" },
      { id: "7" },
      { id: "8" },
      { id: "9" },
      { id: "10" },
      { id: "11" },
      { id: "12" },
      { id: "13" },
      { id: "14" },
      { id: "15" },
      { id: "16" },
      { id: "17" }
    ];
    const mq = useMq();
    useHead({
      title: "Home",
      meta: [
        {
          name: "description",
          content: "Website description"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (unref(mq).mobile === true) {
        _push(ssrRenderComponent(Bandeau, { backLink: "" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="sdg_container" data-v-f33aedfc><!--[-->`);
      ssrRenderList(sdgs, (sdg) => {
        _push(ssrRenderComponent(Card, {
          id: sdg.id,
          class: "sdg_card"
        }, null, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Home.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-f33aedfc"]]);
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "CustomButton",
  __ssrInlineRender: true,
  props: {
    name: {},
    sdg: {},
    type: {}
  },
  setup(__props) {
    const props = __props;
    const color2 = "var(--sdg" + props.sdg + ")";
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--4e373106": color2
      } };
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [_ctx.type, "button"]
      }, _attrs, _cssVars))} data-v-647b1153>${ssrInterpolate(_ctx.name)}</button>`);
    };
  }
});
const CustomButton_vue_vue_type_style_index_0_scoped_647b1153_lang = "";
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CustomButton.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-647b1153"]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "SdgKeyNumber",
  __ssrInlineRender: true,
  props: {
    sdg: {},
    number: {},
    unit: {},
    text: {}
  },
  setup(__props) {
    const props = __props;
    const color2 = "var(--sdg" + props.sdg + ")";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "sdgNumber",
        style: { "background-color": color2 }
      }, _attrs))} data-v-60f2be13><h3 data-v-60f2be13>${ssrInterpolate(_ctx.number)}</h3><p class="unit" data-v-60f2be13>${ssrInterpolate(_ctx.unit)}</p><p data-v-60f2be13>${ssrInterpolate(_ctx.text)}</p></div>`);
    };
  }
});
const SdgKeyNumber_vue_vue_type_style_index_0_scoped_60f2be13_lang = "";
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SdgKeyNumber.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const SdgKeyNumber = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-60f2be13"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "SdgKeyNumberGroup",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const data = (_a = getSdgData(props.id)) == null ? void 0 : _a.description;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "keyNumber_container" }, _attrs))} data-v-56c5aa0a><!--[-->`);
      ssrRenderList(unref(data), (desc) => {
        _push(ssrRenderComponent(SdgKeyNumber, {
          sdg: _ctx.id,
          number: desc.number,
          unit: desc.unit,
          text: desc.text
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const SdgKeyNumberGroup_vue_vue_type_style_index_0_scoped_56c5aa0a_lang = "";
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SdgKeyNumberGroup.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const SdgKeyNumberGroup = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-56c5aa0a"]]);
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "SdgDesc",
  __ssrInlineRender: true,
  props: {
    subtitle: {},
    sdg: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-81fb6280><h2 data-v-81fb6280>${ssrInterpolate(_ctx.subtitle)}</h2>`);
      _push(ssrRenderComponent(SdgKeyNumberGroup, { id: _ctx.sdg }, null, _parent));
      _push(`</div>`);
    };
  }
});
const SdgDesc_vue_vue_type_style_index_0_scoped_81fb6280_lang = "";
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SdgDesc.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const SdgDesc = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-81fb6280"]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "SdgTitle",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    const route = useRoute();
    const sdg = route.params.id;
    const bubbleColor = "url(../assets/medias/bubble/colorBubble" + sdg + ".svg";
    const bgImage = "url(../assets/medias/sdgs_background/sdg" + sdg + ".jpg";
    const icon_url = "url(../assets/medias/sdgs_icons/sdg" + sdg + ".png)";
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--111cd29f": icon_url,
        "--a0589efe": bubbleColor,
        "--38267360": bgImage
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "title sdgLine" }, _attrs, _cssVars))} data-v-e4f5708a><h1 class="${ssrRenderClass("icon" + unref(sdg))}" data-v-e4f5708a>${ssrInterpolate(_ctx.title)}</h1></div>`);
    };
  }
});
const SdgTitle_vue_vue_type_style_index_0_scoped_e4f5708a_lang = "";
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SdgTitle.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const SdgTitle = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-e4f5708a"]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "Sdg",
  __ssrInlineRender: true,
  setup(__props) {
    const mq = useMq();
    const route = useRoute();
    const id = route.params.id;
    const data = getSdgData(id);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[-->`);
      if (unref(mq).mobile === true) {
        _push(ssrRenderComponent(Bandeau, { backLink: "/home" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<main data-v-85131428>`);
      _push(ssrRenderComponent(SdgTitle, {
        title: (_a = unref(data)) == null ? void 0 : _a.title
      }, null, _parent));
      _push(ssrRenderComponent(SdgDesc, {
        sdg: unref(id).toString(),
        subtitle: (_b = unref(data)) == null ? void 0 : _b.subtitle,
        class: "description"
      }, null, _parent));
      _push(`<div class="button-container" data-v-85131428>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: unref(id) + "/unibo/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Button, {
              sdg: unref(id).toString(),
              type: "btn-outline",
              name: "What Unibo do?"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Button, {
                sdg: unref(id).toString(),
                type: "btn-outline",
                name: "What Unibo do?"
              }, null, 8, ["sdg"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: unref(id) + "/student/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Button, {
              sdg: unref(id).toString(),
              type: "btn-background",
              name: "What we can do?"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Button, {
                sdg: unref(id).toString(),
                type: "btn-background",
                name: "What we can do?"
              }, null, 8, ["sdg"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main><!--]-->`);
    };
  }
});
const Sdg_vue_vue_type_style_index_0_scoped_85131428_lang = "";
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Sdg.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const Sdg = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-85131428"]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "PopUpNumber",
  __ssrInlineRender: true,
  props: {
    number: {},
    title: {},
    text: {},
    color: {},
    picto: {}
  },
  setup(__props) {
    const props = __props;
    const publicPath = inject("publicPath");
    const bubbleLink = "url(" + publicPath + "assets/medias/bubble/popUp_bubble.svg)";
    const bubbleLine = "url(" + publicPath + "assets/medias/bubble/popUp_bubble_line.svg)";
    const pictoLink = "url(" + publicPath + "assets/medias/pictos/" + props.picto + ".svg)";
    console.log(pictoLink);
    console.log(bubbleLink);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--51514cd0": _ctx.color,
        "--a24e1d4e": bubbleLink,
        "--a24e1d5a": bubbleLine,
        "--804a03e8": pictoLink
      } };
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps({ class: "modal-header" }, _cssVars))} data-v-6fb6b06a><h2 data-v-6fb6b06a>${ssrInterpolate(_ctx.number)}</h2><h3 data-v-6fb6b06a>${ssrInterpolate(_ctx.title)}</h3></div><div${ssrRenderAttrs(mergeProps({ class: "modal-body" }, _cssVars))} data-v-6fb6b06a><p data-v-6fb6b06a>${ssrInterpolate(_ctx.text)}</p></div><!--]-->`);
    };
  }
});
const PopUpNumber_vue_vue_type_style_index_0_scoped_6fb6b06a_lang = "";
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/popUpItems/PopUpNumber.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const PopUpNumber = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-6fb6b06a"]]);
const carousel = "";
const wordCloud_vue_vue_type_style_index_0_scoped_f8224591_lang = "";
const margin = { top: 5, right: 5, bottom: 5, left: 5 };
const width = window.innerWidth * (70 / 100) - (margin.left + margin.right);
const height = 150 + margin.top + margin.bottom;
const color = "var(--sdg";
const _sfc_main$M = {
  props: {
    data: {
      type: Object
    },
    fontSizeMapper: {
      type: Function
    },
    sdg: {
      type: String
    }
  },
  mounted() {
    console.log(this.data);
    this.createCanvas();
  },
  methods: {
    createCanvas: function() {
      d3.select(this.$el).selectAll("*").remove();
      cloud().size([width, height]).padding(5).rotate(0).words(this.data.map(function(d) {
        return { text: d.text, value: d.value };
      })).fontSize(this.fontSizeMapper).on("end", this.draw).start();
    },
    draw: function(words) {
      console.log(words);
      d3.select(this.$el).append("svg").attr("width", width).attr("height", height).append("g").attr("transform", `translate(` + width / 2 + `,` + height / 2 + `)`).selectAll("text").data(words).enter().append("text").style("font-size", (d) => {
        return `${d.size}px`;
      }).style("fill", color + this.sdg + ")").attr("text-anchor", "middle").attr("transform", (d) => {
        return "translate(" + [d.x, d.y] + ")";
      }).text((d) => d.text);
    },
    components: {
      cloud
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "wordCloud",
    ref: "wordCloud"
  }, _attrs))} data-v-f8224591></div>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/graphs/wordCloud.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const WordCloud = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-f8224591"]]);
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "Cloud",
  __ssrInlineRender: true,
  props: {
    sdg: {},
    words: {}
  },
  setup(__props) {
    const fontSizeMapper = (word) => word.value * 15;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(WordCloud, {
        data: _ctx.words,
        fontSizeMapper,
        sdg: _ctx.sdg
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/graphs/Cloud.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "Project",
  __ssrInlineRender: true,
  props: {
    sdg: {},
    name: {},
    link: {},
    words: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project" }, _attrs))} data-v-5d985fb4><h1 data-v-5d985fb4>${ssrInterpolate(_ctx.name)}</h1>`);
      _push(ssrRenderComponent(_sfc_main$L, {
        sdg: _ctx.sdg,
        words: _ctx.words
      }, null, _parent));
      if (_ctx.link != "#") {
        _push(`<a${ssrRenderAttr("href", _ctx.link)} target="_bank" data-v-5d985fb4>`);
        _push(ssrRenderComponent(Button, {
          type: "btn-background",
          name: "see more",
          sdg: _ctx.sdg
        }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const Project_vue_vue_type_style_index_0_scoped_5d985fb4_lang = "";
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Project.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const Project = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-5d985fb4"]]);
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "PopUpSlide",
  __ssrInlineRender: true,
  props: {
    color: {}
  },
  setup(__props) {
    const publicPath = inject("publicPath");
    const bubbleLink = "url(" + publicPath + "/assets/medias/bubble/popUp_bubble.svg)";
    const bubbleLine = "url(" + publicPath + "/assets/medias/bubble/popUp_bubble_line.svg)";
    const pictoProject = "url(" + publicPath + "/assets/medias/pictos/project.svg)";
    defineComponent({
      name: "Basic",
      components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
      }
    });
    const route = useRoute();
    const id = route.params.id;
    const projects2 = getTESTProjet(id);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--85d97fe6": _ctx.color,
        "--f5230788": bubbleLink,
        "--f5230794": bubbleLine,
        "--50786c2c": pictoProject
      } };
      _push(ssrRenderComponent(unref(Carousel), mergeProps({ class: "carousel" }, _attrs, _cssVars), {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Pagination), { class: "page" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Pagination), { class: "page" })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(projects2), (project) => {
              _push2(ssrRenderComponent(unref(Slide), {
                key: project.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(Project, {
                      sdg: unref(id).toString(),
                      name: project.name,
                      link: project.link,
                      words: project.keyWords
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(Project, {
                        sdg: unref(id).toString(),
                        name: project.name,
                        link: project.link,
                        words: project.keyWords
                      }, null, 8, ["sdg", "name", "link", "words"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(projects2), (project) => {
                return openBlock(), createBlock(unref(Slide), {
                  key: project.id
                }, {
                  default: withCtx(() => [
                    createVNode(Project, {
                      sdg: unref(id).toString(),
                      name: project.name,
                      link: project.link,
                      words: project.keyWords
                    }, null, 8, ["sdg", "name", "link", "words"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const PopUpSlide_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/popUpItems/PopUpSlide.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    id: "Outline",
    viewBox: "0 0 24 24",
    width: "50",
    height: "50"
  }, _attrs))}><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"></path></svg>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/cross.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const CrossIcon = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "PopUpBadge",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    text: {},
    sdg: {},
    picto: {}
  },
  setup(__props) {
    const props = __props;
    const publicPath = inject("publicPath");
    const bubbleLink = "url(" + publicPath + "/assets/medias/bubble/popUp_bubble.svg)";
    const bubbleLine = "url(" + publicPath + "/assets/medias/bubble/popUp_bubble_line.svg)";
    const color2 = "var(--sdg" + props.sdg + ")";
    const pictoLink = "url(" + publicPath + "/assets/medias/badges/icons/" + props.picto + ".svg)";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _cssVars = { style: {
        "--3bddc746": color2,
        "--2d845c28": bubbleLink,
        "--2d845c34": bubbleLine,
        "--45de3f19": pictoLink
      } };
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps({ class: "modal-header" }, _cssVars))} data-v-674ca2a0><h2 data-v-674ca2a0>${ssrInterpolate(_ctx.title)}</h2><h3 data-v-674ca2a0>${ssrInterpolate(_ctx.subtitle)}</h3></div><div${ssrRenderAttrs(mergeProps({ class: "modal-body" }, _cssVars))} data-v-674ca2a0><p data-v-674ca2a0>${ssrInterpolate(_ctx.text)}</p>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/sdg/" + _ctx.sdg + "/student"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Button, {
              name: "complete",
              sdg: _ctx.sdg,
              type: "btn-background"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Button, {
                name: "complete",
                sdg: _ctx.sdg,
                type: "btn-background"
              }, null, 8, ["sdg"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const PopUpBadge_vue_vue_type_style_index_0_scoped_674ca2a0_lang = "";
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/popUpItems/PopUpBadge.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const PopUpBadge = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-674ca2a0"]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    title: {},
    color: {},
    picto: {}
  },
  setup(__props) {
    const props = __props;
    const bubbleLink = "url(../assets/medias/badges/bubbles/" + props.picto + ".svg";
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--32e8ccda": bubbleLink
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-header" }, _attrs, _cssVars))} data-v-e0f2d88d>`);
      if (_ctx.title != null) {
        _push(`<h2 data-v-e0f2d88d>${ssrInterpolate(_ctx.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const Header_vue_vue_type_style_index_0_scoped_e0f2d88d_lang = "";
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/popUpItems/ActionsItems/Header.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-e0f2d88d"]]);
const _sfc_main$F = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 41 72",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6704.14,-1148.25)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(1.70701,0,0,2.11213,-6762.21,-266.683)"><path d="M7404.78,568.174C7404.06,568.093 7404.9,570.821 7404.71,576.686C7404.53,582.337 7403.35,589.453 7404.19,595.35C7405.86,607.077 7398.74,615.976 7401.97,620.708C7403.37,622.775 7413.74,621.176 7426.06,621.238C7435.09,621.283 7445.11,623.399 7454.19,620.367C7457.57,619.237 7456.41,612.999 7455.85,601.518C7455.34,591.226 7456.64,563.403 7455.32,564.89C7454.77,565.517 7453.96,566.073 7452.94,566.563C7444.93,570.398 7423.67,570.203 7406.06,568.315C7405.63,568.269 7405.21,568.222 7404.78,568.174M7428.67,591.797C7427.56,590.768 7425.97,589.685 7424.4,588.987C7423.19,588.451 7421.99,588.149 7421.01,588.176C7420.07,588.202 7419.29,588.502 7418.69,589.052C7418.4,589.324 7418.23,589.699 7418.21,590.098C7418.03,593.863 7418.95,596.868 7420.7,599.103C7422.26,601.091 7424.5,602.492 7427.34,603.233L7427.38,607.534C7427.39,608.375 7428.08,609.051 7428.92,609.042C7429.76,609.034 7430.44,608.344 7430.43,607.502L7430.39,603.468C7433.45,603.24 7435.82,602.236 7437.61,600.628C7440.62,597.933 7442.03,593.411 7442.11,587.512C7442.12,586.751 7441.56,586.1 7440.81,585.986C7436.49,585.334 7432.34,586.7 7428.67,591.797M7430.41,600.408C7432.57,600.207 7434.28,599.519 7435.58,598.358C7437.81,596.358 7438.8,593.077 7439.01,588.894C7435.92,588.876 7433.05,590.518 7430.43,594.635C7430.44,594.876 7430.54,597.667 7430.41,600.408M7427.25,594.771L7427.3,600.045C7425.55,599.458 7424.12,598.523 7423.1,597.22C7421.9,595.692 7421.27,593.68 7421.24,591.222L7421.33,591.231C7421.89,591.278 7422.52,591.488 7423.16,591.772C7424.45,592.35 7425.78,593.252 7426.67,594.098C7426.88,594.296 7427.1,594.577 7427.25,594.771M7436.95,561.757C7436.69,536.891 7431.8,526.108 7427.66,526.32C7420.11,526.707 7418.22,540.986 7419.27,566.216L7417.1,566.059C7416.78,535.894 7417.75,524.871 7427.66,524.593C7433.89,524.419 7439.24,534.334 7439.39,566.254L7436.94,566.42L7436.94,566.42C7431.88,566.696 7428.09,566.509 7421.65,566.21L7421.64,566.21C7421.4,566.198 7421.45,566.204 7421.45,566.201C7420.95,554.01 7420.97,544.405 7422.03,537.651C7423.38,531.753 7424.01,529.76 7427.37,527.912C7427.5,527.842 7427.76,527.847 7427.88,527.841C7428.75,527.796 7429.55,528.017 7430.5,528.977C7422.85,530.877 7422.9,544.318 7421.84,562.714C7427.27,562.223 7431.33,561.963 7436.95,561.757M7440.57,548.663C7439.41,534.182 7438.51,528.253 7435.32,527.947C7434.58,527.061 7434.03,526.373 7433.25,525.899C7433.93,525.873 7433.46,525.897 7434.21,525.983C7445.72,527.293 7442.82,542.144 7441.79,561.59C7447.87,561.458 7452.93,561.585 7455.2,562.082C7452.49,564.236 7441.67,566.097 7441.52,566.092C7441.36,566.087 7441.13,553.581 7440.57,548.663ZM7415.31,563.213C7415.31,564.15 7415.33,564.993 7415.34,565.97C7411.73,565.758 7409.14,565.589 7405.24,565.265C7406.55,564.542 7409.68,563.827 7415.31,563.213M7455.2,562.082C7455.19,562.056 7455.2,562.046 7455.21,562.044C7455.23,562.043 7455.24,562.05 7455.26,562.059C7455.29,562.077 7455.3,562.102 7455.2,562.082"></path></g></g></g></svg>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/bag.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const Bag = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$E = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 60 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6957.58,-1158.52)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(2.03305,0,0,2.51556,-8853.75,-334.945)"><path d="M7543.83,501.074C7541.11,500.957 7542.43,512.268 7539.18,518.852C7533.58,530.221 7533.93,548.961 7534.25,552.752C7534.93,560.945 7603.91,563.281 7602.64,552.752C7600.77,537.269 7595.15,528.409 7598.02,521.713C7600.83,515.183 7600.38,505.776 7601.08,499.099C7594.08,503.505 7572.34,502.298 7543.83,501.074ZM7573.91,531.396L7576.72,531.389L7578.55,534.566C7577.55,536.618 7576.54,537.062 7573.91,536.908L7573.9,537.549L7570.48,534.144L7573.9,530.705L7573.91,531.396ZM7559.1,531.336C7558.04,529.923 7557.94,528.264 7559.43,526.204L7558.82,525.851L7563.53,524.62L7564.82,529.323L7564.22,528.995L7562.82,531.353L7569.08,531.353L7569.07,536.878L7567.73,536.883L7563.78,536.883C7563.09,536.956 7561.81,536.102 7561.29,535.097L7559.11,531.353L7559.1,531.336ZM7577.83,523.524C7578.18,523.345 7578.5,523.487 7578.67,523.81L7580.91,527.681C7581.51,528.689 7581.28,530 7580.42,531.337L7580.41,531.353L7578.55,534.566L7574.1,526.876C7573.61,526.167 7573.79,525.722 7574.5,525.411L7577.14,523.924L7577.83,523.524ZM7566.42,516.17L7566.49,516.17L7571.62,516.188L7572.67,516.188C7573.89,516.149 7574.99,517.025 7575.94,519.006L7576.53,518.665L7575.31,523.168L7575.3,523.415L7570.64,522.1L7571.15,521.73L7569.77,519.4L7567.27,523.738C7566.83,524.687 7566.44,524.756 7565.73,524.22L7562.69,522.487C7561.89,522.124 7561.98,521.736 7562.4,521.042L7564.23,517.943C7564.68,516.988 7565.62,516.187 7566.42,516.17ZM7581.39,499.658C7579.76,499.797 7578.92,499.723 7577.74,499.557C7577.2,499.48 7575.2,494.403 7574.41,492.764C7572.05,487.864 7574.41,485.774 7578.66,486.164C7585.17,486.762 7583.91,490.729 7581.39,499.658ZM7588.78,487.126L7588.75,487.125C7587.11,487.121 7586.05,488.516 7584.62,490.827L7584.59,490.877C7584.62,493.288 7582.35,499.386 7582.8,499.493C7584.28,499.846 7584.55,500.038 7586.56,499.748C7585.77,494.537 7589.07,489.652 7593.07,489.969C7591.58,487.791 7590.14,487.146 7588.78,487.126ZM7587.87,499.639C7589.86,499.555 7591.23,499.341 7593.49,498.917C7595.75,498.494 7597.95,497.985 7599.68,497.559C7599.6,487.389 7587.05,488.84 7587.87,499.639ZM7567.92,480.778L7575.79,499.586C7574.35,499.579 7569.59,499.373 7569.59,499.373C7568.58,496.049 7567.24,492.192 7565.45,489.633L7562.78,483.435C7561.74,480.329 7566.69,477.669 7567.92,480.778ZM7552.91,494.184C7552.91,494.296 7552.91,494.184 7552.91,494.184C7553.62,495.525 7553.87,497.23 7554.33,498.642L7567.57,499.306C7562.89,481.28 7553.43,479.177 7552.91,494.184ZM7544.86,498.254C7546.13,498.369 7547.42,498.471 7548.74,498.555C7550.07,498.64 7551.42,498.706 7552.82,498.75C7549.99,485.067 7543.11,483.623 7544.86,498.254ZM7584.57,490.806L7584.57,490.806C7584.55,490.807 7584.51,491.009 7584.59,490.877L7584.59,490.867C7584.59,490.823 7584.58,490.807 7584.57,490.806Z"></path></g></g></g></svg>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/beach.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const Beach = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$D = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 52 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6895.72,-1158.52)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(2.33536,0,0,2.88961,-9784.72,-2854.95)"><path d="M6903.41,1338.35L6906.29,1338.35C6906.03,1338.57 6906.4,1339.02 6906.4,1339.02L6903.41,1339.02L6903.41,1338.35ZM6906.4,1356.72C6906.4,1356.72 6905.79,1357.18 6906.19,1357.39L6902.56,1357.39L6902.56,1356.72L6906.4,1356.72ZM6906.4,1355.35L6903.67,1355.35L6903.67,1354.68L6906.4,1354.68L6906.4,1355.35ZM6906.4,1353.31L6903.67,1353.31L6903.67,1352.64L6906.4,1352.64L6906.4,1353.31ZM6906.4,1351.26L6903.67,1351.26L6903.67,1350.6L6906.4,1350.6L6906.4,1351.26ZM6906.4,1349.22L6902.56,1349.22L6902.56,1348.56L6906.4,1348.56L6906.4,1349.22ZM6906.4,1347.18L6903.67,1347.18L6903.67,1346.52L6906.4,1346.52L6906.4,1347.18ZM6906.4,1345.14L6903.67,1345.14L6903.67,1344.47L6906.4,1344.47L6906.4,1345.14ZM6906.4,1343.1L6903.67,1343.1L6903.67,1342.43L6906.4,1342.43L6906.4,1343.1ZM6902.56,1340.39L6902.56,1341.06L6906.4,1341.06L6906.4,1340.39L6902.56,1340.39ZM6906.4,1328.14L6903.41,1328.14L6903.41,1328.81L6906.4,1328.81L6906.4,1328.14ZM6922.79,1313.53L6924.31,1314.11C6924.08,1315.13 6923.69,1315.89 6923.15,1316.39C6922.61,1316.89 6921.92,1317.14 6921.09,1317.14C6920.06,1317.14 6919.21,1316.71 6918.55,1315.86C6917.88,1315.01 6917.55,1313.84 6917.55,1312.37C6917.55,1310.81 6917.88,1309.59 6918.55,1308.73C6919.22,1307.86 6920.1,1307.43 6921.18,1307.43C6922.13,1307.43 6922.9,1307.77 6923.5,1308.45C6923.85,1308.85 6924.12,1309.43 6924.29,1310.18L6922.74,1310.63C6922.65,1310.14 6922.46,1309.76 6922.17,1309.47C6921.88,1309.19 6921.52,1309.05 6921.1,1309.05C6920.53,1309.05 6920.06,1309.3 6919.7,1309.8C6919.34,1310.3 6919.16,1311.11 6919.16,1312.23C6919.16,1313.41 6919.34,1314.26 6919.69,1314.76C6920.05,1315.27 6920.51,1315.52 6921.07,1315.52C6921.49,1315.52 6921.85,1315.36 6922.15,1315.04C6922.45,1314.72 6922.66,1314.21 6922.79,1313.53ZM6925.34,1312.34C6925.34,1311.39 6925.46,1310.58 6925.7,1309.93C6925.87,1309.46 6926.11,1309.03 6926.42,1308.65C6926.73,1308.27 6927.06,1307.99 6927.42,1307.8C6927.91,1307.56 6928.47,1307.43 6929.1,1307.43C6930.24,1307.43 6931.16,1307.86 6931.85,1308.72C6932.53,1309.58 6932.88,1310.77 6932.88,1312.3C6932.88,1313.81 6932.53,1315 6931.85,1315.85C6931.17,1316.71 6930.26,1317.14 6929.12,1317.14C6927.96,1317.14 6927.05,1316.71 6926.36,1315.86C6925.68,1315.01 6925.34,1313.84 6925.34,1312.34ZM6936.24,1316.08L6936.24,1316.98L6932.88,1316.98C6932.91,1316.63 6933.02,1316.31 6933.2,1316.01C6933.39,1315.7 6933.74,1315.3 6934.28,1314.79C6934.72,1314.38 6934.98,1314.11 6935.08,1313.96C6935.21,1313.76 6935.28,1313.57 6935.28,1313.37C6935.28,1313.15 6935.22,1312.99 6935.11,1312.87C6934.99,1312.75 6934.83,1312.69 6934.63,1312.69C6934.43,1312.69 6934.27,1312.76 6934.15,1312.88C6934.03,1313 6933.96,1313.2 6933.94,1313.49L6932.99,1313.39C6933.05,1312.86 6933.22,1312.47 6933.52,1312.24C6933.82,1312.01 6934.2,1311.89 6934.65,1311.89C6935.15,1311.89 6935.53,1312.03 6935.82,1312.29C6936.1,1312.56 6936.24,1312.9 6936.24,1313.3C6936.24,1313.53 6936.2,1313.75 6936.12,1313.95C6936.04,1314.16 6935.91,1314.37 6935.74,1314.6C6935.62,1314.75 6935.41,1314.96 6935.11,1315.25C6934.8,1315.53 6934.61,1315.71 6934.53,1315.81C6934.45,1315.9 6934.38,1315.99 6934.33,1316.08L6936.24,1316.08ZM6942.41,1316.58C6944,1317.27 6945.38,1316.35 6946.09,1315.11C6946.8,1313.87 6946.85,1312.3 6945.77,1311.69C6943.04,1310.15 6940.01,1315.53 6942.41,1316.58ZM6926.96,1312.28C6926.96,1313.34 6927.16,1314.15 6927.57,1314.69C6927.97,1315.24 6928.49,1315.52 6929.11,1315.52C6929.74,1315.52 6930.25,1315.25 6930.65,1314.7C6931.05,1314.16 6931.25,1313.34 6931.25,1312.25C6931.25,1311.18 6931.06,1310.38 6930.67,1309.85C6930.28,1309.32 6929.76,1309.05 6929.11,1309.05C6928.47,1309.05 6927.95,1309.32 6927.55,1309.86C6927.16,1310.39 6926.96,1311.2 6926.96,1312.28ZM6940.19,1311.13C6942.08,1311.96 6943.72,1310.87 6944.57,1309.39C6945.41,1307.91 6945.47,1306.04 6944.19,1305.32C6940.94,1303.49 6937.33,1309.89 6940.19,1311.13ZM6936.41,1305.88C6938.36,1306.77 6940.04,1305.59 6940.91,1304.01C6941.78,1302.42 6941.83,1300.42 6940.52,1299.65C6937.18,1297.69 6933.47,1304.55 6936.41,1305.88ZM6931.26,1301.52C6933.26,1302.47 6934.99,1301.21 6935.88,1299.51C6936.78,1297.81 6936.83,1295.67 6935.48,1294.84C6932.05,1292.73 6928.24,1300.09 6931.26,1301.52ZM6922.2,1299.53C6925.36,1301.4 6928.03,1299.34 6929.31,1296.6C6930.59,1293.87 6930.47,1290.47 6928.05,1289.66C6922.49,1287.79 6919.35,1297.85 6922.2,1299.53ZM6906.4,1359.43L6895.59,1359.43L6895.59,1289.43L6906.4,1289.43L6906.4,1291.39L6902.56,1291.39L6902.56,1292.06L6906.4,1292.06L6906.4,1293.43L6903.41,1293.43L6903.41,1294.1L6906.4,1294.1L6906.4,1295.48L6903.41,1295.48L6903.41,1296.14L6906.4,1296.14L6906.4,1297.52L6903.41,1297.52L6903.41,1298.18L6906.4,1298.18L6906.4,1299.56L6902.56,1299.56L6902.56,1300.23L6906.4,1300.23L6906.4,1301.6L6903.41,1301.6L6903.41,1302.27L6906.4,1302.27L6906.4,1303.64L6903.41,1303.64L6903.41,1304.31L6906.4,1304.31L6906.4,1305.68L6903.41,1305.68L6903.41,1306.35L6906.4,1306.35L6906.4,1307.73L6902.56,1307.73L6902.56,1308.39L6906.4,1308.39L6906.4,1309.77L6903.41,1309.77L6903.41,1310.43L6906.4,1310.43L6906.4,1311.81L6903.41,1311.81L6903.41,1312.48L6906.4,1312.48L6906.4,1313.85L6903.41,1313.85L6903.41,1314.52L6906.4,1314.52L6906.4,1315.89L6902.56,1315.89L6902.56,1316.56L6906.4,1316.56L6906.4,1317.93L6903.41,1317.93L6903.41,1318.6L6906.4,1318.6L6906.4,1319.98L6903.41,1319.98L6903.41,1320.64L6906.4,1320.64L6906.4,1322.02L6903.41,1322.02L6903.41,1322.68L6906.4,1322.68L6906.4,1324.06L6902.56,1324.06L6902.56,1324.72L6906.4,1324.72L6906.4,1326.1L6903.41,1326.1L6903.41,1326.77L6906.4,1326.77L6906.4,1330.18L6903.41,1330.18L6903.41,1330.85L6906.4,1330.85L6906.4,1332.22L6902.56,1332.22L6902.56,1332.89L6906.4,1332.89L6906.4,1334.27L6903.41,1334.27L6903.41,1334.93L6906.4,1334.93L6906.4,1336.33L6903.41,1336.33L6903.41,1336.97L6906.4,1336.97L6906.4,1338.26C6909.83,1335.43 6913.78,1333.51 6915.26,1332.04C6918.32,1329.02 6921.14,1324.7 6917.99,1320.31C6909.13,1307.95 6917.62,1300.65 6929.07,1303.39C6934.61,1304.72 6947.63,1313.83 6934.5,1326.84C6929.81,1332.75 6925.54,1335.72 6925.12,1343.03C6925.06,1344.15 6923.5,1365.92 6906.4,1357.49L6906.4,1359.43Z"></path></g></g></g></svg>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/carbonFootprint.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const CarbonFootprint = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$C = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 85 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-7081.23,-1067.44)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(0.360209,0,0,0.497013,5364.73,160.94)"><path d="M3953.08,1258.15L3952.7,1292.08C3953.28,1297.15 3949.95,1304.26 3940.01,1304.68L3879.31,1305.9C3869.66,1304.67 3867.68,1293.28 3867.36,1288.06L3869.21,1116.44C3868.95,1089.28 3892.54,1062.5 3909.05,1044L3868.49,1034.88C3846.5,1025.32 3847.88,1006.78 3863.38,999.739C3869.9,996.776 3896.31,996.71 3908.3,999.328C3914.96,1000.78 3918.67,1005.7 3925.19,1011.78C3942.68,973.751 3966.66,921.76 3979.04,916.348C4038.27,890.449 4250.15,896.335 4271.68,916.912C4290.5,934.901 4311.77,974.176 4325.58,1011.71C4331.94,1003.88 4338.43,999.41 4345.03,997.903C4358.66,997.351 4371.63,996.948 4385.05,998.161C4398.45,999.374 4409.61,1027.68 4381.87,1034.91C4375.25,1036.64 4352.58,1040.27 4339.83,1044.97C4361.99,1068 4380.6,1088.32 4381.76,1116.44L4382.47,1290.08C4382.63,1297.85 4375.85,1306.81 4371.34,1306.05L4310.65,1304.68C4303.03,1303.84 4298.71,1297.09 4298.5,1291.29L4298.8,1258.59L3953.08,1258.15ZM4189.02,1175.43C4189.02,1170.88 4185.32,1167.19 4180.78,1167.19L4070.67,1167.19C4066.12,1167.19 4062.43,1170.88 4062.43,1175.43L4062.43,1191.91C4062.43,1196.46 4066.12,1200.15 4070.67,1200.15L4180.78,1200.15C4185.32,1200.15 4189.02,1196.46 4189.02,1191.91L4189.02,1175.43ZM3972.62,1112.03C3970.16,1102.27 3958.34,1085.22 3938.03,1084.92C3908.59,1084.49 3902.07,1100.05 3899.74,1106.99C3892.62,1128.22 3904.54,1138.84 3914.81,1146.86C3922.09,1152.55 3986.29,1166.36 3972.62,1112.03ZM4279.06,1112.03C4281.51,1102.27 4293.34,1085.22 4313.65,1084.92C4343.08,1084.49 4349.6,1100.05 4351.93,1106.99C4359.06,1128.22 4347.13,1138.84 4336.86,1146.86C4329.59,1152.55 4265.39,1166.36 4279.06,1112.03ZM3922.13,1060.82C3937.02,1027.84 3969.52,951.561 3995.54,925.223C4081.82,910.143 4197.22,912.832 4257.09,926.218C4287.45,950.771 4314.15,1030.06 4328.98,1061.62C4221.28,1061.21 4051.4,1055.58 3922.13,1060.82Z"></path></g></g></g></svg>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/carpool.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const Carpool = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$B = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 66 71",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6638.3,-1067.44)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(2.33536,0,0,2.88961,-9862.63,-2652.11)"><path d="M6693.86,1145.75C6693.64,1145.61 6693.42,1145.46 6693.21,1145.3C6685.61,1148.26 6678.33,1152.47 6671.53,1158.63C6673.26,1162.64 6676.4,1165.91 6680.66,1168.57L6685.89,1163.94L6685.84,1198.67L6722.2,1198.53L6721.96,1163.68L6728.04,1167.94C6733.19,1166.76 6735.64,1163.4 6736.93,1159.12C6730.52,1153.62 6723.34,1149.03 6715.41,1145.32C6714.85,1145.65 6714.26,1145.96 6713.64,1146.24C6711.77,1144.38 6708.05,1142.61 6704.53,1141.27L6704.32,1139.32C6705.16,1139.02 6705.9,1138.58 6706.52,1138.11C6707.12,1137.65 6707.6,1137.15 6707.97,1136.63C6709.36,1134.65 6709.19,1132.33 6708.01,1130.62C6707.03,1129.2 6705.36,1128.2 6703.31,1128.17L6703.3,1128.17C6701.57,1128.04 6699.66,1128.57 6697.93,1130.23C6697.58,1130.5 6697.24,1130.81 6696.89,1131.14C6696.75,1131.28 6696.66,1131.49 6696.66,1131.74C6696.66,1131.76 6696.66,1131.78 6696.66,1131.8C6696.57,1132.14 6696.62,1132.47 6696.88,1132.76C6697.18,1133.09 6697.47,1132.97 6697.54,1132.94C6697.68,1132.88 6697.86,1132.75 6697.86,1132.44C6697.86,1132.39 6697.85,1132.28 6697.8,1132.14C6697.79,1132.09 6697.77,1132 6697.75,1131.92C6697.78,1131.85 6697.83,1131.79 6697.88,1131.73C6698.14,1131.42 6698.47,1131.16 6698.61,1131.03C6700.29,1129.71 6701.9,1129.19 6703.29,1129.22L6703.32,1129.22C6705.02,1129.36 6706.48,1130.24 6707.15,1131.21C6707.5,1131.72 6707.67,1132.63 6707.68,1133.56C6707.69,1134.48 6707.52,1135.43 6707.11,1136.03C6707.11,1136.03 6707.05,1136.11 6707.05,1136.11C6706.81,1136.44 6706.48,1136.79 6706.07,1137.12C6705.92,1137.25 6705.75,1137.37 6705.57,1137.49C6705.18,1137.75 6704.75,1137.98 6704.26,1138.2C6704.22,1138.2 6704.17,1138.21 6704.12,1138.23C6704.03,1138.26 6703.57,1138.45 6703.48,1138.49C6703.14,1138.68 6703.19,1139.01 6703.2,1139.06C6703.2,1139.06 6703.2,1139.06 6703.2,1139.07C6703.2,1139.46 6703.34,1140.45 6703.43,1141.01C6703.09,1141.14 6702.54,1141.35 6702.43,1141.42L6702.4,1141.44C6699.71,1142.46 6694.89,1145.06 6693.86,1145.75ZM6709.97,1147.47C6709.93,1147.44 6709.88,1147.42 6709.84,1147.39C6708.5,1146.62 6705.53,1144.58 6703.91,1144.09C6702.33,1144.5 6699.04,1146.62 6697.78,1147.43C6701.5,1148.46 6705.99,1148.43 6709.97,1147.47Z"></path></g></g></g></svg>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/clothes.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const Clothes = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$A = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 48 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6839.01,-1158.52)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(0.418173,0,0,0.498678,3808.5,-74.1829)"><path d="M5785.19,2074.33C5733.83,2002.68 5783.01,1960.39 5849.38,1976.28C5881.46,1983.96 5956.95,2036.76 5880.84,2112.14C5853.66,2146.37 5828.95,2163.59 5826.51,2205.95C5826.12,2212.66 5816.52,2347.02 5707.97,2284.37C5684.61,2270.9 5683.8,2225.67 5689.98,2212.29C5706.93,2175.6 5755.86,2155.66 5769.38,2142.3C5787.1,2124.79 5803.41,2099.74 5785.19,2074.33ZM5813.02,2035.01L5821.83,2038.38C5820.48,2044.32 5818.23,2048.72 5815.09,2051.6C5811.95,2054.49 5807.96,2055.93 5803.13,2055.93C5797.16,2055.93 5792.24,2053.46 5788.4,2048.53C5784.55,2043.59 5782.63,2036.85 5782.63,2028.29C5782.63,2019.24 5784.56,2012.21 5788.43,2007.21C5792.3,2002.2 5797.38,1999.69 5803.68,1999.69C5809.19,1999.69 5813.66,2001.66 5817.1,2005.59C5819.15,2007.92 5820.68,2011.26 5821.7,2015.61L5812.71,2018.2C5812.18,2015.38 5811.07,2013.16 5809.38,2011.53C5807.69,2009.89 5805.64,2009.08 5803.22,2009.08C5799.89,2009.08 5797.18,2010.53 5795.1,2013.42C5793.03,2016.31 5791.99,2021 5791.99,2027.48C5791.99,2034.35 5793.01,2039.25 5795.06,2042.16C5797.1,2045.08 5799.77,2046.54 5803.04,2046.54C5805.45,2046.54 5807.53,2045.61 5809.27,2043.76C5811.01,2041.9 5812.26,2038.99 5813.02,2035.01ZM5827.78,2028.14C5827.78,2022.61 5828.47,2017.96 5829.84,2014.2C5830.86,2011.43 5832.26,2008.94 5834.03,2006.74C5835.8,2004.54 5837.74,2002.91 5839.85,2001.85C5842.65,2000.41 5845.88,1999.69 5849.55,1999.69C5856.18,1999.69 5861.48,2002.18 5865.46,2007.15C5869.44,2012.12 5871.43,2019.03 5871.43,2027.88C5871.43,2036.66 5869.46,2043.53 5865.51,2048.49C5861.56,2053.45 5856.28,2055.93 5849.67,2055.93C5842.98,2055.93 5837.65,2053.46 5833.7,2048.53C5829.76,2043.59 5827.78,2036.8 5827.78,2028.14ZM5890.94,2049.77L5890.94,2055L5871.43,2055C5871.64,2053.02 5872.28,2051.15 5873.33,2049.38C5874.39,2047.61 5876.48,2045.27 5879.59,2042.34C5882.1,2039.98 5883.64,2038.38 5884.2,2037.54C5884.97,2036.38 5885.35,2035.23 5885.35,2034.09C5885.35,2032.84 5885.02,2031.87 5884.35,2031.2C5883.69,2030.53 5882.77,2030.19 5881.59,2030.19C5880.43,2030.19 5879.51,2030.54 5878.82,2031.25C5878.13,2031.96 5877.74,2033.13 5877.63,2034.77L5872.09,2034.21C5872.42,2031.12 5873.45,2028.89 5875.19,2027.55C5876.94,2026.2 5879.11,2025.52 5881.73,2025.52C5884.59,2025.52 5886.85,2026.3 5888.48,2027.87C5890.12,2029.43 5890.94,2031.37 5890.94,2033.69C5890.94,2035.02 5890.7,2036.27 5890.23,2037.47C5889.77,2038.66 5889.02,2039.91 5888.01,2041.22C5887.33,2042.09 5886.12,2043.34 5884.36,2044.97C5882.61,2046.6 5881.49,2047.68 5881.03,2048.21C5880.56,2048.74 5880.18,2049.26 5879.89,2049.77L5890.94,2049.77ZM5926.67,2052.69C5935.91,2056.7 5943.9,2051.38 5948.02,2044.18C5952.13,2036.98 5952.38,2027.9 5946.15,2024.39C5930.33,2015.47 5912.75,2046.64 5926.67,2052.69ZM5837.14,2027.77C5837.14,2033.93 5838.32,2038.6 5840.67,2041.78C5843.03,2044.95 5846.02,2046.54 5849.64,2046.54C5853.26,2046.54 5856.23,2044.97 5858.56,2041.81C5860.88,2038.66 5862.04,2033.93 5862.04,2027.62C5862.04,2021.39 5860.91,2016.74 5858.65,2013.68C5856.39,2010.61 5853.38,2009.08 5849.64,2009.08C5845.89,2009.08 5842.87,2010.63 5840.58,2013.73C5838.29,2016.84 5837.14,2021.52 5837.14,2027.77ZM5913.81,2021.15C5924.8,2025.93 5934.29,2019.6 5939.19,2011.03C5944.09,2002.46 5944.39,1991.65 5936.98,1987.47C5918.16,1976.86 5897.24,2013.95 5913.81,2021.15ZM5891.9,1990.71C5903.19,1995.83 5912.95,1989.04 5917.98,1979.85C5923.01,1970.66 5923.32,1959.07 5915.71,1954.59C5896.37,1943.22 5874.88,1982.99 5891.9,1990.71ZM5862.07,1965.44C5873.67,1970.93 5883.7,1963.65 5888.87,1953.8C5894.04,1943.95 5894.35,1931.52 5886.53,1926.72C5866.66,1914.52 5844.58,1957.16 5862.07,1965.44ZM5809.6,1953.93C5827.89,1964.75 5843.36,1952.79 5850.76,1936.95C5858.16,1921.11 5857.48,1901.39 5843.45,1896.69C5811.23,1885.88 5793.07,1944.15 5809.6,1953.93Z"></path></g></g></g></svg>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/co2.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const Co2 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$z = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 78 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6761.45,-1148.25)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(2.33536,0,0,2.88961,-9742.8,-2873.42)"><path d="M6797.53,1350.19C6796.76,1351.1 6795.95,1351.91 6795.09,1352.62C6790.3,1356.55 6759.01,1356.49 6754.52,1352.67C6742.65,1335.56 6740.99,1313.74 6746.1,1313.59C6766.44,1315.88 6785.31,1315.26 6803.39,1313.1C6805.62,1313.75 6806.64,1317.75 6806.53,1323.05L6806.53,1322.96C6821.77,1309.23 6832.68,1344.72 6797.53,1350.19L6797.53,1350.19ZM6801.92,1343.01L6801.92,1343.01C6825.92,1336.85 6816.28,1316.5 6805.82,1330.04L6805.82,1330.04C6805.08,1334.37 6803.77,1338.95 6801.92,1343.01ZM6779.51,1342C6774.9,1341.77 6772.01,1338.5 6770.9,1334.76C6769.78,1331.02 6770.45,1326.81 6772.96,1324.71C6779.9,1328.57 6773.64,1335.4 6779.51,1342ZM6775.63,1323.8C6778.37,1327.05 6778.33,1330.47 6778.44,1333.55C6778.54,1336.62 6778.77,1339.35 6782.05,1341.2C6788.65,1334.41 6782.14,1323.18 6775.63,1323.8ZM6781.33,1294.26C6782.82,1299.1 6782.24,1302.86 6781.43,1305.72C6780.61,1308.57 6779.56,1310.5 6780.1,1311.67C6775.23,1305.07 6780.12,1300.42 6781.33,1294.26ZM6772.52,1285.55C6774.1,1288.46 6773.56,1291.88 6772.74,1295.56C6771.92,1299.24 6770.83,1303.17 6771.29,1307.12C6766.42,1298.94 6771.32,1293.18 6772.52,1285.55Z"></path></g></g></g></svg>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/coffee.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const Coffee = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$y = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 80 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6993.05,-1067.97)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(1.85091,0,0,2.2902,-6551.94,-47.9767)"><path d="M7076.61,328.356C7076.61,305.536 7099.2,287.008 7127.02,287.008C7154.84,287.008 7177.43,305.536 7177.43,328.356C7177.43,340.675 7170.73,352.353 7159.16,360.208L7164.14,375.33L7149.34,365.429C7142.4,368.242 7134.76,369.704 7127.02,369.704C7099.2,369.704 7076.61,351.177 7076.61,328.356ZM7126.43,347.73L7126.28,355.886C7126.27,356.677 7126.94,357.33 7127.79,357.343C7128.63,357.357 7129.33,356.725 7129.35,355.935L7129.49,347.778C7129.51,346.987 7128.83,346.334 7127.99,346.321C7127.14,346.308 7126.44,346.939 7126.43,347.73ZM7136.56,344.859L7141.53,352.316C7141.93,352.928 7142.75,353.087 7143.35,352.67C7143.95,352.253 7144.1,351.418 7143.69,350.805L7138.73,343.348C7138.32,342.736 7137.51,342.577 7136.91,342.994C7136.31,343.411 7136.15,344.247 7136.56,344.859ZM7117.48,345.015L7113.33,350.635C7112.86,351.269 7113,352.162 7113.64,352.627C7114.27,353.092 7115.17,352.954 7115.64,352.32L7119.79,346.7C7120.26,346.066 7120.12,345.173 7119.48,344.708C7118.84,344.243 7117.94,344.381 7117.48,345.015ZM7110.71,336.044L7104.29,341.938C7103.71,342.466 7103.67,343.371 7104.18,343.959C7104.7,344.546 7105.59,344.594 7106.16,344.066L7112.59,338.172C7113.16,337.644 7113.21,336.738 7112.69,336.151C7112.17,335.564 7111.29,335.516 7110.71,336.044ZM7144.45,338.273L7151.69,344.168C7152.26,344.626 7153.04,344.475 7153.44,343.832C7153.84,343.188 7153.71,342.294 7153.15,341.836L7145.9,335.942C7145.34,335.484 7144.55,335.635 7144.15,336.278C7143.75,336.921 7143.88,337.816 7144.45,338.273ZM7127.95,312.726C7136.86,312.726 7144.09,319.762 7144.09,328.428C7144.09,337.093 7136.86,344.129 7127.95,344.129C7119.04,344.129 7111.81,337.093 7111.81,328.428C7111.81,319.762 7119.04,312.726 7127.95,312.726ZM7126.32,340.301L7126.32,337.036L7129.6,337.036L7129.6,340.301L7126.32,340.301ZM7126.49,334.552C7126.48,334.169 7126.48,333.883 7126.48,333.692C7126.48,332.566 7126.64,331.594 7126.96,330.777C7127.19,330.161 7127.57,329.54 7128.09,328.913C7128.48,328.457 7129.17,327.79 7130.17,326.914C7131.16,326.038 7131.81,325.34 7132.11,324.82C7132.41,324.3 7132.56,323.732 7132.56,323.116C7132.56,322.001 7132.12,321.021 7131.24,320.177C7130.37,319.333 7129.3,318.911 7128.03,318.911C7126.8,318.911 7125.78,319.293 7124.96,320.058C7124.14,320.822 7123.6,322.017 7123.34,323.641L7120.38,323.291C7120.65,321.114 7121.44,319.447 7122.76,318.29C7124.07,317.132 7125.82,316.554 7127.98,316.554C7130.28,316.554 7132.1,317.175 7133.47,318.417C7134.83,319.659 7135.52,321.162 7135.52,322.925C7135.52,323.944 7135.28,324.884 7134.8,325.744C7134.32,326.604 7133.38,327.65 7131.98,328.881C7131.04,329.71 7130.43,330.32 7130.14,330.713C7129.85,331.106 7129.64,331.557 7129.5,332.067C7129.36,332.577 7129.28,333.405 7129.26,334.552L7126.49,334.552ZM7099.63,329.952L7109.05,329.952C7109.85,329.952 7110.49,329.269 7110.49,328.428C7110.49,327.586 7109.85,326.903 7109.05,326.903L7099.63,326.903C7098.83,326.903 7098.18,327.586 7098.18,328.428C7098.18,329.269 7098.83,329.952 7099.63,329.952ZM7146.52,329.952L7156.35,329.952C7157.11,329.952 7157.72,329.269 7157.72,328.428C7157.72,327.586 7157.11,326.903 7156.35,326.903L7146.52,326.903C7145.76,326.903 7145.14,327.586 7145.14,328.428C7145.14,329.269 7145.76,329.952 7146.52,329.952ZM7144.86,321.612L7153.08,315.775C7153.71,315.322 7153.86,314.438 7153.41,313.802C7152.95,313.166 7152.07,313.018 7151.43,313.471L7143.22,319.308C7142.58,319.761 7142.43,320.645 7142.88,321.281C7143.34,321.917 7144.23,322.065 7144.86,321.612ZM7102.81,315.736L7110.82,321.573C7111.48,322.055 7112.44,321.947 7112.95,321.333C7113.47,320.719 7113.36,319.829 7112.7,319.347L7104.69,313.51C7104.03,313.028 7103.07,313.136 7102.55,313.75C7102.03,314.364 7102.15,315.254 7102.81,315.736ZM7112.33,305.656L7117.42,313.667C7117.84,314.322 7118.72,314.524 7119.39,314.117C7120.06,313.711 7120.27,312.849 7119.85,312.194L7114.76,304.183C7114.34,303.528 7113.46,303.326 7112.79,303.733C7112.12,304.14 7111.91,305.001 7112.33,305.656ZM7137.79,313.688L7143.58,306.602C7144.11,305.949 7144.01,304.988 7143.36,304.457C7142.7,303.926 7141.74,304.025 7141.2,304.677L7135.41,311.764C7134.88,312.417 7134.98,313.378 7135.63,313.909C7136.29,314.44 7137.25,314.341 7137.79,313.688ZM7129.48,309.401L7129.48,301.169C7129.48,300.378 7128.8,299.736 7127.95,299.736C7127.11,299.736 7126.42,300.378 7126.42,301.169L7126.42,309.401C7126.42,310.191 7127.11,310.833 7127.95,310.833C7128.8,310.833 7129.48,310.191 7129.48,309.401Z"></path></g></g></g></svg>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/energy.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const Energy = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$x = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 80 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6904.66,-1067.44)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(1.85091,0,0,2.2902,-6427.18,-309.084)"><path d="M6897.68,441.705C6897.68,418.885 6920.27,400.357 6948.09,400.357C6975.91,400.357 6998.5,418.885 6998.5,441.705C6998.5,454.024 6991.8,465.702 6980.23,473.557L6985.21,488.679L6970.41,478.778C6963.47,481.591 6955.83,483.053 6948.09,483.053C6920.27,483.053 6897.68,464.526 6897.68,441.705ZM6943.69,456.056C6934.89,455.136 6928.02,447.696 6928.02,438.667C6928.02,429.018 6935.86,421.183 6945.53,421.183C6949.97,421.183 6954.03,422.842 6957.12,425.573C6957.2,425.459 6957.29,425.353 6957.39,425.259L6968.28,415.719L6961.49,415.719C6960.66,415.719 6959.99,415.047 6959.99,414.219C6959.99,413.392 6960.66,412.719 6961.49,412.719C6961.49,412.719 6972.27,412.719 6972.27,412.719L6972.41,412.725C6972.58,412.741 6972.74,412.785 6972.89,412.854L6972.9,412.858C6973.09,412.943 6973.26,413.068 6973.4,413.231C6973.52,413.368 6973.61,413.52 6973.67,413.681L6973.68,413.696C6973.74,413.859 6973.77,414.035 6973.77,414.219L6973.77,424.076C6973.77,424.904 6973.1,425.576 6972.27,425.576C6971.44,425.576 6970.77,424.904 6970.77,424.076L6970.77,417.528L6959.37,427.515C6959.3,427.579 6959.22,427.634 6959.14,427.681C6961.58,430.685 6963.03,434.507 6963.03,438.667C6963.03,447.927 6955.81,455.515 6946.69,456.113L6946.69,465.631L6954.28,465.608C6955.11,465.605 6955.79,466.275 6955.79,467.103C6955.79,467.931 6955.12,468.605 6954.29,468.608L6946.69,468.631L6946.69,473.953C6946.69,474.781 6946.02,475.453 6945.19,475.453C6944.36,475.453 6943.69,474.781 6943.69,473.953L6943.69,468.64L6936.13,468.664C6935.3,468.666 6934.63,467.996 6934.63,467.168C6934.62,466.341 6935.29,465.666 6936.12,465.664L6943.69,465.64L6943.69,456.056ZM6944.22,451.005L6944.22,447.703L6947.48,447.703L6947.48,451.005L6944.22,451.005ZM6944.39,445.19C6944.38,444.803 6944.38,444.513 6944.38,444.32C6944.38,443.181 6944.54,442.199 6944.86,441.372C6945.09,440.749 6945.47,440.121 6945.99,439.487C6946.37,439.025 6947.06,438.351 6948.05,437.465C6949.04,436.579 6949.69,435.873 6949.98,435.347C6950.28,434.821 6950.43,434.246 6950.43,433.623C6950.43,432.496 6949.99,431.505 6949.12,430.651C6948.25,429.797 6947.19,429.37 6945.92,429.37C6944.7,429.37 6943.68,429.757 6942.86,430.53C6942.05,431.304 6941.51,432.512 6941.26,434.155L6938.31,433.8C6938.57,431.599 6939.36,429.913 6940.67,428.742C6941.99,427.572 6943.72,426.986 6945.88,426.986C6948.16,426.986 6949.98,427.615 6951.34,428.871C6952.7,430.128 6953.38,431.647 6953.38,433.43C6953.38,434.461 6953.14,435.411 6952.66,436.281C6952.18,437.151 6951.25,438.209 6949.86,439.455C6948.92,440.292 6948.31,440.91 6948.03,441.307C6947.74,441.705 6947.53,442.161 6947.39,442.677C6947.25,443.192 6947.17,444.03 6947.15,445.19L6944.39,445.19Z"></path></g></g></g></svg>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/gender.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const Gender = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$w = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 80 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-7032.73,-1158.52)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(2.33536,0,0,2.88961,-10542.8,-900.084)"><path d="M7357.22,645.681C7357.22,627.594 7375.12,612.91 7397.16,612.91C7419.21,612.91 7437.11,627.594 7437.11,645.681C7437.11,655.444 7431.81,664.7 7422.64,670.925L7426.58,682.91L7414.86,675.063C7409.35,677.292 7403.3,678.452 7397.16,678.452C7375.12,678.452 7357.22,663.768 7357.22,645.681ZM7375.23,638.611C7375.28,638.608 7375.34,638.632 7375.38,638.681C7377.95,642.246 7381.3,644.338 7385.74,644.371C7385.83,644.372 7385.95,644.521 7385.94,644.613C7385.94,644.706 7385.79,644.889 7385.69,644.888C7381.23,644.855 7377.83,642.802 7375.22,639.28C7375.48,642.529 7376.44,645.07 7377.84,647.353C7377.89,647.323 7377.95,647.319 7378.01,647.349C7380.87,648.894 7384.75,649.306 7388.52,648.946C7388.62,648.937 7388.75,649.06 7388.76,649.152C7388.77,649.244 7388.69,649.486 7388.6,649.494C7384.87,649.85 7381.03,649.456 7378.15,647.997C7380.4,651.402 7383.74,653.579 7387.78,655.27C7384.31,656.435 7380.72,656.746 7377.06,656.603C7379.49,659.39 7381.43,662.603 7382.15,666.832C7383.78,664.535 7385.76,662.984 7388.06,662.145C7394.91,661.252 7400.6,659.21 7403.29,654.118C7404.69,651.454 7405.01,647.944 7404.53,643.815L7406.74,642.805L7405.28,641.823C7402.44,635.451 7395.04,637.04 7396.01,645.087C7392.58,637.365 7381.65,639.554 7375.2,636.002C7375.17,636.907 7375.18,637.776 7375.23,638.611ZM7412.52,633.122C7412.42,629.516 7415.3,628.288 7419.15,629.364C7418.97,631.121 7418.2,632.405 7417.03,633.129C7415.95,633.797 7414.53,633.987 7412.94,633.63C7412.92,633.709 7412.88,633.783 7412.81,633.84C7410.49,635.8 7408.29,639.2 7407.72,643.061C7408.09,642.044 7408.58,641.264 7409.22,640.713C7410.25,639.808 7411.66,639.521 7413.47,639.817C7414.15,643.478 7411.46,645.141 7407.59,645.304C7407.62,646.513 7407.83,647.748 7408.26,648.981C7408.33,649.194 7408.22,649.426 7408,649.499C7407.79,649.572 7407.55,649.458 7407.48,649.245C7406,644.988 7406.97,640.708 7408.85,637.403C7405.2,636.493 7403.88,634.405 7404.5,631.338C7406.67,631.17 7408.06,631.655 7408.78,632.703C7409.43,633.665 7409.52,635.1 7409.13,636.936C7410.05,635.443 7411.14,634.171 7412.27,633.22C7412.34,633.159 7412.43,633.127 7412.52,633.122ZM7400.25,641.656L7400.24,642.92C7400.24,643.013 7400.39,643.087 7400.49,643.088C7400.58,643.089 7400.75,643.015 7400.76,642.923L7400.77,641.658C7400.77,641.566 7400.6,641.49 7400.51,641.489C7400.41,641.488 7400.26,641.564 7400.25,641.656Z"></path></g></g></g></svg>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/justice.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const Justice = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$v = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 45 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6646.72,-1148.25)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(3.89032,0,0,4.66222,-21314,10.4202)"><path d="M6963.02,182.898L6962.15,182.907C6956.58,183.199 6949.8,222.335 6955.96,221.596L6978.85,221.583C6981.3,221.472 6979.9,200.722 6978.5,194.643C6976.39,185.495 6975.05,182.593 6970.31,182.825L6970.16,178.258C6968.03,178.375 6965.65,178.35 6963.09,178.221L6963.02,182.898ZM6971.7,187.172C6974.12,189.404 6975.56,193.569 6976.14,197.452C6976.71,201.335 6976.43,204.935 6975.41,206.036C6973.74,205.044 6970.14,189.241 6971.7,187.172ZM6958.98,190.346L6970.31,190.44C6970.47,195.213 6971.57,198.892 6972.83,203.308L6955.84,203.316C6956.44,199.357 6957.54,195.253 6958.98,190.346ZM6963.64,182.892L6963.64,179.195L6963.25,179.195L6963.25,182.895L6963.64,182.892ZM6964.35,182.884L6964.35,179.195L6963.96,179.195L6963.96,182.888L6964.35,182.884ZM6965.05,182.877L6965.05,179.195L6964.67,179.195L6964.67,182.881L6965.05,182.877ZM6965.76,182.87L6965.76,179.195L6965.38,179.195L6965.38,182.874L6965.76,182.87ZM6966.47,182.863L6966.47,179.195L6966.08,179.195L6966.08,182.867L6966.47,182.863ZM6967.18,182.856L6967.18,179.195L6966.79,179.195L6966.79,182.86L6967.18,182.856ZM6967.88,182.849L6967.88,179.195L6967.5,179.195L6967.5,182.853L6967.88,182.849ZM6968.59,182.842L6968.59,179.195L6968.2,179.195L6968.2,182.846L6968.59,182.842ZM6969.3,182.835L6969.3,179.195L6968.91,179.195L6968.91,182.839L6969.3,182.835ZM6970.01,182.828L6970.01,179.195L6969.62,179.195L6969.62,182.832L6970.01,182.828Z"></path></g></g></g></svg>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/landry.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const Landry = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$u = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 72 70",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6822.65,-1067.44)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(2.33536,0,0,2.88961,-10139.5,-2623.38)"><path d="M7010.35,1188.2L6977.29,1188.2C6976.28,1188.2 6975.31,1188.41 6975.28,1186.78C6975.25,1185.12 6976.13,1185.16 6977.31,1185.16C6999.49,1185.18 7021.66,1185.17 7043.84,1185.17C7044.86,1185.17 7045.83,1184.97 7045.86,1186.6C7045.89,1188.25 7045,1188.21 7043.82,1188.21C7032.66,1188.19 7021.51,1188.2 7010.35,1188.2ZM6997.57,1164.24C6997.57,1168.79 6997.58,1173.33 6997.57,1177.87C6997.56,1179.97 6996.59,1181.26 6995,1181.35C6993.38,1181.43 6992.13,1180.03 6992.12,1177.91C6992.09,1168.82 6992.09,1159.73 6992.12,1150.64C6992.12,1148.51 6993.38,1147.09 6994.98,1147.16C6996.61,1147.22 6997.56,1148.56 6997.57,1150.81C6997.57,1155.29 6997.57,1159.76 6997.57,1164.24ZM7035.6,1164.25C7035.6,1168.87 7035.61,1173.48 7035.6,1178.1C7035.59,1180.12 7034.67,1181.29 7033.13,1181.34C7031.53,1181.4 7030.54,1180.17 7030.54,1178.03C7030.53,1168.87 7030.53,1159.7 7030.54,1150.54C7030.54,1148.38 7031.49,1147.17 7033.09,1147.18C7034.68,1147.19 7035.59,1148.43 7035.6,1150.6C7035.61,1155.15 7035.6,1159.7 7035.6,1164.25ZM7026.17,1164.2C7026.17,1168.75 7026.18,1173.3 7026.17,1177.84C7026.16,1180.02 7025.08,1181.38 7023.43,1181.35C7021.86,1181.31 7020.72,1179.97 7020.72,1177.96C7020.69,1168.87 7020.69,1159.78 7020.72,1150.68C7020.72,1148.52 7021.9,1147.13 7023.52,1147.16C7025.16,1147.19 7026.16,1148.54 7026.17,1150.77C7026.18,1155.25 7026.17,1159.73 7026.17,1164.2ZM7007,1164.34C7007,1168.96 7007.02,1173.57 7007,1178.19C7006.99,1180.19 7005.99,1181.36 7004.4,1181.35C7002.82,1181.33 7001.86,1180.17 7001.86,1178.15C7001.85,1168.85 7001.88,1159.55 7001.83,1150.25C7001.82,1148.46 7002.59,1147.42 7004.34,1147.22C7005.91,1147.04 7006.99,1148.32 7006.99,1150.29C7007.02,1154.97 7007,1159.66 7007,1164.34ZM7011.28,1164.11C7011.28,1159.63 7011.28,1155.15 7011.29,1150.68C7011.29,1148.48 7012.35,1147.14 7014,1147.17C7015.56,1147.19 7016.69,1148.5 7016.7,1150.57C7016.74,1159.73 7016.74,1168.88 7016.7,1178.03C7016.69,1180.07 7015.49,1181.36 7013.91,1181.34C7012.33,1181.33 7011.3,1180.02 7011.29,1177.94C7011.28,1173.33 7011.28,1168.72 7011.28,1164.11ZM6982.68,1164.19C6982.68,1159.58 6982.69,1154.97 6982.68,1150.36C6982.68,1149.07 6983.07,1148.02 6984.35,1147.43C6985.33,1146.98 6986.22,1147.19 6987.01,1147.81C6987.88,1148.48 6988.11,1149.48 6988.11,1150.5C6988.12,1159.65 6988.14,1168.8 6988.11,1177.96C6988.1,1180.02 6987,1181.3 6985.4,1181.34C6983.78,1181.39 6982.69,1180.01 6982.69,1177.82C6982.67,1173.28 6982.68,1168.74 6982.68,1164.19ZM7009.34,1144.85C6999.06,1144.85 6988.78,1144.84 6978.51,1144.86C6977.04,1144.86 6975.45,1144.87 6974.73,1143.46C6973.99,1142.03 6974.86,1140.62 6975.63,1139.34C6976.14,1138.52 6976.91,1137.97 6977.7,1137.44C6986.8,1131.34 6995.92,1125.27 7004.98,1119.11C7006.75,1117.91 7008.2,1117.9 7009.97,1119.11C7020.39,1126.26 7031.46,1132.47 7041.65,1139.96C7042.85,1140.85 7043.73,1141.75 7043.29,1143.27C7042.81,1144.94 7041.37,1144.86 7039.97,1144.86C7029.76,1144.84 7019.55,1144.85 7009.34,1144.85Z"></path></g></g></g></svg>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/museum.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const Museum = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$t = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "100%",
    height: "100%",
    viewBox: "0 0 82 69",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xml:space": "preserve",
    "xmlns:serif": "http://www.serif.com/",
    style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
  }, _attrs))}><g transform="matrix(1,0,0,1,-6716.71,-1069.46)"><g transform="matrix(0.4282,0,0,0.346067,4189.94,857.097)"><g transform="matrix(2.33536,0,0,2.88961,-11631.2,-948.8)"><path d="M7511.84,578.684C7511.92,578.995 7511.9,579.087 7512.03,579.037C7517.67,576.753 7522.15,596.966 7518.37,598.698C7518.15,598.801 7518.45,598.984 7518.72,599.527C7518.9,599.9 7522.19,605.069 7525.09,607.982C7523.11,592.48 7519.07,579.595 7509.48,566.809C7509.77,571.463 7510.74,574.059 7511.84,578.684ZM7511.77,565.668C7510.35,563.711 7513.34,561.28 7517.61,560.045C7519.81,559.407 7521.67,559.186 7522.05,559.711C7531.26,572.459 7539.02,589.425 7539.09,605.108C7539.11,608.763 7531.12,610.026 7528.31,608.71C7525.49,592.978 7521.54,579.053 7511.77,565.668ZM7510.61,580.585C7506.45,582.271 7506.74,587.182 7508.39,591.738C7510.04,596.294 7512.99,599.531 7516.9,597.74C7520.67,596.007 7516.25,578.301 7510.61,580.585ZM7559.09,546.825C7556.99,543.811 7568.19,539.489 7569.31,541.033C7578.52,553.781 7586.28,570.746 7586.36,586.43C7586.37,590.084 7578.43,592.527 7575.62,591.211C7573.45,575.518 7568.52,560.353 7559.09,546.825ZM7559.4,565.944C7559.4,565.944 7556.9,554.006 7556.48,547.359C7566.22,561.342 7571.28,576.24 7573.26,591.742C7568.5,586.965 7562.1,572.77 7562.1,572.77L7565.62,571.04C7566.59,568.563 7564.37,564.984 7562.33,564.63L7562.28,564.606L7559.4,565.944ZM7535.76,579.46L7561.72,567.037C7563.49,568.085 7563.8,568.811 7563.48,570.413L7537.22,583.405C7536.65,581.711 7536.53,580.836 7535.76,579.46ZM7578.6,552.24C7580.31,555.645 7581.75,558.719 7582.98,561.807C7584.22,564.895 7585.25,567.997 7586.18,571.456C7591.8,570.81 7586.69,550.271 7578.6,552.24Z"></path></g></g></g></svg>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/badges/sport.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const Sport = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.icon == "bag") {
        _push(ssrRenderComponent(Bag, _attrs, null, _parent));
      } else if (_ctx.icon == "beach") {
        _push(ssrRenderComponent(Beach, _attrs, null, _parent));
      } else if (_ctx.icon == "carbonFootprint") {
        _push(ssrRenderComponent(CarbonFootprint, _attrs, null, _parent));
      } else if (_ctx.icon == "carpool") {
        _push(ssrRenderComponent(Carpool, _attrs, null, _parent));
      } else if (_ctx.icon == "clothes") {
        _push(ssrRenderComponent(Clothes, _attrs, null, _parent));
      } else if (_ctx.icon == "co2") {
        _push(ssrRenderComponent(Co2, _attrs, null, _parent));
      } else if (_ctx.icon == "coffee") {
        _push(ssrRenderComponent(Coffee, _attrs, null, _parent));
      } else if (_ctx.icon == "energy") {
        _push(ssrRenderComponent(Energy, _attrs, null, _parent));
      } else if (_ctx.icon == "gender") {
        _push(ssrRenderComponent(Gender, _attrs, null, _parent));
      } else if (_ctx.icon == "justice") {
        _push(ssrRenderComponent(Justice, _attrs, null, _parent));
      } else if (_ctx.icon == "landry") {
        _push(ssrRenderComponent(Landry, _attrs, null, _parent));
      } else if (_ctx.icon == "museum") {
        _push(ssrRenderComponent(Museum, _attrs, null, _parent));
      } else if (_ctx.icon == "sport") {
        _push(ssrRenderComponent(Sport, _attrs, null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/popUpItems/ActionsItems/Icon.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "Multicheckbox",
  __ssrInlineRender: true,
  props: {
    text: {},
    sdg: {},
    picto: {},
    actionName: {},
    numberActions: {}
  },
  setup(__props) {
    const props = __props;
    const color2 = "var(--sdg" + props.sdg + ")";
    const counter = ref(0);
    const legend = ref(props.actionName);
    const btnDisabled = ref(false);
    const iconID = ref(counter.value.toString());
    function incrementcounter() {
      if (counter.value < props.numberActions) {
        counter.value = counter.value + 1;
        iconID.value = String(counter.value);
        const icon = document.getElementById(iconID.value);
        icon == null ? void 0 : icon.classList.remove("icon-unvalidated");
        icon == null ? void 0 : icon.classList.add("icon-validated");
        if (counter.value === props.numberActions) {
          btnDisabled.value = true;
        }
      }
      if (counter.value == 2) {
        legend.value = legend.value + "s";
      }
    }
    const iconWidth = ref();
    if (props.numberActions < 10) {
      iconWidth.value = "40px";
    } else {
      iconWidth.value = "25px";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--57a70e64": color2,
        "--8972fe90": iconWidth.value
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-body" }, _attrs, _cssVars))} data-v-3517d957><div class="action-images" data-v-3517d957><!--[-->`);
      ssrRenderList(_ctx.numberActions, (action) => {
        _push(ssrRenderComponent(_sfc_main$s, {
          class: "action-icon icon-unvalidated",
          icon: _ctx.picto,
          id: action.toString()
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="action-container" style="${ssrRenderStyle({ "background-color": "var(--sdg" + _ctx.sdg + ")" })}" data-v-3517d957><span data-v-3517d957>${ssrInterpolate(counter.value)}</span><p data-v-3517d957>${ssrInterpolate(legend.value)}</p></div>`);
      _push(ssrRenderComponent(Button, {
        sdg: _ctx.sdg,
        name: "Add a " + _ctx.actionName,
        type: "btn-background",
        onClick: ($event) => incrementcounter(),
        disabled: btnDisabled.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const Multicheckbox_vue_vue_type_style_index_0_scoped_3517d957_lang = "";
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/popUpItems/ActionsItems/Multicheckbox.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Multicheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-3517d957"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    text: {},
    sdg: {},
    picto: {},
    actionName: {}
  },
  setup(__props) {
    const props = __props;
    const color2 = "var(--sdg" + props.sdg + ")";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-body" }, _attrs))} data-v-a18cdd88><p data-v-a18cdd88>${ssrInterpolate(_ctx.text)}</p><form data-v-a18cdd88><label${ssrRenderAttr("for", _ctx.picto)} data-v-a18cdd88><input type="checkbox"${ssrRenderAttr("id", _ctx.picto)} data-v-a18cdd88><span style="${ssrRenderStyle({ "border-color": color2 })}" data-v-a18cdd88></span> ${ssrInterpolate(_ctx.actionName)}</label>`);
      _push(ssrRenderComponent(Button, {
        name: "validated",
        type: "btn-background",
        sdg: _ctx.sdg
      }, null, _parent));
      _push(`</form></div>`);
    };
  }
});
const Checkbox_vue_vue_type_style_index_0_scoped_a18cdd88_lang = "";
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/popUpItems/ActionsItems/Checkbox.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-a18cdd88"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "FormInput",
  __ssrInlineRender: true,
  props: {
    placeholder: {},
    type: {},
    label: {},
    id: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><label${ssrRenderAttr("for", _ctx.label)}>${ssrInterpolate(_ctx.label)}</label><input${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderAttr("type", _ctx.type)} class="input"${ssrRenderAttr("id", _ctx.id)}><!--]-->`);
    };
  }
});
const FormInput_vue_vue_type_style_index_0_lag_css_scooped_true_lang = "";
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/formItems/FormInput.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    text: {},
    sdg: {},
    picto: {},
    actionName: {}
  },
  setup(__props) {
    const props = __props;
    "var(--sdg" + props.sdg + ")";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-body" }, _attrs))} data-v-b0580fbb><p data-v-b0580fbb>${ssrInterpolate(_ctx.text)}</p><form data-v-b0580fbb>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        placeholder: "your score",
        type: "text",
        label: _ctx.actionName,
        id: _ctx.picto
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        name: "validated",
        type: "btn-background",
        sdg: _ctx.sdg
      }, null, _parent));
      _push(`</form></div>`);
    };
  }
});
const Input_vue_vue_type_style_index_0_scoped_b0580fbb_lang = "";
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/popUpItems/ActionsItems/Input.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Input = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-b0580fbb"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "PopUpAction",
  __ssrInlineRender: true,
  props: {
    text: {},
    sdg: {},
    picto: {},
    badgeName: {}
  },
  setup(__props) {
    const props = __props;
    const color2 = "var(--sdg" + props.sdg + ")";
    const badge = getBadgeByName(props.badgeName);
    const numberActions = ref(0);
    const actionName = ref();
    const badgeType = ref();
    if (badge !== void 0 && badge.Checkbox !== void 0) {
      numberActions.value = badge.Checkbox;
    }
    if (badge !== void 0 && badge.actionName !== void 0) {
      actionName.value = badge.actionName;
    }
    if (badge !== void 0 && badge.Type !== void 0) {
      badgeType.value = badge.Type;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, {
        title: "",
        color: color2,
        picto: _ctx.picto
      }, null, _parent));
      if (badgeType.value == "MultiCheckbox") {
        _push(ssrRenderComponent(Multicheckbox, {
          text: _ctx.text,
          sdg: _ctx.sdg,
          picto: _ctx.picto,
          actionName: actionName.value,
          numberActions: numberActions.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (badgeType.value == "Checkbox") {
        _push(ssrRenderComponent(Checkbox, {
          text: _ctx.text,
          sdg: _ctx.sdg,
          picto: _ctx.picto,
          actionName: "actionName",
          color: color2
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (badgeType.value == "Input") {
        _push(ssrRenderComponent(Input, {
          text: _ctx.text,
          sdg: _ctx.sdg,
          picto: _ctx.picto,
          actionName: "actionName",
          color: color2
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/popUpItems/PopUpAction.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "PopUpGreenhouse",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-body" }, _attrs))} data-v-4c3f10a0><p data-v-4c3f10a0>Enter your code to join the Unibo garden</p>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        placeholder: "Code",
        type: "text"
      }, null, _parent));
      _push(`<div class="btn-container" data-v-4c3f10a0>`);
      _push(ssrRenderComponent(Button, {
        type: "btn-unibo-outline",
        name: "Cancel"
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        type: "btn-unibo",
        name: "Join the greenhouse"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const PopUpGreenhouse_vue_vue_type_style_index_0_scoped_4c3f10a0_lang = "";
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/popUpItems/PopUpGreenhouse.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const PopUpGreenhouse = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-4c3f10a0"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "PopUp",
  __ssrInlineRender: true,
  props: {
    show: {},
    title: {},
    subtitle: {},
    type: {},
    picto: {},
    color: {},
    text: {},
    badgeName: {}
  },
  setup(__props) {
    const props = __props;
    const colorName = "var(--sdg" + props.color + ")";
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-mask" }, _attrs))}><div class="modal-container"><button class="modal-default-button">`);
        _push(ssrRenderComponent(CrossIcon, { style: { "height": "2.5vh", "z-index": "100," } }, null, _parent));
        _push(`</button>`);
        if (_ctx.type == "number") {
          _push(ssrRenderComponent(PopUpNumber, {
            title: _ctx.subtitle,
            number: _ctx.title,
            color: colorName,
            picto: _ctx.picto
          }, null, _parent));
        } else if (_ctx.type == "slide") {
          _push(ssrRenderComponent(_sfc_main$J, {
            title: _ctx.subtitle,
            number: _ctx.title,
            color: colorName
          }, null, _parent));
        } else if (_ctx.type == "badge") {
          _push(ssrRenderComponent(PopUpBadge, {
            subtitle: _ctx.subtitle,
            title: _ctx.title,
            text: _ctx.text,
            sdg: _ctx.color,
            picto: _ctx.picto
          }, null, _parent));
        } else if (_ctx.type == "action") {
          _push(ssrRenderComponent(_sfc_main$n, {
            text: _ctx.text,
            sdg: _ctx.color,
            picto: _ctx.picto,
            badgeName: _ctx.badgeName
          }, null, _parent));
        } else if (_ctx.type == "greenhouse") {
          _push(ssrRenderComponent(PopUpGreenhouse, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const PopUp_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/popUpItems/PopUp.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "KeyCard",
  __ssrInlineRender: true,
  props: {
    type: {},
    number: {},
    picto: {},
    title: {},
    color: {}
  },
  setup(__props) {
    const props = __props;
    const showModal = ref(false);
    const pictoLink = "url(../assets/medias/pictos/" + props.picto + ".svg)";
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--5233d2af": pictoLink
      } };
      _push(`<!--[-->`);
      if (_ctx.type != "") {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: "info",
          id: "show-modal",
          style: { "background-color": "var(--sdg" + _ctx.color + ")" }
        }, _cssVars))} data-v-7ea05ba1><h2 data-v-7ea05ba1>${ssrInterpolate(_ctx.number)}</h2><p data-v-7ea05ba1>${ssrInterpolate(_ctx.title)}</p></button>`);
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          style: { "background-color": "var(--sdg" + _ctx.color + ")" }
        }, _cssVars))} data-v-7ea05ba1><h2 data-v-7ea05ba1>${ssrInterpolate(_ctx.number)}</h2><p data-v-7ea05ba1>${ssrInterpolate(_ctx.title)}</p></button>`);
      }
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_sfc_main$l, {
          show: showModal.value,
          onClose: ($event) => showModal.value = false,
          subtitle: _ctx.title,
          title: _ctx.number,
          type: _ctx.type,
          color: _ctx.color,
          picto: _ctx.picto
        }, null, _parent));
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const KeyCard_vue_vue_type_style_index_0_scoped_7ea05ba1_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/KeyCard.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const KeyCard = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-7ea05ba1"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "KeyCardsGroup",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const data = getSdgData(props.id);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "keyCard_container" }, _attrs))} data-v-8adb3ebd>`);
      _push(ssrRenderComponent(KeyCard, {
        type: "number",
        title: "corsi",
        picto: "course",
        color: _ctx.id,
        number: (_a = unref(data)) == null ? void 0 : _a.course_units
      }, null, _parent));
      _push(ssrRenderComponent(KeyCard, {
        type: "number",
        picto: "publication",
        title: "pubblicazioni (Unibo)",
        color: _ctx.id,
        number: (_b = unref(data)) == null ? void 0 : _b.publications_Unibo
      }, null, _parent));
      _push(ssrRenderComponent(KeyCard, {
        type: "slide",
        picto: "project",
        title: "progetti",
        color: _ctx.id,
        number: (_c = unref(data)) == null ? void 0 : _c.project
      }, null, _parent));
      if (((_d = unref(data)) == null ? void 0 : _d.key_number) != "" && ((_e = unref(data)) == null ? void 0 : _e.keyNum_popUp) == "true") {
        _push(ssrRenderComponent(KeyCard, {
          type: "graph",
          picto: "keyNumber",
          title: (_f = unref(data)) == null ? void 0 : _f.keyNum_label,
          color: _ctx.id,
          number: (_g = unref(data)) == null ? void 0 : _g.key_number
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (((_h = unref(data)) == null ? void 0 : _h.key_number) != "" && ((_i = unref(data)) == null ? void 0 : _i.keyNum_popUp) == "false") {
        _push(ssrRenderComponent(KeyCard, {
          type: "",
          picto: "keyNumber",
          title: (_j = unref(data)) == null ? void 0 : _j.keyNum_label,
          color: _ctx.id,
          number: (_k = unref(data)) == null ? void 0 : _k.key_number
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const KeyCardsGroup_vue_vue_type_style_index_0_scoped_8adb3ebd_lang = "";
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/KeyCardsGroup.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const KeyCardsGroup = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-8adb3ebd"]]);
const Unibo_vue_vue_type_style_index_0_scoped_c30287b4_ang_css_lang = "";
const _sfc_main$i = {
  __name: "Unibo",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = route.params.id;
    const bubbleColor = "url(../assets/medias/bubble/colorBubble" + id + ".svg";
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--14d8ebc4": bubbleColor
      } };
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Bandeau, mergeProps({
        backLink: "/sdg/" + unref(id)
      }, _cssVars), null, _parent));
      _push(`<main${ssrRenderAttrs(_cssVars)} data-v-c30287b4><div class="title" data-v-c30287b4><h1 data-v-c30287b4>What Unibo do?</h1><p data-v-c30287b4> Discover what unibo do since 2016. If you want to see more about the number, tap on the case. </p></div>`);
      _push(ssrRenderComponent(KeyCardsGroup, { id: unref(id) }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Unibo.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Unibo = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-c30287b4"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "ActionCard",
  __ssrInlineRender: true,
  props: {
    image: {},
    subtitle: {},
    id: {},
    type: {},
    name: {}
  },
  setup(__props) {
    const props = __props;
    const showModal = ref(false);
    const publicPath = inject("publicPath");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="action-item" data-v-5d7a9544><button id="show-modal" style="${ssrRenderStyle({
        "background-color": "var(--sdg" + props.id + ")",
        "background-image": "url(" + unref(publicPath) + "/assets/medias/badges/icons/" + props.image + ".svg"
      })}" data-v-5d7a9544></button><p data-v-5d7a9544>${ssrInterpolate(_ctx.subtitle)}</p></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_sfc_main$l, {
          show: showModal.value,
          onClose: ($event) => showModal.value = false,
          title: "",
          type: "action",
          color: props.id,
          picto: props.image,
          badgeName: _ctx.name
        }, null, _parent));
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const ActionCard_vue_vue_type_style_index_0_scoped_5d7a9544_lang = "";
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ActionCard.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const ActionCard = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-5d7a9544"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ActionList",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const list = getSdgAdvices(props.id);
    const color2 = "var(--sdg" + props.id + ")";
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--2b401452": color2
      } };
      _push(`<ul${ssrRenderAttrs(mergeProps(_attrs, _cssVars))} data-v-a1f5e99a><!--[-->`);
      ssrRenderList(unref(list), (item) => {
        _push(`<li style="${ssrRenderStyle({ "border-color": color2 })}" data-v-a1f5e99a>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const ActionList_vue_vue_type_style_index_0_scoped_a1f5e99a_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ActionList.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const ActionList = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-a1f5e99a"]]);
const Student_vue_vue_type_style_index_0_scoped_55475ca8_lang = "";
const _sfc_main$f = {
  __name: "Student",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = route.params.id;
    const bubbleColor = "url(../assets/medias/bubble/colorBubble" + id + ".svg";
    const badgesActions = getBadgesBySDG(id);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--296a8299": bubbleColor
      } };
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Bandeau, mergeProps({
        backLink: "/sdg/" + unref(id)
      }, _cssVars), null, _parent));
      _push(`<main${ssrRenderAttrs(_cssVars)} data-v-55475ca8><h1 data-v-55475ca8>What we can do ?</h1>`);
      _push(ssrRenderComponent(ActionList, { id: unref(id) }, null, _parent));
      _push(`<div class="actions_containter" data-v-55475ca8><!--[-->`);
      ssrRenderList(unref(badgesActions), (badge) => {
        _push(ssrRenderComponent(ActionCard, {
          id: unref(id),
          image: badge.Image,
          subtitle: badge.Subtitle,
          type: badge.Type,
          name: badge.Badge
        }, null, _parent));
      });
      _push(`<!--]--></div></main><!--]-->`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Student.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Student = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-55475ca8"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "FormSelect",
  __ssrInlineRender: true,
  props: {
    options: {},
    placeholder: {},
    label: {},
    id: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><label${ssrRenderAttr("for", _ctx.id)} data-v-303cd224>${ssrInterpolate(_ctx.label)}</label><select${ssrRenderAttr("id", _ctx.id)} data-v-303cd224><option value="" data-v-303cd224>${ssrInterpolate(_ctx.placeholder)}</option><!--[-->`);
      ssrRenderList(_ctx.options, (option) => {
        _push(`<option${ssrRenderAttr("value", option)} data-v-303cd224>${ssrInterpolate(option)}</option>`);
      });
      _push(`<!--]--></select><!--]-->`);
    };
  }
});
const FormSelect_vue_vue_type_style_index_0_scoped_303cd224_lag_css_lang = "";
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/formItems/FormSelect.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Select = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-303cd224"]]);
const Profil_vue_vue_type_style_index_0_scoped_5a4f5c1f_ang_css_lang = "";
const _sfc_main$d = {
  __name: "Profil",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [
      "Bologna",
      "Cesena",
      "Rimini",
      "Forli",
      "Ravenna"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Bandeau, { backLink: "" }, null, _parent));
      _push(`<main data-v-5a4f5c1f><div class="title" data-v-5a4f5c1f><img data-v-5a4f5c1f><h1 data-v-5a4f5c1f>My profil</h1><form data-v-5a4f5c1f>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        label: "Name",
        placeholder: "Name",
        type: "text",
        id: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, {
        label: "Email address",
        placeholder: "Email",
        type: "mail",
        id: "email"
      }, null, _parent));
      _push(ssrRenderComponent(Select, {
        label: "Campus",
        options,
        placeholder: "Select your campus",
        id: "campus"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, {
        label: "Password",
        placeholder: "Password",
        type: "password",
        id: "psw"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, {
        label: "Personal code",
        placeholder: "code",
        type: "text",
        disabled: "",
        id: "code"
      }, null, _parent));
      _push(`</form></div><div class="btn-container" data-v-5a4f5c1f>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/flower/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Button, {
              name: "My Flower",
              type: "btn-grey"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Button, {
                name: "My Flower",
                type: "btn-grey"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, { to: "/badges/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Button, {
              name: "Badges",
              type: "btn-grey"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Button, {
                name: "Badges",
                type: "btn-grey"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main><!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Profil.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Profil = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-5a4f5c1f"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    name: {},
    sdg: {},
    subtitle: {},
    description: {},
    state: {},
    image: {}
  },
  setup(__props) {
    const showModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="show-modal" class="badge" data-v-c04a44d6><img${ssrRenderAttr("src", "../assets/medias/badges/" + _ctx.state + "/" + _ctx.image + ".svg")}${ssrRenderAttr("alt", _ctx.name)} data-v-c04a44d6></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_sfc_main$l, {
          show: showModal.value,
          onClose: ($event) => showModal.value = false,
          type: "badge",
          subtitle: _ctx.subtitle,
          title: _ctx.name,
          description: _ctx.description,
          color: _ctx.sdg,
          picto: _ctx.image
        }, null, _parent));
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const Badge_vue_vue_type_style_index_0_scoped_c04a44d6_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Badge.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-c04a44d6"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "BadgesList",
  __ssrInlineRender: true,
  props: {
    listBadges: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "badges-container" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.listBadges, (badge) => {
        _push(ssrRenderComponent(Badge, {
          name: badge.Badge,
          sdg: badge.SDG,
          subtitle: badge.Subtitle,
          description: badge.Description,
          state: badge.State,
          image: badge.Image
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const BadgesList_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BadgesList.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Badges",
  __ssrInlineRender: true,
  setup(__props) {
    const list = ref(getAllBadges());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Bandeau, { backLink: "/profil/" }, null, _parent));
      _push(`<main data-v-fd10ba1a><h1 data-v-fd10ba1a>Badges</h1><div class="filter" data-v-fd10ba1a><button class="filter-item" id="validated" data-v-fd10ba1a> Validated </button><button class="filter-item" id="unvalidated" data-v-fd10ba1a> Unvalidated </button><select class="filter-item" data-v-fd10ba1a><option value="all" data-v-fd10ba1a>all sdg</option><!--[-->`);
      ssrRenderList(17, (sdg) => {
        _push(`<option${ssrRenderAttr("value", sdg)} data-v-fd10ba1a>sdg ${ssrInterpolate(sdg)}</option>`);
      });
      _push(`<!--]--></select></div>`);
      _push(ssrRenderComponent(_sfc_main$b, { listBadges: list.value }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
});
const Badges_vue_vue_type_style_index_0_scoped_fd10ba1a_ang_css_lang = "";
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Badges.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Badges = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-fd10ba1a"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Plante",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "100%",
        height: "100%",
        viewBox: "0 0 126 104",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "xml:space": "preserve",
        "xmlns:serif": "http://www.serif.com/",
        style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "1.5" }
      }, _attrs))}><g transform="matrix(1,0,0,1,-804.814,-145.581)"><g id="flower"><g transform="matrix(1.33962,0.129244,-0.129244,1.33962,-33.3001,-752.291)"><g transform="matrix(2.80576,-0.391258,0.401855,2.88175,-1928.5,-904.502)"><path d="M851.971,660.013C848.166,650.446 850.689,643.644 856.469,638.265C862.278,643.818 861.73,655.371 855.814,659.718L851.971,660.013Z" style="${ssrRenderStyle({ "fill": "rgb(38,155,71)" })}"></path></g><g transform="matrix(2.81778,0.292388,-0.300307,2.89409,-1466.94,-1484.03)"><path d="M851.971,660.013C848.166,650.446 850.689,643.644 856.469,638.265C862.278,643.818 861.73,655.371 855.814,659.718L851.971,660.013Z" style="${ssrRenderStyle({ "fill": "rgb(62,175,73)" })}"></path></g><g transform="matrix(2.81778,0.292388,-0.300307,2.89409,-1466.94,-1484.03)"><path d="M836.268,644.164C842.939,644.296 850.391,650.859 851.971,660.013L846.292,661.694C838.23,657.846 836.024,651.523 836.268,644.164Z" style="${ssrRenderStyle({ "fill": "rgb(70,118,59)" })}"></path></g><g transform="matrix(2.81778,0.292388,-0.300307,2.89409,-1466.94,-1484.03)"><path d="M853.306,659.911C855.061,657.35 855.879,654.266 855.973,650.779" style="${ssrRenderStyle({ "fill": "none", "stroke": "rgb(221,214,203)", "stroke-width": "0.13px" })}"></path></g><g transform="matrix(2.67493,-1.14486,1.14486,2.67493,-2306.07,-124.132)"><path d="M853.84,659.643C855.068,656.409 856.181,652.073 858,649.823" style="${ssrRenderStyle({ "fill": "none", "stroke": "rgb(221,214,203)", "stroke-width": "0.13px" })}"></path></g><g transform="matrix(2.81778,0.292388,-0.300307,2.89409,-1466.94,-1484.03)"><path d="M843.708,654.652C845.465,657.314 847.51,659.336 850.161,660.013" style="${ssrRenderStyle({ "fill": "none", "stroke": "rgb(221,214,203)", "stroke-width": "0.13px" })}"></path></g></g><path d="M804.814,249.086L930.258,249.464C928.235,244.866 926.775,239.953 921.152,237.37C918.487,237.056 916.299,237.96 914.808,240.647C912.663,236.883 911.054,232.686 904.496,232.507C901.451,233.064 899.581,234.328 899.347,236.577C898.004,234.704 895.823,233.541 892.418,233.418C888.745,233.249 885.799,234.356 884.232,237.887C881.652,234.857 877.676,232.269 870.359,230.74C865.875,229.72 861.558,229.814 857.953,234.675C854.591,232.34 850.688,230.424 844.474,230.292C839.715,230.225 835.436,231.244 832.492,235.29C827.463,233.507 822.696,231.129 814.7,236.095C810.014,239.208 806.594,243.429 804.814,249.086Z" style="${ssrRenderStyle({ "fill": "rgb(126,126,125)" })}"></path></g></g></svg>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/customFlower/Plante.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Pot",
  __ssrInlineRender: true,
  props: {
    color: {}
  },
  setup(__props) {
    const props = __props;
    const Pot2 = document.getElementById("pot");
    if (Pot2 != null) {
      if (props.color != null) {
        Pot2.style.fill = "var(--sdg" + props.color + ")";
      } else {
        Pot2.style.fill = "var(--sdg12)";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "100%",
        height: "100%",
        viewBox: "0 0 181 124",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "xml:space": "preserve",
        "xmlns:serif": "http://www.serif.com/",
        style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "1.5" }
      }, _attrs))} data-v-3ccfca6f><g transform="matrix(1,0,0,1,-773.551,-247.684)" data-v-3ccfca6f><g id="pot" data-v-3ccfca6f><g transform="matrix(1,0,0,1,-1368.21,-925.016)" data-v-3ccfca6f><path d="M2160,1200C2160,1200 2158.39,1295.82 2184,1296C2212.65,1296.2 2252.08,1296.45 2280,1296C2305.61,1295.59 2304,1200 2304,1200L2160,1200Z" style="${ssrRenderStyle({ "stroke": "rgb(126, 126, 125)", "stroke-width": "0.6px" })}" data-v-3ccfca6f></path></g><g transform="matrix(1,0,0,1,-1368.21,-925.016)" data-v-3ccfca6f><path d="M2148,1176C2140.08,1177.13 2140.08,1198.87 2148,1200C2176,1204 2288,1204 2316,1200C2323.92,1198.87 2323.92,1177.13 2316,1176C2288,1172 2176,1172 2148,1176Z" style="${ssrRenderStyle({ "stroke": "rgb(126, 126, 125)", "stroke-width": "0.6px" })}" data-v-3ccfca6f></path></g></g></g></svg>`);
    };
  }
});
const Pot_vue_vue_type_style_index_0_scoped_3ccfca6f_lang = "";
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/customFlower/Pot.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Pot = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-3ccfca6f"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "FlowerItem",
  __ssrInlineRender: true,
  props: {
    color: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flower" }, _attrs))} data-v-e4a1761f>`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(ssrRenderComponent(Pot, { color: _ctx.color }, null, _parent));
      _push(`</div>`);
    };
  }
});
const FlowerItem_vue_vue_type_style_index_0_scoped_e4a1761f_lang = "";
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/customFlower/FlowerItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Flower$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-e4a1761f"]]);
const Flower_vue_vue_type_style_index_0_scoped_0a177f22_ang_css_lang = "";
const _sfc_main$6 = {
  __name: "Flower",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Bandeau, { backLink: "/profil/" }, null, _parent));
      _push(`<main data-v-0a177f22><h1 data-v-0a177f22>My flower</h1>`);
      _push(ssrRenderComponent(Flower$1, null, null, _parent));
      _push(`<div class="form-flower sdgLine" data-v-0a177f22><form data-v-0a177f22><div class="form-item" data-v-0a177f22>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        label: "Name",
        type: "text",
        placeholder: "flower name",
        id: "name"
      }, null, _parent));
      _push(`</div><div class="form-item" data-v-0a177f22><label data-v-0a177f22>Flower pot color</label><div class="color" data-v-0a177f22><!--[-->`);
      ssrRenderList(17, (id) => {
        _push(`<div class="radio" data-v-0a177f22><input class="colorItem" type="radio" name="color"${ssrRenderAttr("value", id)}${ssrRenderAttr("id", id)} data-v-0a177f22><label${ssrRenderAttr("for", id)} data-v-0a177f22><span style="${ssrRenderStyle({ "background-color": "var(--sdg" + id + ")" })}" data-v-0a177f22></span> ${ssrInterpolate(unref(getColorName)(id))}</label></div>`);
      });
      _push(`<!--]--></div></div><div class="form-item" data-v-0a177f22><label for="type " data-v-0a177f22>flower type</label><div class="type" data-v-0a177f22><!--[-->`);
      ssrRenderList(5, (plant) => {
        _push(`<div class="radio" data-v-0a177f22><input class="typeItem" type="radio" name="type"${ssrRenderAttr("value", plant)}${ssrRenderAttr("id", plant + "plante")} data-v-0a177f22><label${ssrRenderAttr("for", plant + "plante")} data-v-0a177f22><span style="${ssrRenderStyle({ "background-color": "#FFF" })}" data-v-0a177f22></span></label></div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(Button, {
        name: "validate",
        type: "btn-outline"
      }, null, _parent));
      _push(`</form></div></main><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Flower.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Flower = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0a177f22"]]);
const SignIn_vue_vue_type_style_index_0_scoped_f98653c9_ang_css_lang = "";
const _sfc_main$5 = {
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-f98653c9><h1 data-v-f98653c9>Welcome Back</h1><form data-v-f98653c9>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        placeholder: "Email",
        type: "mail"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, {
        placeholder: "Password",
        type: "password"
      }, null, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: "#",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Forgotten password ?`);
          } else {
            return [
              createTextVNode("Forgotten password ?")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/home/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Button, {
              name: "Sign in",
              type: "btn-unibo"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Button, {
                name: "Sign in",
                type: "btn-unibo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="link-container" data-v-f98653c9><p class="link" data-v-f98653c9>Not account yet?</p> `);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/signup/",
        class: "sign-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign up`);
          } else {
            return [
              createTextVNode(" Sign up")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/SignIn.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SignIn = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f98653c9"]]);
const SignUp_vue_vue_type_style_index_0_scoped_e03c296d_ang_css_lang = "";
const _sfc_main$4 = {
  __name: "SignUp",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [
      "Bologna",
      "Cesena",
      "Rimini",
      "Forli",
      "Ravenna"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-e03c296d><div class="container" data-v-e03c296d><h1 data-v-e03c296d>Create account</h1><form data-v-e03c296d>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        placeholder: "Name",
        type: "text"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, {
        placeholder: "Email",
        type: "mail"
      }, null, _parent));
      _push(ssrRenderComponent(Select, {
        options,
        placeholder: "Select your campus"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, {
        placeholder: "Password",
        type: "password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, {
        placeholder: "Confirm password",
        type: "password"
      }, null, _parent));
      _push(`<div class="checkbox-container" data-v-e03c296d><input type="checkbox" id="policies" value="policies" required data-v-e03c296d><label for="policies" data-v-e03c296d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "#",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`I accept all the policies and therms`);
          } else {
            return [
              createTextVNode("I accept all the policies and therms")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label></div></form>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/home" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Button, {
              name: "Sign up",
              type: "btn-unibo"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Button, {
                name: "Sign up",
                type: "btn-unibo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="link-container" data-v-e03c296d><p class="link" data-v-e03c296d>Always an account?</p> `);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/signin/",
        class: "sign-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign in`);
          } else {
            return [
              createTextVNode(" Sign in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/SignUp.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SignUp = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e03c296d"]]);
const Connexion_vue_vue_type_style_index_0_scoped_65d72f81_lang = "";
const _sfc_main$3 = {
  __name: "Connexion",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-65d72f81><div class="header" data-v-65d72f81><h1 data-v-65d72f81>AlmAware</h1></div><div class="footer sdgLine" data-v-65d72f81>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/signin/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Button, {
              name: "Sign in",
              type: "btn-unibo"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Button, {
                name: "Sign in",
                type: "btn-unibo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, { to: "/signup/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Button, {
              name: "Sign up",
              type: "btn-unibo-outline"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Button, {
                name: "Sign up",
                type: "btn-unibo-outline"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Connexion.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Connexion = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-65d72f81"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Kiosk",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = route.params.id;
    const background_url = "url(../assets/medias/sdgs_background/sdg" + id + ".jpg)";
    const icon_url = "url(../assets/medias/sdgs_icons/sdg" + id + ".png)";
    const color2 = "var(--sdg" + id + ")";
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _cssVars = { style: {
        "--24d154bd": color2,
        "--7d99f10f": icon_url
      } };
      _push(`<main${ssrRenderAttrs(mergeProps(_attrs, _cssVars))} data-v-3bba1c3c><div class="test" data-v-3bba1c3c></div>`);
      _push(ssrRenderComponent(Menu, null, null, _parent));
      _push(`<div class="sdg-container" data-v-3bba1c3c><div class="sdg-item" style="${ssrRenderStyle({ "background-image": background_url })}" data-v-3bba1c3c><p data-v-3bba1c3c>${ssrInterpolate((_a = unref(getSdgData)(unref(id))) == null ? void 0 : _a.img_author)}</p></div><h1 data-v-3bba1c3c>${ssrInterpolate(unref(id))} - ${ssrInterpolate(unref(getSdgTitle)(unref(id)))}</h1><p class="kiosk-desc" data-v-3bba1c3c><span style="${ssrRenderStyle({ color: color2 })}" data-v-3bba1c3c>${ssrInterpolate((_b = unref(getSdgData)(unref(id))) == null ? void 0 : _b.subtitle)}</span> ${ssrInterpolate((_c = unref(getSdgData)(unref(id))) == null ? void 0 : _c.desc_kiosk)}</p>`);
      _push(ssrRenderComponent(SdgKeyNumberGroup, {
        id: unref(id).toString()
      }, null, _parent));
      _push(`</div><div class="actions sdgLineVertical" data-v-3bba1c3c><div data-v-3bba1c3c><h2 data-v-3bba1c3c>Cosa fa UNIBO?</h2><p data-v-3bba1c3c> Scopri cosa fa UNIBO dal 2016. Se vuoi vedere di più sul numero, tocca la carta. </p>`);
      _push(ssrRenderComponent(KeyCardsGroup, {
        id: unref(id).toString()
      }, null, _parent));
      _push(`</div><div data-v-3bba1c3c><h2 data-v-3bba1c3c>Cosa puoi fare tu?</h2>`);
      _push(ssrRenderComponent(ActionList, {
        id: unref(id).toString()
      }, null, _parent));
      _push(`</div></div></main>`);
    };
  }
});
const Kiosk_vue_vue_type_style_index_0_scoped_3bba1c3c_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Kiosk.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Kiosk = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3bba1c3c"]]);
const _sfc_main$1 = {
  data() {
    return {};
  },
  mounted() {
    const width2 = 800;
    const height2 = 500;
    const data = [
      { date: "2015", amount: 1381404 },
      { date: "2016", amount: 824067 },
      { date: "2017", amount: 422130 },
      { date: "2018", amount: 314079 },
      { date: "2019", amount: 310544 },
      { date: "2020", amount: 265730 },
      { date: "2021", amount: 293996 }
    ];
    const svg = d3.select("svg").attr("width", width2).attr("height", height2);
    const g = svg.append("g");
    const x = d3.scaleTime().domain(
      d3.extent(data, function(d) {
        return d.date;
      })
    ).rangeRound([0, width2]);
    const y = d3.scaleLinear().domain(
      d3.extent(data, function(d) {
        return d.amount;
      })
    ).rangeRound([height2, 0]);
    const line = d3.line().x(function(d) {
      return x(d.date);
    }).y(function(d) {
      return y(d.amount);
    });
    g.append("g").attr("transform", "translate(0," + height2 + ")").call(d3.axisBottom(x));
    g.append("g").call(d3.axisLeft(y)).append("text").attr("fill", "#000").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", "0.71em").attr("text-anchor", "end").text("Price ($)");
    g.append("path").datum(data).attr("fill", "none").attr("stroke", "steelblue").attr("stroke-width", 1.5).attr("d", line);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h1>test</h1><svg></svg><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/graphs/lineChart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const lineChart = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Greenhouse",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    ref(false);
    const listOfFlower = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    const listRow1 = ref([]);
    const listRow2 = ref([]);
    const listRow3 = ref([]);
    console.log(listOfFlower.length);
    for (let i = 0; i < 4; i++) {
      if (listOfFlower[i] != null) {
        switch (i % 2) {
          case 0:
            listRow1.value.push(listOfFlower[i]);
            break;
          case 1:
            listRow2.value.push(listOfFlower[i]);
            break;
        }
      }
    }
    for (let i = 4; i < listOfFlower.length; i++) {
      switch (i % 3) {
        case 0:
          listRow3.value.push(listOfFlower[i]);
          break;
        case 1:
          listRow1.value.push(listOfFlower[i]);
          break;
        case 2:
          listRow2.value.push(listOfFlower[i]);
          break;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-d7523f97>`);
      _push(ssrRenderComponent(Menu, null, null, _parent));
      _push(`<div class="greenhouse" data-v-d7523f97><div class="shelf-container" data-v-d7523f97><!--[-->`);
      ssrRenderList(3, (row) => {
        _push(`<div class="shelf" data-v-d7523f97>`);
        if (row == 1) {
          _push(`<!--[-->`);
          ssrRenderList(listRow1.value, (element) => {
            _push(ssrRenderComponent(Flower$1, null, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (row == 2) {
          _push(`<!--[-->`);
          ssrRenderList(listRow2.value, (element) => {
            _push(ssrRenderComponent(Flower$1, null, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (row == 3) {
          _push(`<!--[-->`);
          ssrRenderList(listRow3.value, (element) => {
            _push(ssrRenderComponent(Flower$1, null, null, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="podium" data-v-d7523f97><div id="second-item" data-v-d7523f97>`);
      _push(ssrRenderComponent(Flower$1, null, null, _parent));
      _push(`</div><div id="first-item" data-v-d7523f97>`);
      _push(ssrRenderComponent(Flower$1, null, null, _parent));
      _push(`</div><div id="third-item" data-v-d7523f97>`);
      _push(ssrRenderComponent(Flower$1, null, null, _parent));
      _push(`</div></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_sfc_main$l, {
          show: showModal.value,
          onClose: ($event) => showModal.value = false,
          type: "greenhouse",
          color: "var(--unibo)",
          text: "Flower"
        }, null, _parent));
      }, "body", false, _parent);
      _push(`<button class="mascot" id="show-modal" data-v-d7523f97></button>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_sfc_main$l, {
          show: showModal.value,
          onClose: ($event) => showModal.value = false,
          type: "greenhouse"
        }, null, _parent));
      }, "body", false, _parent);
      _push(`</main>`);
    };
  }
});
const Greenhouse_vue_vue_type_style_index_0_scoped_d7523f97_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Greenhouse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GreenhouseVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7523f97"]]);
const Router = createRouter({
  base: "./AlmaIdea/",
  history: createWebHistory("/AlmaIdea/"),
  routes: [
    {
      path: "/",
      component: _sfc_main$Y,
      children: [
        {
          path: "home",
          name: "home",
          component: Home
        },
        {
          path: "sdg/:id",
          name: "sdg",
          component: Sdg
        },
        {
          path: "sdg/:id/unibo",
          name: "unibo",
          component: Unibo
        },
        {
          path: "sdg/:id/student",
          name: "student",
          component: Student
        },
        {
          path: "profil",
          name: "profil",
          component: Profil
        },
        {
          path: "badges",
          name: "badges",
          component: Badges
        },
        {
          path: "flower",
          name: "flower",
          component: Flower
        }
      ]
    },
    {
      path: "/signin/",
      name: "signin",
      component: SignIn
    },
    {
      path: "/signup/",
      name: "signup",
      component: SignUp
    },
    {
      path: "",
      name: "connexion",
      component: Connexion
    },
    {
      path: "/kiosk/:id",
      name: "kiosk",
      component: Kiosk
    },
    {
      path: "/greenhouse",
      name: "greenhouse",
      component: GreenhouseVue
    },
    {
      path: "/test",
      name: "test",
      component: lineChart
    }
  ]
});
const app = ViteSSG(App);
app.use(Router);
app.use(Vue3Mq, {
  breakpoints: {
    mobile: 0,
    tablet: 450,
    laptop: 1250,
    desktop: Infinity
  }
});
app.provide("publicPath", window.location.origin + ({}.NODE_ENV === "production" ? "/AlmaIdea/" : "/"));
app.mount("#app");
export {
  app
};

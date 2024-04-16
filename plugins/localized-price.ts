import type {Directive, DirectiveBinding} from "vue";

export const vLocalizedPrice: Directive<any, string | number> = {
  mounted(el, {value}: DirectiveBinding) {
    const locale = globalThis?.navigator?.language;
    const formatter = new Intl.NumberFormat(locale)
    el.textContent = formatter.format(+value);
  }
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('localized-price', vLocalizedPrice)
})
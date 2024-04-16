import type {Directive, DirectiveBinding} from "vue";

export const vLocalizedTime: Directive<any, Date> = {
  mounted(el, {value}) {
    const locale = globalThis?.navigator?.language ?? 'en';
    const formatter = new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: '2-digit',
    });

    el.textContent = formatter.format(value);
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('localized-time', vLocalizedTime)
})
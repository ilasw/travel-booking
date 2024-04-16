import type {Directive, DirectiveBinding} from "vue";

export const vLocalizedTime: Directive<any, Date> = {
  mounted(el, binding) {
    el.textContent = binding.value.toLocaleDateString();
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('localized-time', vLocalizedTime)
})
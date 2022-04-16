import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Divider from "primevue/divider";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";
import StyleClass from "primevue/styleclass";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Divider", Divider);
  nuxtApp.vueApp.directive("ripple", Ripple);
  nuxtApp.vueApp.directive("badge", BadgeDirective);
  nuxtApp.vueApp.directive("styleclass", StyleClass);
  //other components that you need
});

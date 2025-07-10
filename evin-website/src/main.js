import "./assets/css/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/router";
import { createI18n } from "vue-i18n";
import nl from "./locales/nl.json";
import en from "./locales/en.json";

const i18n = createI18n({
  legacy: false,
  locale: "nl",
  fallbackLocale: "nl",
  messages: { en, nl },
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");

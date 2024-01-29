import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
// Firebase
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./config/firebase";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
// vuertify
const vuetify = createVuetify({
  components,
  directives,
});

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});
app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");

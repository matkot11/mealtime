import { createApp } from "vue";
import { createPinia } from "pinia";
import vSelect from "vue-select";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";
import "vue-select/dist/vue-select.css";
import "./assets/select.css";

const app = createApp(App);

app.component("VSelect", vSelect);

app.use(createPinia());
app.use(router);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@popperjs/core";
import "bootstrap";

// const isDebug_mode = process.env.NODE_ENV !== "production";

// Vue.config.debug = isDebug_mode;
// Vue.config.devtools = isDebug_mode;

createApp(App)
    .use(store)
    .use(router)
    .mount("#app");

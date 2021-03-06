import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/all.scss";

createApp(App)
    .use(store)
    .use(router)
    .mount("#app");

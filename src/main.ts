import { createApp } from "vue";
import App from "./App.vue";
import { Toast } from "vant";
import "normalize.css";
import router from "./router";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $toast: typeof Toast;
  }
}

createApp(App).use(Toast).use(router).mount("#app");

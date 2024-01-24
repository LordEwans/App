import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faDiscord,
  faEthereum,
  faGithubAlt,
  faLinkedin,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(faXTwitter, faLinkedin, faLinkedinIn, faDiscord, faYoutube, faLinkedinIn, faGithubAlt, faEthereum);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});

<template>
  <div class="container">
    <div class="columns is-centered">
      <b-button v-on:click="loadScriptFromURL(s, $event)" :type="randomColors()" v-for="s in SCRIPTS" :key="s.name">{{
        `Load scripts from ${s.name}`
      }}</b-button>
    </div>
    <div class="columns">
      <div id="postscribe" class="column is-full"></div>
    </div>
  </div>
</template>

<script>
import postscribe from 'postscribe';

const SCRIPTS = [
  {
    name: 'github',
    src: 'https://gist.github.com/misostack/bc7e8be641307970a8f8ea4fd487aa9a.js',
    isExternal: true,
  },
];
const COLORS = ['is-primary', 'is-success', 'is-danger', 'is-info', 'is-dark'];
const loadScripts = ({ src, errorHandler, successHandler }, isExternal = false) => {
  if (isExternal) {
    document.querySelector('#postscribe').innerHTML = '';
    console.log(`<script src="${src}"><\\/script>`);
    // eslint-disable-next-line no-useless-escape
    postscribe('#postscribe', `<script src="${src}"><\/script>`, {
      done: successHandler,
    });
    return;
  }
  let scriptElement = document.createElement('script');
  // error
  scriptElement.onerror = errorHandler;
  // onload
  scriptElement.onload = successHandler;
  // append to body
  document.body.appendChild(scriptElement);
  // attach srcc
  scriptElement.src = src;
};
export default {
  name: 'VuejsExamplesHome',

  components: {},

  directives: {},

  computed: {
    SCRIPTS: function () {
      return SCRIPTS;
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    loadScriptFromURL({ src, isExternal }, event) {
      event.preventDefault();
      console.log(event.target);
      loadScripts(
        {
          src,
          errorHandler: () => {
            this.toastError(`Can not load your script from ${src}!`);
          },
          successHandler: () => {
            this.toastSuccess(`Loaded ${src}!`);
          },
        },
        isExternal,
      );
    },
    toastSuccess(message) {
      this.$buefy.toast.open({
        message: message,
        type: 'is-success',
      });
    },
    toastError(errorMessage) {
      this.$buefy.toast.open({
        duration: 1000,
        message: errorMessage,
        position: 'is-bottom',
        type: 'is-danger',
      });
    },
    randomColors() {
      return COLORS[Math.floor(Math.random() * COLORS.length)];
    },
  },
};
</script>

<style lang="scss">
#postscribe {
  min-height: 100vh;
  .gist {
    min-height: 100% !important;
  }
}
</style>

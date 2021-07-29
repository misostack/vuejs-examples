<template>
  <div class="container">
    <header>
      <b-navbar>
        <b-navbar-item slot="brand" tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
        <template #start>
          <b-navbar-item v-bind:href="BASE_URL">Home</b-navbar-item>
          <b-navbar-dropdown
            v-for="(menuGroup, menuGroupKey) in Object.keys(MENU_ITEMS)"
            :key="menuGroupKey"
            v-bind:label="menuGroup"
          >
            <b-navbar-item
              v-for="(menuItem, menuItemKey) in MENU_ITEMS[menuGroup]"
              :key="menuItemKey"
              tag="router-link"
              :to="{ path: menuItem.path }"
              v-text="menuItem.name"
            ></b-navbar-item>
          </b-navbar-dropdown>
        </template>
        <template #end>
          <b-navbar-item tag="div">
            <a class="button is-danger"> Log out </a>
          </b-navbar-item>
        </template>
      </b-navbar>
    </header>
    <main>
      <section>
        <div class="columns is-centered">
          <div class="column">
            <h1 v-html="ROUTE_NAME"></h1>
          </div>
        </div>
      </section>
      <section>
        <transition :name="transitionName">
          <router-view></router-view>
        </transition>
      </section>
    </main>
    <footer>
      <p>Footer</p>
    </footer>
  </div>
</template>

<script>
import MENU_ITEMS from '@/core/menu';

export default {
  name: 'VuejsExamplesDefaultlayout',
  computed: {
    MENU_ITEMS() {
      return MENU_ITEMS;
    },
    BASE_URL() {
      return process.env.BASE_URL;
    },
    ROUTE_NAME() {
      return `<strong>${this.$route.name.toUpperCase()}</strong>`;
    },
  },

  components: {},

  directives: {},

  data() {
    return {
      transitionName: 'fade',
    };
  },

  mounted() {},

  methods: {},

  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    },
  },
};
</script>

<style lang="scss" scoped></style>

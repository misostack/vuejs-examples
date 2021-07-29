<template>
  <div class="columns is-centered">
    <div class="column is-4">
      <product-card></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'VuejsExamplesProductcardpage',

  components: {
    ProductCard,
  },

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>

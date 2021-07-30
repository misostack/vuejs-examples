<template>
  <div class="columns is-centered">
    <div class="column is-4">
      <product-card v-bind:product="product"></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import productDTO from './product.js';

export default {
  name: 'VuejsExamplesProductcardpage',

  components: {
    ProductCard,
  },

  computed: {
    product() {
      return productDTO;
    },
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

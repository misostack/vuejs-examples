<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img v-bind:src="imageURL(product.image)" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="is-flex">
          <figure v-for="(colorImage, key) in product.colorImages" :key="key" class="column image is-48x48">
            <img v-bind:src="imageURL(colorImage)" alt="Placeholder image" />
          </figure>
        </div>
      </div>

      <div class="content">
        <h3 v-text="product.name"></h3>
        <div class="is-flex">
          <span class="material-icons">thumb_up</span>
          <span>{{ product.totalRating }}</span>

          <span class="material-icons">sell</span>
          <span>{{ product.totalSales }}</span>
        </div>
        <ratings v-bind:points="product.ratingPoints"></ratings>
        <div>
          <span class="material-icons">shopping_cart</span><strong v-html="'<span>Price : </span>'"></strong
          >{{ product.salePrice | currency }} / {{ product.unit }}
        </div>
        <div class="is-flex">
          <span class="material-icons">local_shipping</span>
          <span v-if="product.shippingPrice"> {{ product.shippingPrice | currency }}</span>
          <span v-if="!product.shippingPrice">Free ship</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const CURRENCY = 'VND';
import Ratings from '@/components/Ratings.vue';
export default {
  name: 'VuejsExamplesProductcard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: { Ratings },

  directives: {},

  filters: {
    currency(value) {
      if (!value) return '';
      const formatValue = new Intl.NumberFormat().format(value);
      return `${formatValue} ${CURRENCY}`;
    },
  },

  created() {},

  data() {
    return {};
  },

  mounted() {},

  methods: {
    imageURL(name) {
      return require(`@/assets/images/${name}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>

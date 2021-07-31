<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img v-bind:src="imageURL(product.image)" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <p>Number of products in your cart: {{ numberOfCartProducts }}</p>
      <div class="columns">
        <div v-for="(item, idx) in cartData" :key="idx" class="column is-4">
          <h5>Name: {{ item.product.name }}</h5>
          <p>Price:{{ item.product.salePrice }}</p>
        </div>
      </div>
      <div class="media">
        <div class="is-flex">
          <figure v-for="(colorImage, key) in product.colorImages" :key="key" class="column image is-48x48">
            <img v-bind:src="imageURL(colorImage)" alt="Placeholder image" />
          </figure>
        </div>
      </div>
      <h1>Render 5 times</h1>
      <p>Title: {{ title }}</p>
      <p>Color: {{ color }}</p>
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
        <b-button type="is-link" @click="addToCart">Add to cart</b-button>
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

  computed: {
    numberOfCartProducts() {
      return this.cartData.length;
    },
  },

  data() {
    return {
      cartData: [],
      title: new Date(),
      color: Math.floor(Math.random() * 5),
    };
  },

  watch: {
    numberOfCartProducts(newValue, oldValue) {
      console.log('oldValue:', oldValue);
      console.log('newValue:', newValue);
    },
  },
  beforeUpdate() {
    console.log('all the data changes happened and before the output get updated.');
  },
  updated() {
    console.log('The output get updated.');
  },

  mounted() {},

  methods: {
    imageURL(name) {
      return require(`@/assets/images/${name}`);
    },
    addToCart() {
      setTimeout(() => {
        this.title = new Date();
      }, 100);
      setTimeout(() => {
        this.color = Math.floor(Math.random() * 5);
      }, 100);
      fetch('https://misostack.herokuapp.com/cities')
        .then((response) => response.json())
        .then((data) => (this.title = data.length));
      fetch('https://misostack.herokuapp.com/cities')
        .then((response) => response.json())
        .then((data) => (this.color = data.length));
      Promise.resolve(Math.floor(Math.random() * 5)).then((color) => (this.color = color));

      this.cartData.push({
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>

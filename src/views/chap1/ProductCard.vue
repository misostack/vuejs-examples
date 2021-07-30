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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VuejsExamplesProductcard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {},

  directives: {},

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

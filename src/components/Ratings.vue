<template>
  <div class="is-flex">
    <span v-for="(star, idx) in ratingStars" :key="idx" class="material-icons" v-text="star"></span>
  </div>
</template>

<script>
export default {
  name: 'VuejsExamplesRatings',

  props: ['points'],

  components: {},

  directives: {},
  computed: {
    ratingStars() {
      // eslint-disable-next-line no-unused-vars
      const MAX_STARS = 5;

      const calculatedStars = Math.min(MAX_STARS, Math.floor(this.points / 2));

      return Array.from(Array(5).keys()).map((v, idx) => {
        if (idx + 1 <= calculatedStars) {
          return 'star';
        }
        return 'star_outline';
      });
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>

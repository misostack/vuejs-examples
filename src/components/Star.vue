<template>
  <div :class="[{ star: true, half: isHalf }]">
    <span class="material-icons star-liquid">star</span>
    <span class="material-icons star-outline">star_outline</span>
  </div>
</template>

<script>
export default {
  name: 'VuejsExamplesStar',

  props: ['type'],

  components: {},

  directives: {},
  computed: {
    isHalf() {
      return this.type === 'half';
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.star {
  position: relative;
  overflow: hidden;
  &.half {
    width: 12px;
  }
  .star-outline {
    transform: rotate(180deg);
  }
}
</style>

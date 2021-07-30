<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <section>
    <div class="columns is-centered">
      <div class="column"><h1>The calculator</h1></div>
      <div class="column">{{ `${x} ${operator} ${y}` }}</div>
    </div>
    <div class="columns is-centered">
      <div class="column is-2 control">
        <input class="input" type="text" name="x" v-model="x" placeholder="X" />
      </div>
      <div class="column is-2 control">
        <select class="input" name="operator" v-model="operator">
          <option value="">Operator</option>
          <option v-for="op in operators" :value="op.value" :key="op.name">{{ op.name }}</option>
        </select>
      </div>
      <div class="column is-2 control">
        <input class="input" type="text" name="y" v-model="y" placeholder="Y" />
      </div>
      <div class="column is-2 control">
        <input :disabled="true" class="input" type="text" name="y" :value="result" placeholder="Z" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    operators() {
      return [
        { name: '+', value: 'addition' },
        { name: '-', value: 'substraction' },
        { name: '*', value: 'multiplication' },
        { name: '/', value: 'division' },
      ];
    },
    result() {
      const { x, y, operator } = this;
      const rs = this.calculation(parseFloat(x), parseFloat(y), operator);
      return rs === null ? '' : rs.toFixed(2);
    },
  },
  data() {
    return {
      x: '',
      y: '',
      operator: '',
    };
  },
  methods: {
    calculation(x, y, operator) {
      if (isNaN(x) || isNaN(y) || operator === '') {
        return null;
      }

      if (operator === 'addition') {
        return x + y;
      }
      if (operator === 'substraction') {
        return x - y;
      }
      if (operator === 'multiplication') {
        return x * y;
      }
      if (operator === 'division') {
        return x / y;
      }
      return null;
    },
  },
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style></style>

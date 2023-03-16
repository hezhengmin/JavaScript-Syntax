<template lang="">
  <div class="first">
    <h1 v-bind:style="titleStyle">第一層</h1>
    <SecondLayer />
  </div>
</template>
<script>
import SecondLayer from "./SecondLayer";
export default {
  name: "FirstLayer",
  data() {
    return {
      fontSize: 2
    };
  },
  computed: {
    titleStyle() {
      return { color: "red", fontSize: `${this.fontSize}em` };
    }
  },
  components: {
    SecondLayer
  },
  methods: {
    changeFontSize() {
      this.fontSize += 0.1;
    }
  }
};
</script>
<style lang="">
.first {
  padding: 50px;
  background: #ffcece;
}
</style>

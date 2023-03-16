<template lang="">
  <div class="third">
    <h1>第三層</h1>
    <p>{{ myName }}</p>
    <button @click="changeFirstBgColor">變更背景</button>
  </div>
</template>
<script>
export default {
  name: "ThirdLayer",
  inject: ["myName", "changeBgColor"],
  methods: {
    //變更 App.vue 背景
    changeFirstBgColor() {
      this.changeBgColor();
    }
  },
  created() {
    console.log(this.myName); // injected value
  }
};
</script>
<style lang="">
.third {
  padding: 50px;
  background: #a8b5f4;
}
</style>

<template lang="">
  <div class="second">
    <h1>第二層</h1>
    <ThirdLayer />
  </div>
</template>
<script>
import ThirdLayer from "./ThirdLayer";
export default {
  name: "SecondLayer",
  components: {
    ThirdLayer
  }
};
</script>
<style lang="">
.second {
  padding: 50px;
  background: #7ddea0;
}
</style>

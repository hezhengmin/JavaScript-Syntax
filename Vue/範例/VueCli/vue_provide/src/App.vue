<template>
  <div id="app">
    <div :class="theme">
      <button @click="changeFontSize">"第一層"字型變大</button>
      <FirstLayer ref="first" />
    </div>
  </div>
</template>
<script>
import FirstLayer from "./components/FirstLayer";
export default {
  name: "App",
  data() {
    return {
      myName: "ming",
      theme: "theme"
    };
  },
  provide() {
    return {
      myName: this.myName,
      changeBgColor: this.changeBgColor
    };
  },
  components: {
    FirstLayer
  },
  methods: {
    changeBgColor() {
      console.log("changeBgColor");
      this.theme = "dark-theme";
    },
    changeFontSize() {
      this.$refs.first.changeFontSize();
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  text-align: center;
}

.theme {
  padding: 40px;
}

.dark-theme {
  color: navy;
  background: black;
  padding: 40px;
}
</style>

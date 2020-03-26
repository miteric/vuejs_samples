<template>
  <div id="app">
    <MyNavibar />
    <router-view :key="$route.path" />
  </div>
</template>
<script>
import MyNavibar from "@/components/MyNavibar";

export default {
  components: {
    MyNavibar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

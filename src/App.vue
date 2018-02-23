<template>
  <div id="app">
    <h1>厚生労働省 ブラック企業リスト</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 60px 20px 60px;
  margin-left: auto;
  margin-right: auto;
  width: 960px;
}
</style>

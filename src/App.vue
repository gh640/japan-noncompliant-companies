<template>
  <div id="app">
    <h1 class="page-title">厚生労働省 ブラック企業リスト</h1>
    <transition name="fade" mode="out-in" appear>
      <router-view :key="$route.fullPath"></router-view>
    </transition>
    <footer>
      <div class="footer">
        powered by <a href="https://pages.github.com/"><img class="footer-link-image" src="../src/assets/GitHub-Mark-120px-plus.png" alt="GitHub Pages"></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
h1 {
  font-weight: normal;
}
.page-title {
  font-weight: bold;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 60px 20px 40px;
  margin-left: auto;
  margin-right: auto;
  width: 960px;
}
.page-title {
  margin: 0 0 80px;
}
.footer {
  margin: 60px 0 0;
}
.footer-link-image {
  width: 1em;
  height: 1em;
  display: inline-block;
  margin-left: 0.2em;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .2s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity .2s;
}
.fade-leave-to {
  opacity: 0;
}
</style>

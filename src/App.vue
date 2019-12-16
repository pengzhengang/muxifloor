<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 10rem;
  margin: 0 auto;
}
</style>

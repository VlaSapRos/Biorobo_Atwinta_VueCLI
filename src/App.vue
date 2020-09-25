<template>
  <Main/>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/main">Main</router-link>
  </div>
  <router-view/> -->
</template>

<script>
import MainVue from './views/Main.vue'
export default {
  components: {
    'Main': MainVue
  }
}
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>

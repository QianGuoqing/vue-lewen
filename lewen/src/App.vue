<template>
  <div id="app">
    <q-header></q-header>
    <router-view></router-view>
    <q-bottom></q-bottom>
  </div>
</template>

<script>
  import QHeader from './components/q-header/QHeader.vue'
  import QBottom from './components/q-bottom/QBottom.vue'
  export default {
    name: 'App',
    components: {
      QHeader,
      QBottom
    }
  }
</script>

<style lang="stylus">
  #app
    position relative
</style>

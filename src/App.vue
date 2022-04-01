<template>
  <div id="app">
    <HeaderConsultant />
    <MainConsultant />
    <FooterConsultant />
  </div>
</template>

<script>
import HeaderConsultant from './components/HeaderConsultant.vue';
import MainConsultant from './components/MainConsultant.vue';
import FooterConsultant from './components/FooterConsultant.vue'

export default {
  name: 'App',
  components: {
    HeaderConsultant,
    MainConsultant,
    FooterConsultant
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

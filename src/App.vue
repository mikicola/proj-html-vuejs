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
@import "./assets/styles/style.scss";
#app {
  font-family: 'Poppins', sans-serif;
  // ExtraLight 200
  // Regular 400
  // Medium 500
  // ExtraBold 800
}
</style>

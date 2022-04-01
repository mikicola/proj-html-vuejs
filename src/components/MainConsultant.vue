<template>
  <main>
    <JumbotronConsultant />
  </main>
</template>

<script>
import JumbotronConsultant from './JumbotronConsultant.vue';
export default {
    name: 'MainConsultant',
    components: {
    JumbotronConsultant
  }
    
}
</script>

<style  scoped lang="scss">
@import '../assets/styles/partials/variables.scss';
</style>

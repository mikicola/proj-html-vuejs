<template>
  <main>
    <JumbotronConsultant />
    <SectionExcellence />
    <SectionCompany />
  </main>
</template>

<script>
import JumbotronConsultant from './JumbotronConsultant.vue';
import SectionExcellence from './SectionExcellence.vue';
import SectionCompany from './SectionCompany.vue';

export default {
    name: 'MainConsultant',
    components: {
    JumbotronConsultant,
    SectionExcellence,
    SectionCompany,
  }
    
}
</script>

<style  scoped lang="scss">
@import '../assets/styles/partials/variables.scss';
</style>

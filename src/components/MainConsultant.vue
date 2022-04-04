<template>
  <main>
    <JumbotronConsultant />
    <SectionExcellence />
    <SectionCompany />
    <SectionActionProjects />
    <SectionNumbers />
    <FormSection />
  </main>
</template>

<script>
import JumbotronConsultant from './JumbotronConsultant.vue';
import SectionExcellence from './SectionExcellence.vue';
import SectionCompany from './SectionCompany.vue';
import SectionActionProjects from './SectionActionProjects.vue';
import SectionNumbers from './SectionNumbers.vue';
import FormSection from './FormSection.vue';

export default {
    name: 'MainConsultant',
    components: {
    JumbotronConsultant,
    SectionExcellence,
    SectionCompany,
    SectionActionProjects,
    SectionNumbers,
    FormSection,
  }
    
}
</script>

<style  scoped lang="scss">
@import '../assets/styles/partials/variables.scss';
</style>

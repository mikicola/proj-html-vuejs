<template>
  <div class="number-info">
    <div class="number">{{ cardNumber }}</div>
    <div class="info">{{ cardInfo }}</div>
  </div>
</template>

<script>
export default {
  name: "CardNumbers",
  props: {
    // interpreta in automatico (in sectionNumbers è scritto con i - )
    cardNumber: String,
    cardInfo: String,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/partials/variables.scss";

.number-info {
  .number {
    color: $small-title-color;
    font-size: 3rem;
    font-weight: 600;
  }
}
</style>

<template>
  <div class="card-info-company">
    <h2>
      <font-awesome-icon class="icon" icon="fa-solid + cardIcon" />
      {{
        cardTitle
      }}
    </h2>
    <p>{{ cardPara }}</p>
  </div>
</template>

<script>
export default {
  name: "CardCompany",
  props: {
    cardIcon:String,
    cardTitle: String,
    cardPara: String,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/partials/variables.scss";
.card-info-company {
  margin-top: 2rem;
  width: 50%;
}
</style>

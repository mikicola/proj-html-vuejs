<template>
  <div class="card_section-excellence flex">
    <font-awesome-icon class="icon" :icon="cardIcon" />
    <font-awesome-icon class="arrow-icon" icon="fa-solid fa-arrow-right" />
    <h2>{{ cardTitle }}</h2>
    <p>{{ cardPara }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardExcellence',
  props: {
    cardIcon: String,
    cardTitle: String,
    cardPara: String
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/partials/variables.scss";

.card_section-excellence {
  width: calc((100% / 3) - 10px);
  margin: 5px;
  padding: 2rem;
  border-radius: 10px;
  background-color: white;
  flex-direction: column;
  position: relative;
    .icon{
      align-self: start;
      font-size: 2rem;
      color: $green-color;
    }
    .arrow-icon{
      position: absolute;
      right: 3rem;
      font-size: 1.5rem;
      color: rgba(3, 132, 132, 0.5);
      cursor: pointer;
        &:hover{
          color: $green-color;
        }
    }
    h2{
        color: $blue-primary-color;
        margin-top: 1rem;
    }
    h2,
    p {
      display: block;
    }
}
</style>

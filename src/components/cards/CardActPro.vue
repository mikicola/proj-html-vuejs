<template>
  <div class="card-section-act-proj">
    <img :src="cardImg" :alt="cardTitle" />
    <font-awesome-icon class="icon" icon="fa-solid fa-arrow-right" />
    <h2>{{cardTitle}}</h2>
    <p>{{cardPara}}</p>
  </div>
</template>

<script>
export default {
  name: "CardActPro",
  props: {
    cardImg: String,
    cardTitle: String,
    cardPara: String,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/partials/variables.scss";
.card-section-act-proj {
      width: calc(33.3333% - 10px);
      margin: 5px;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      .icon {
        position: absolute;
        top: 0;
        right: 5%;
        color: white;
        visibility: hidden;
      }
      h2 {
        text-align: center;
        position: absolute;
        bottom: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
      }
      p {
        padding: 0 1rem;
        color: white;
        position: absolute;
        bottom: 0;
        visibility: hidden;
      }
      img {
        width: 100%;
        height: 100%;
        filter: brightness(60%);
      }
    }
    .card-section-act-proj:hover img {
      filter: brightness(50%) blur(2px);
      transform: scale(1.1);
      transition: all 0.5s;
    }
    .card-section-act-proj:hover .icon {
      top: 5%;
      visibility: visible;
      transition: all 0.5s;
    }
    .card-section-act-proj:hover h2 {
      bottom: 25%;
      transition: all 0.5s;
    }
    .card-section-act-proj:hover p {
      bottom: 15%;
      visibility: visible;
      transition: all 0.5s;
    }
</style>

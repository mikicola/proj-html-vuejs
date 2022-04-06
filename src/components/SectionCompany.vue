<template>
  <div class="section-company clearfix">
    <div class="container">
      <div class="heading padding-x-5">
        <small>about the network</small>
        <h1><span class="green-span">The</span> Company</h1>
        <p class="p-heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, soluta! Doloremque cum cupiditate nihil.
        </p>
<!-- <font-awesome-icon  class="icon" icon="fa-solid fa-award" />
    <font-awesome-icon icon="fa-solid fa-lock-keyhole" />
    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
    <font-awesome-icon icon="fa-solid fa-graduation-cap" /> -->
        <div class="cards-info-company flex">

          <CardCompany
          v-for="dataCompany in arrDataCompanies"
          :key="dataCompany"
          :card-icon="dataCompany.icon"
          :card-title="dataCompany.title"
          :card-para="dataCompany.para"
            />

        </div>
        <div class="btn-container">
          <a class="btn green-btn" href="#">get in touch</a>
          <a class="btn transparent-btn" href="#">read more</a>
        </div>
      </div>
    </div>
    <img src="../assets/img/about-4.jpg" alt="guy in business" />
  </div>
</template>

<script>
import CardCompany from "./cards/CardCompany.vue";

export default {
  name: "SectionCompany",
   components: {
    CardCompany,
  },
   data() {
    return {
      arrDataCompanies: [
        {
          icon: "fa-award",
          title: "Tradition",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          icon: "fa-solid fa-award",
          title: "Security",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          icon: "fa-solid fa-award",
          title: "Certificate",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          icon: "fa-solid fa-award",
          title: "Expertise",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ]
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables.scss";
.section-company {
  background-color: $dark-bg-color;
  color: white;

  h1,
  .green-span {
    color: white;
  }
  .heading,
  img {
    float: left;
    width: 50%;
  }

  .p-heading {
    margin-top: 1.5rem;
  }
  .cards-info-company {
    flex-wrap: wrap;
    margin-top: 2rem;
    // .card-info-company {
    //   margin-top: 2rem;
    //   width: 50%;
    // }
  }
  .btn-container {
    margin-top: 4rem;
    .transparent-btn {
      margin-left: 1.5rem;
    }
  }
}
</style>

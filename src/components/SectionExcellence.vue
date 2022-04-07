<template>
  <div class="section-excellence padding-x-5">
    <div class="container">
      <div class="heading">
        <small>our business areas</small>
        <h1>Excellence in <span class="green-span">Services</span></h1>
        <div class="wrapper flex">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            est illum quos consequuntur quae architecto perspiciatis aliquid maxime. Dolor
            dolores voluptatum enim quidem omnis.
          </p>

          <a class="btn green-btn" href="#">see all</a>
        </div>
      </div>


      <div class="cards_section-excellence flex">
        <CardExcellence
        v-for="dataExcellence in arrDataExcellences"
        :key="dataExcellence"
        :card-icon="dataExcellence.icon"
        :card-title="dataExcellence.title"
        :card-para="dataExcellence.para"
         />
      </div>
    </div>
  </div>
</template>

<script>
import CardExcellence from "./cards/CardExcellence.vue";
export default {
  name: "SectionExcellence",
  components: {

    CardExcellence,
  },
  data() {
    return {
      arrDataExcellences: [
        // <font-awesome-icon class="icon" icon="fa-solid fa-suitcase" />
        // <font-awesome-icon icon="fa-solid fa-chart-simple" />
        // <font-awesome-icon icon="fa-solid fa-plane" />
        // <font-awesome-icon icon="fa-solid fa-globe-stand" />
        // <font-awesome-icon icon="fa-solid fa-inbox" />
        {
          icon: "fa-solid fa-share-nodes",
          title: "Audit & Assurance",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          icon: "fa-solid fa-suitcase",
          title: "Financial Advisory",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          icon: "fa-solid fa-chart-simple",
          title: "Analytics and M&A",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          icon: "fa-solid fa-plane",
          title: "Middle Marketing",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          // icon globe non funziona
          icon: "fa-solid fa-suitcase",
          title: "Legal Consulting",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          icon: "fa-solid fa-inbox",
          title: "Regular Risk",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ]
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables.scss";

.section-excellence {
  background-color: $light-green-bg-color;
  .wrapper {
    padding-top: 1.5rem;
  }
  .wrapper {
    justify-content: space-between;
    // align-content: center;
  }
  .btn {
    align-self: end;
    display: block;
    white-space: nowrap
  }
    .cards_section-excellence{
        padding-top: 2rem;
        flex-wrap: wrap;
    }
}
</style>

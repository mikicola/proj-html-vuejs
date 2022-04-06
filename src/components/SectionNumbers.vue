<template>
  <div class="section-numbers">
    <div class="chess-bg-portion">
      <div class="container padding-x-5">
        <small>what are we doing</small>
        <h1><span class="green-span">Results</span>in Numbers</h1>

        <!-- <CardComics
        v-for="comic in arrComics"
        :key="comic.series"
        :card-thumb="comic.thumb"
        :card-series="comic.series" /> -->
        <div class="numbers-infos flex">
          <CardNumbers
            v-for="dataNumber in arrDataNumbers"
            :key="dataNumber"
            :card-number="dataNumber.number"
            :card-info="dataNumber.info"
          />
        </div>
        <!-- <div class="numbers-infos flex">
          <div class="number-info">
            <div class="number">111</div>
            <div class="info">certification</div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="logos container padding-x-5 flex">
      <img v-for="(logo, index) in arrLogos" :key="index" :src="logo.src" alt="logo" />
    </div>
  </div>
</template>

<script>
import CardNumbers from "./cards/CardNumbers.vue";

export default {
  name: "SectionNumbers",
  components: {
    CardNumbers,
  },
  data() {
    return {
      arrDataNumbers: [
        {
          number: "111",
          info: "Certification",
        },
        {
          number: "230",
          info: "Employees",
        },
        {
          number: "517",
          info: "Customers",
        },
        {
          number: "94",
          info: "Countries",
        },
      ],
      arrLogos:[
        {
         src: require("../assets/img/logo-1.png")
        },
        {
         src: require("../assets/img/logo-2.png")
        },
        {
         src: require("../assets/img/logo-3.png")
        },
        {
         src: require("../assets/img/logo-4.png")
        },
        {
         src: require("../assets/img/logo-5.png")
        },
      ]
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables.scss";
.section-numbers {
  background-color: $dark-bg-color;

  .chess-bg-portion {
    background-image: url(../assets/img/bg-7.jpg);

    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    width: 100%;
    color: white;
    .container {
      text-align: center;
      h1,
      .green-span {
        color: white;
      }
      .numbers-infos {
        padding-top: 5rem;
        justify-content: space-between;
        // .number-info {
        //   .number {
        //     color: $small-title-color;
        //     font-size: 3rem;
        //   }

        // }
      }
    }
  }
  .logos {
    justify-content: space-between;
    img {
      filter: brightness(3);
    }
  }
}
</style>

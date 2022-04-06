<template>
  <div class="section-act-proj">
    <div class="container padding-x-5">
      <small>we do more for everyone</small>
      <h1>Action & <span class="green-span">Projects</span></h1>
      <ul>
        <li v-for="(element, index) in actionProjectsElements" :key="index">
          <a :href="element.href">{{ element.text }}</a>
        </li>
      </ul>

      <div class="cards-section-act-proj flex">
        <CardActPro
        v-for="dataActPro in arrDataActPros"
        :key="dataActPro"
        :card-img="dataActPro.img"
        :card-title="dataActPro.title"
        :card-para="dataActPro.para"
        />
        <!-- <div class="card-section-act-proj">
          <img src="../assets/img/project-1.jpg" alt="" />
          <div class="icon">icona</div>
          <h2>titolo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import CardActPro from "./cards/CardActPro.vue";

export default {
  name: "SectionActionProjects",
   components: {
    CardActPro,
  },
  data() {
    return {
      actionProjectsElements: [
         {
          href: "#",
          text: "all",
        },
         {
          href: "#",
          text: "institutional",
        },
         {
          href: "#",
          text: "social",
        },
         {
          href: "#",
          text: "events",
        },
         {
          href: "#",
          text: "innovation",
        },
         {
          href: "#",
          text: "environment",
        },
         {
          href: "#",
          text: "technology",
        },
      ],
      arrDataActPros:[
        {
          img: require("../assets/img/project-1.jpg"),
          title: "Academic professional program in social media",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
         {
          img: require("../assets/img/project-2.jpg"),
          title: "President's speech at the annual meeting",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
         {
          img: require("../assets/img/project-3.jpg"),
          title: "International business trip in Shangai",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
         {
          img: require("../assets/img/project-4.jpg"),
          title: "Technology workshop with education theme",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
         {
          img: require("../assets/img/project-5.jpg"),
          title: "Donation of clothes and food to the partner NGO",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
         {
          img: require("../assets/img/project-6.jpg"),
          title: "Confraternization of the procurement team",
          para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ]
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables.scss";
.container {
  text-align: center;
  ul {
    margin-top: 2rem;
    text-transform: uppercase;
    li {
      display: inline-block;
      padding: 0 1rem;
      a{
        color: $grey-text;
      }
    }
  }
  .cards-section-act-proj {
    flex-wrap: wrap;
    padding-top: 3rem;
    // .card-section-act-proj {
    //   width: calc(33.3333% - 10px);
    //   margin: 5px;
    //   position: relative;
    //   border-radius: 10px;
    //   overflow: hidden;
    //   cursor: pointer;
    //   .icon {
    //     position: absolute;
    //     top: 0;
    //     right: 5%;
    //     color: white;
    //     visibility: hidden;
    //   }
    //   h2 {
    //     text-align: center;
    //     position: absolute;
    //     bottom: 20%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    //     color: white;
    //   }
    //   p {
    //     padding: 0 1rem;
    //     color: white;
    //     position: absolute;
    //     bottom: 0;
    //     visibility: hidden;
    //   }
    //   img {
    //     width: 100%;
    //     height: 100%;
    //     filter: brightness(60%);
    //   }
    // }
    // .card-section-act-proj:hover img {
    //   filter: brightness(50%) blur(2px);
    //   transform: scale(1.1);
    //   transition: all 0.5s;
    // }
    // .card-section-act-proj:hover .icon {
    //   top: 5%;
    //   visibility: visible;
    //   transition: all 0.5s;
    // }
    // .card-section-act-proj:hover h2 {
    //   bottom: 25%;
    //   transition: all 0.5s;
    // }
    // .card-section-act-proj:hover p {
    //   bottom: 15%;
    //   visibility: visible;
    //   transition: all 0.5s;
    // }
  }
}
</style>

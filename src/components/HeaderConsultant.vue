<template>
  <header>
    <nav class="upper-navbar">
      <div class="container">
        <ul>
          <!-- TOFIX mancano icon -->
          <li v-for="(item, index) in upperNavbarInfo" :key="index">{{ item.text }}</li>
        </ul>
      </div>

    </nav>
    <nav class="lower-navbar container flex">
      <img src="../assets/img/logo.png" alt="logo nex gen">
      <ul>
        <li v-for="(link, index) in lowerNavbarLinks" :key="index"><a :href="link.href">{{ link.text }}</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderConsultant",
  data() {
    return {
      upperNavbarInfo: [
        {
          icon: "",
          text: "Open Hours: Mon - Sat - 9:00 - 18:00",
        },
        {
          icon: "",
          text: "+1(305)1234-5678",
        },
        {
          icon: "",
          text: "hello@example.com",
        },
        {
          icon: "",
          text: null,
        },
        {
          icon: "",
          text: null,
        },
        {
          icon: "",
          text: null,
        },
      ],
      lowerNavbarLinks: [
        {
          text: "home",
          href: "#",
        },
        {
          text: "services",
          href: "#",
        },
        {
          text: "about",
          href: "#",
        },
        {
          text: "projects",
          href: "#",
        },
        {
          text: "results",
          href: "#",
        },
        {
          text: "get in touch",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style  scoped lang="scss">
@import "../assets/styles/partials/variables.scss";
  header{
    .upper-navbar{
      background-color: $blue-primary-color;
      color: white;
      ul{
        padding: .5rem 0;
        li{
          margin-right: 1rem;
          font-size: .8em;
        }
      }
    }
    .lower-navbar{
      margin-top: 1rem;
      text-transform: uppercase;
      justify-content: space-between;
      align-items: center;
      img{
        width: 130px;
      }
      li{
        margin-left: 1rem;
        height: 100%;
        a{
          color: $blue-primary-color;
          text-decoration: none;
          &:hover {
            color: #2f4756;
          }
        }
      }
    }
    li{
      display: inline-block;
    }
  }
</style>

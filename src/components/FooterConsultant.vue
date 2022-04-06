<template>
  <footer>
    <div class="container padding-x-5 flex">
      <div class="column one flex">
        <img src="../assets/img/logo.png" alt="logo nex gen" />
        <p>A Functional HTML Template for Corporate & Business.</p>
        <span v-for="(item, index) in contactInfo" :key="index">{{ item.text }}</span>
        <button class="btn transparent-btn">get in touch</button>
      </div>

      <div class="column card-foo">
        <ul id="about">
          <li class="li-title">About</li>
          <li v-for="(aboutLink, index) in aboutLinks" :key="index">
          <a :href="aboutLink.href">{{ aboutLink.text }}</a>
        </li>
        </ul>
      </div>

      <div class="column card-foo">
        <ul id="services">
          <li class="li-title">Services</li>
          <li v-for="(servicesLink, index) in servicesLinks" :key="index">
            <a :href="servicesLink.href">{{ servicesLink.text }}</a>
          </li>
        </ul>
      </div>

      <div class="column card-foo">
        <ul id="support">
          <li class="li-title">Support</li>
          <li v-for="(supportLink, index) in supportLinks" :key="index">
            <a :href="supportLink.href">{{ supportLink.text }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container flex">
        <span>Enjoy the low prices</span>
        <span>&copy;2020 NEXGEN is Proudly powered by <span class="green-span-footer">Codings</span>.</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterConsultant",
    data() {
    return {
      contactInfo: [
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
            text: "Main Avenue, 987",
          },
      ],
      aboutLinks:[
        {
          href: "#",
          text: "> The Company",
        },
         {
          href: "#",
          text: "> Institutional",
        },
         {
          href: "#",
          text: "> Social",
        },
         {
          href: "#",
          text: "> Innovation",
        },
         {
          href: "#",
          text: "> Environment",
        },
         {
          href: "#",
          text: "> Technology",
        },
      ],
      servicesLinks:[
        {
          href: "#",
          text: "> Audit & Assurance",
        },
         {
          href: "#",
          text: "> Financial Advisory",
        },
         {
          href: "#",
          text: "> Analitics M&A",
        },
         {
          href: "#",
          text: "> Middle Marketing",
        },
         {
          href: "#",
          text: "> Legal Consulting",
        },
         {
          href: "#",
          text: "> Regular Risk",
        },
      ],
      supportLinks:[
        {
          href: "#",
          text: "> Responsability",
        },
         {
          href: "#",
          text: "> Terms of Use",
        },
         {
          href: "#",
          text: "> About Cookies",
        },
         {
          href: "#",
          text: "> Privacy",
        },
         {
          href: "#",
          text: "> Accessibility",
        },
         {
          href: "#",
          text: "> Information",
        },

      ],

    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables.scss";
footer {
  background-color: $dark-bg-color;
  color: white;
  .container {
    justify-content: space-between;
    .one{
      flex-direction: column;
      justify-content: space-between;
    }
    .column {
      width: calc(25% - 1rem);
      margin: 0.5rem;
      img {
        width: 130px;
      }
      span {
        display: block;
        color: #6d6d6d;
      }
      .transparent-btn {
        color: white;
        align-self: flex-start;
      }
    }
    .card-foo {
      background-color: $footer-cards-bg-color;
      border-radius: 10px;
      padding: 2rem;
      ul {
        .li-title{
          font-weight: 700;
          padding-bottom: 1rem;
        }
        li {
          list-style: none;
          a {
            color: $light-grey-text;
            text-decoration: none;
            &:hover {
              color: white;
            }
          }
        }
      }
    }
  }
  .footer-bottom {
    background-color: black;
    font-size: .8em;
    justify-content: space-between;
    padding: 2rem 0;
    .green-span-footer{
      color: $green-color;
    }
  }
}
</style>

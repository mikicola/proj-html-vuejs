<template>
  <footer>
    <div class="container padding-x-5 flex">
      <div class="column">
        <img src="../assets/img/logo.png" alt="logo nex gen" />
        <p>A Functional HTML Template for Corporate & Business.</p>
        <span>11111111</span>
        <span>11111111</span>
        <span>11111111</span>
        <button class="btn transparent-btn">get in touch</button>
      </div>

      <div class="column card-foo">
        <ul id="about">
          <li class="li-title">About</li>
          <li><a href="">prova</a></li>
          <li><a href="">prova</a></li>
          <li><a href="">prova</a></li>
          <li><a href="">prova</a></li>
          <li><a href="">prova</a></li>
        </ul>
      </div>

      <div class="column card-foo">
        <ul id="services">
          <li class="li-title">Services</li>
          <li><a href="">prova</a></li>
        </ul>
      </div>

      <div class="column card-foo">
        <ul id="support">
          <li class="li-title">Support</li>
          <li><a href="">prova</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container flex">
        <span>Enjoy the low prices</span>
        <span>2020 NEXGEN is Proudly powered by <span>Codings</span></span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterConsultant",
};
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables.scss";
footer {
  background-color: $dark-bg-color;
  color: white;
  .container {
    justify-content: space-between;
    .column {
      width: calc(25% - 1rem);
      margin: 0.5rem;
      img {
        width: 130px;
      }
      span {
        display: block;
      }
      .transparent-btn {
        color: white;
      }
    }
    .card-foo {
      background-color: $footer-cards-bg-color;
      border-radius: 10px;
    }
  }
  .footer-bottom {
    background-color: black;
    justify-content: space-between;
    padding: 2rem 0;
  }
}
</style>

<template>
  <div class="section-excellence padding-x-5">
    <div class="container">
      <div class="heading">
        <small>our business areas</small>
        <h1>Excellence in <span class="green-span">Services</span></h1>
        <div class="wrapper flex">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            est illum quos consequuntur quae architecto perspiciatis, fugiat
            dignissimos maiores omnis asperiores officiis, aliquid maxime. Dolor
            dolores voluptatum enim quidem omnis.
          </p>

          <a class="btn green-btn" href="#">see all</a>
          <!-- TOFIX allargare il testo  -->
        </div>
      </div>

      <div class="cards_section-excellence flex">
        <div class="card_section-excellence flex">
          <!-- icon  -->
          <font-awesome-icon class="icon" icon="fa-solid fa-user-secret" />
          <!-- icon arrow  -->
          <font-awesome-icon class="arrow-icon" icon="fa-solid fa-user-secret" />
          <h2>titolo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionExcellence",
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
  }
  .btn {
    display: inline;
  }
    .cards_section-excellence{
        padding-top: 2rem;
        .card_section-excellence {
          width: calc(33.3333% - 10px);
          margin: 5px;
          padding: 2rem;
          border-radius: 10px;
          background-color: white;
          flex-direction: column;
          position: relative;
          .icon{
              align-self: start;
          }
          .arrow-icon{
                position: absolute;
                right: 3rem;
          }
          h2{
              margin-top: 1rem;
          }
          h2,
          p {
            display: block;
          }
        }
    }
}
</style>

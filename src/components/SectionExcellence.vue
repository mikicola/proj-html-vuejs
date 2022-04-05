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
        <div class="card_section-excellence flex">
          <!-- icon  -->
          <!-- <font-awesome-icon class="icon" icon="fa-solid fa-user-secret" /> -->
          <font-awesome-icon class="icon" icon="fa-solid fa-share-nodes" />
          
            <!-- TOFIX da importare -->
          <!-- <font-awesome-icon class="icon" icon="fa-solid fa-suitcase" />
          <font-awesome-icon icon="fa-solid fa-chart-simple" />
          <font-awesome-icon icon="fa-solid fa-plane" />
          <font-awesome-icon icon="fa-solid fa-globe-stand" />
          <font-awesome-icon icon="fa-solid fa-inbox" /> -->

          <i class="fa-solid fa-share-nodes"></i>

          <!-- icon arrow  -->
          <font-awesome-icon class="arrow-icon" icon="fa-solid fa-arrow-right" />
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
    // align-content: center;
  }
  .btn {
    align-self: end;
    display: block;
    white-space: nowrap
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
            font-size: 2.5rem;
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
    }
}
</style>

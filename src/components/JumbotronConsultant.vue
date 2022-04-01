<template>
  <div class="jumbotron">
    <!-- <img src="../assets/img/bg-parallax.png" alt="jumbo"> -->
    <div class="jumbo-content">
      <div class="text container">
        <h1>Ready <span>Team</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur sit nulla nesciunt enim cum iure</p>
        <div class="btn-container">
          <a class="btn green-btn" href="#">get in touch</a>
          <a class="btn white-btn" href="#">read more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumbotronConsultant",
};
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables.scss";
.jumbotron {
  height: 500px;
  .jumbo-content{
    height: 100%;
    background-image: url(../assets/img/bg-parallax.png);
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    position: relative;
    .text{
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1{
        color: $blue-primary-color;
        span{
          color: $green-color;
        }
      }
      .btn-container{
        margin-top: 3rem;
        .btn{
          margin: 0 .5rem;
          text-transform: uppercase;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

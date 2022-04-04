<template>
  <div class="jumbotron">
    <!-- <img src="../assets/img/bg-parallax.png" alt="jumbo"> -->
    <div class="jumbo-content flex">
      <img src="../assets/img/bg-parallax.png" alt="guys in business">
      <div class="text container">
        <h1>Ready <span class="green-span">Team</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur sit nulla nesciunt enim cum iure</p>
        <div class="btn-container">
          <a class="btn green-btn" href="#">get in touch</a>
          <a class="btn transparent-btn" href="#">read more</a>
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
  height: 550px;
  .jumbo-content{
    height: 100%;
    background-image: url(../assets/img/transparent-bg.png);
    overflow: hidden;
    background-position: center;
    position: relative;
    left:0px;
    top:0px;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    img{
      min-width: 180%;
      // max-height: 100%;
    }
    .text{
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1{
        color: $blue-primary-color;
      }
      p{
        margin-top: 1rem;
        max-width: 450px;
      }
      .btn-container{
        margin-top: 3rem;
        .btn{
          margin: 0 .5rem;
        }
        .transparent-btn:hover{
          background-color: rgba(0, 0, 0, 0.08);
        }
      }
    }
  }
}
</style>

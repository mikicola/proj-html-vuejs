<template>
  <div class="section-numbers">
    <div class="chess-bg-portion">
      <div class="container padding-x-5">
        <small>what are we doing</small>
        <h1><span class="green-span">Results</span>in Numbers</h1>

        <div class="numbers-infos flex">
          <div class="number-info">
            <div class="number">111</div>
            <div class="info">certification</div>
          </div>
        </div>
      </div>
    </div>

    <div class="logos container padding-x-5 flex">
      <img src="../assets/img/logo-1.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionNumbers",
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
      h1, .green-span{
        color: white;
      }
      .numbers-infos {
        padding-top: 5rem;
        justify-content: space-between;
        .number-info {
          .number {
            color: $small-title-color;
            font-size: 3rem;
          }
          .info {
          }
        }
      }
    }
  }
  .logos {
    justify-content: space-between;
    img{
        filter: brightness(3);
    }
  }
}
</style>

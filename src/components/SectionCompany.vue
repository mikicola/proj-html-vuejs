<template>
  <div class="section-company clearfix">
    <div class="container">
      <div class="heading padding-x-5">
        <small>about the network</small>
        <h1><span class="green-span">The</span> Company</h1>
        <p class="p-heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, soluta! Doloremque cum cupiditate nihil.
        </p>

        <div class="cards-info-company flex">
          <div class="card-info-company">
            <!-- icon -->
            <h2>titolo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="card-info-company">
            <!-- icon -->
            <h2>titolo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="card-info-company">
            <!-- icon -->
            <h2>titolo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="card-info-company">
            <!-- icon -->
            <h2>titolo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="btn-container">
          <a class="btn green-btn" href="#">get in touch</a>
          <a class="btn transparent-btn" href="#">read more</a>
        </div>
      </div>
    </div>
    <img src="../assets/img/about-4.jpg" alt="guy in business" />
  </div>
</template>

<script>
export default {
  name: "SectionCompany",
};
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables.scss";
.section-company {
  background-color: $dark-bg-color;
  color: white;

  .green-span {
    color: white;
  }
  .heading,
  img {
    float: left;
    width: 50%;
  }
  .p-heading {
    margin-top: 1.5rem;
  }
  .cards-info-company{
      flex-wrap: wrap;
      margin-top: 2rem;
      .card-info-company{
          margin-top: 2rem;
          width: 50%;
      }
  }
  .btn-container{
      margin-top: 4rem;
      .transparent-btn{
          margin-left: 1.5rem;
      }
  }
}
</style>

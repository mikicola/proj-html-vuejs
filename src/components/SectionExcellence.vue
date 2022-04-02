<template>
  <div class="section-excellence padding-x-5">
      <div class="container">
          <div class="heading">
            <small>our business areas</small>
            <h1>Excellence in <span class="green-span">Services</span></h1>
            <div class="wrapper flex">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum est illum quos consequuntur quae architecto perspiciatis, fugiat dignissimos maiores omnis asperiores officiis, aliquid maxime. Dolor dolores voluptatum enim quidem omnis.</p>
                
                <a class="btn green-btn"  href="#">see all</a> 
                <!-- TOFIX allargare il testo  -->
            </div>
        </div>

        <div class="card_section-excellence flex">
            <!-- icon  -->
            <!-- icon arrow  -->
            <h2>titolo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SectionExcellence'
}
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables.scss";

    .section-excellence{
        background-color: $light-green-bg-color;
        .wrapper{
            padding-top:1.5rem
        }
        .wrapper{
            justify-content: space-between;
        }
        .btn{
            display: inline;
        }
        .card_section-excellence{
            background-color: white;
            flex-direction: column;
            h2, p{
                display: block;
            }
        }
    }
</style>

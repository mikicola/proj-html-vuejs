<template>
  <div class="form-section">
    <div class="container padding-x-5">
      <small>send a message</small>
      <h1>Get in <span class="green-span">Touch</span></h1>
      <p>we will respond to your message as soon as possible.</p>

      <div class="wrapper flex">
        <form class="msg-form flex">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone" />
          <select class="more-info">
            <option selected>More info</option>
            <option value="1">info 1</option>
            <option value="2">info 2</option>
            <option value="3">info 3</option>
          </select>
          <textarea id="message">
        Message
        </textarea
          >
          <button class="btn green-btn">send</button>
        </form>

        <div class="example-inc">
            <h2>Example Inc</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Harum aperiam ab consequuntur quisquam explicabo doloribus!</p>
            <span>11111111</span>
            <span>11111111</span>
            <span>11111111</span>
            <button class="btn transparent-btn">view map</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormSection",
};
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables.scss";
.form-section {
  p {
    margin-top: 1.5rem;
  }
  .wrapper{
      .msg-form {
        padding-top: 2rem;
      }
    span{
        display: block;
    }
  }
}
</style>

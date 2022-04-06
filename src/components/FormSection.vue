<template>
  <div class="form-section">
    <div class="container padding-x-5">
      <small>send a message</small>
      <h1>Get in <span class="green-span">Touch</span></h1>
      <p>we will respond to your message as soon as possible.</p>

      <div class="wrapper flex">
        <form class="msg-form flex">
          <input class="name" type="text" placeholder="Name" />
          <input class="email" type="email" placeholder="Email" />
          <input class="phone" type="number" placeholder="Phone" />
          <select class="more-info">
            <option selected>More info</option>
            <option value="1">info 1</option>
            <option value="2">info 2</option>
            <option value="3">info 3</option>
          </select>
          <textarea id="message">
          Message
          </textarea>
          <button class="btn green-btn">send</button>
        </form>

        <div class="example-inc flex">
            <h2>Example Inc</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Harum aperiam ab consequuntur quisquam explicabo doloribus!</p>
            <span v-for="(item, index) in contactInfo" :key="index">{{ item.text }}</span>
            <button class="btn transparent-btn">view map</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormSection",
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
      ]
    }
    }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/partials/variables.scss";
.form-section {
  p {
    margin-top: 0;
  }
  .wrapper{
    .example-inc{
      padding-left: 2rem;
      flex-direction: column;
      justify-content: space-between;
      span{
        color: $green-color;
        padding: .5rem 0;
      }
      .btn{
          align-self: start;
        }
    }
      .msg-form {
        font-family: 'Poppins', sans-serif;
        padding-top: 2rem;
        flex-wrap: wrap;
        margin: -5px;
        .name, .email, .phone, .more-info{
          width: calc((100% / 2) - 10px);
        }
        #message{
          width: 100%;
        }
        .name, .email, .phone, .more-info, #message{
          margin: 5px;
          background-color: #ececec;
          color: grey;
          border: none;
          padding: 1rem;
          border-radius: 5px;
        }
        .btn{
          margin: 5px;
        }
      }
    span{
        display: block;
    }
    .btn{
      align-self: center;
    }
    .transparent-btn:hover{
          background-color: rgba(0, 0, 0, 0.08);
        }
  }
}
</style>

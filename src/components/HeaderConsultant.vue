<template>
  <header>
    <nav>
      <ul>
        <li></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'HeaderConsultant',
    data () {
    return {
      upperNavbarInfo:[
        {
          icon: '',
          text: 'Open Hours - Sat _ 9:00 - 18:00',
        },
        {
          icon: '',
          text: '+1(305)1234-5678',
        },
        {
          icon: '',
          text: 'hello@example.com',
        },
        {
          icon: '',
          text: null,
        },
        {
          icon: '',
          text: null,
        },
        {
          icon: '',
          text: null,
        },
      ],
      lowerNavbarLinks: [
        {
          text: 'home',
          href: '#'
        },
        {
          text: 'services',
          href: '#'
        },
        {
          text: 'about',
          href: '#'
        },
        {
          text: 'projects',
          href: '#'
        },
        {
          text: 'results',
          href: '#'
        },
        {
          text: 'get in touch',
          href: '#'
        },
      ]
    }
  }
}
</script>

<style  scoped lang="scss">
@import '../assets/styles/partials/variables.scss';

</style>

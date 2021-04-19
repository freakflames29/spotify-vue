<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Header />
    <router-view></router-view>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import './App.css'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

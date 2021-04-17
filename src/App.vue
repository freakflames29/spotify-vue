<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Header />
  <Home/>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import './App.css'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

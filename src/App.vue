<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Header />
  <Home/>
  <SubHero/>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import SubHero from './components/SubHero.vue'
import './App.css'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    SubHero
  }
}
</script>

<template lang="html">

  <Home />
  <SubHero />
  <YourMusic />
</template>

<script>
import Home from "./Home.vue";
import SubHero from "./SubHero.vue";
import YourMusic from "./YourMusic.vue";
export default {
  name: "Root",
  components: {
    Home,
    SubHero,
    YourMusic,
  }
};
</script>

<style lang="css" scoped></style>

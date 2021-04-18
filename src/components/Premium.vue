<template lang="html">
  <Prem_Home
  color="#a0c3d2"
  title="Get Premium for the whole family"
  subtitle='Family members living under one roof can enjoy up to 6 Premium accounts.'
  subtitle_two='One-time plans from ₹199'
  btn='get premium family'
  btn_two='see other plans'
  :show='bone'
   />
  <Prem_Home
  color="#B49BC8"
  title="Introducing Premium Mini"
  subtitle='₹7 for 1 day.'
  subtitle_two='₹25 for 1 week.'
  btn='get mini'
  :show='btwo'
   />
   <Premium_features />
   <ConnetMusic />
</template>

<script>
import Prem_Home from "./Prem_Home";
import Premium_features from "./Premium_features";
import ConnetMusic from "./ConnetMusic";
export default {
  name: "Premium",
  data()
  {
    return{
      bone:true,
      btwo:false,
    }
  },
  components: {
    Prem_Home,
    Premium_features,
    ConnetMusic
  }
};
</script>

<style lang="css" scoped></style>

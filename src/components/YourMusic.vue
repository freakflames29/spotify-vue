<template lang="html">
  <div class="yourmusic">

      <Music img='https://i.scdn.co/image/ab67616d00001e0252fe6875028c892308ffc2f7' title='Jab we met'/>
      <Music img='https://i.scdn.co/image/ab67616d00001e02e7c61465b863bed7d6f7a2ba' title='Cubicles'/>
      <Music img='https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96' title='Divide'/>
      <Music img='https://dailymix-images.scdn.co/v2/img/f8c23e3e6a1f64489869915e36b6fb358e8cff76/1/en/large' title='Daily Mix 1'/>
      <Music img='https://i.scdn.co/image/ab67616d00001e02abfecfcab2c8ebe924b2dd9f' title='Flames'/>
      <Music img='https://i.scdn.co/image/ab67616d00001e02d7c47da4f602a212a38254ea' title='Pitchers'/>

  </div>
</template>

<script>
import Music from './Music.vue'
export default {
  name: "YourMusic",
  components:{
    Music,
  }
};
</script>

<style lang="css" scoped>
.yourmusic {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 50px; */
  flex-wrap: wrap;
  margin-bottom: 80px;

}

</style>

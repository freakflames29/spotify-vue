<template lang="html">
      <div class="connect__music">
        <h1 class="heading">Connect with music culture</h1>
        <div class="music__card__div">
          <div class="music__card">
              <img src="https://i.scdn.co/image/ab67706f00000003b7924d3f578ae98456fdf525" alt="img">
              <h3>Bollywood Rock</h3>
              <span>The finest quality Bollywood music handpicked for you.</span>
          </div>
          <div class="music__card">
              <img src="https://mosaic.scdn.co/300/ab67616d0000b27322287a5cc976690b88259babab67616d0000b273375bf11209444fdd2099be86ab67616d0000b27368380dfb77b7ab24ec8a7190ab67616d0000b273dd8f11e5b3c77cd2a9517ee0" alt="img">
              <h3>Punjabi 101</h3>
              <span>The ultimate Punjabi hits.</span>
          </div>
          <div class="music__card">
              <img src="https://i.scdn.co/image/ab67706f000000031841a8b6cf4d7d7ab0bca95e" alt="img">
              <h3>Tollywood Divas</h3>
              <span>The finest music from Telugu films.</span>
          </div>
          <div class="music__card">
              <img src="https://i.scdn.co/image/ab67616d00001e02348468c203278d510f0cbc5a" alt="img">
              <h3>Hot Hits India</h3>
              <span>50 hottest hits from across the globe.</span>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name:'ConnetMusic'
}
</script>

<style lang="css" scoped>
.connect__music{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #EEEEEE;
  padding: 100px;
}
.heading{
  margin-bottom:  60px;
  font-size: 3em;
}
.music__card__div{
  /* width: 90%; */
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  /* flex-wrap: wrap; */


}
.music__card h3
{
  margin-bottom: 10px;
}
span
{
  line-height: 1.5rem;
  font-size: 12px;
}
.music__card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  /* height: 500px;    */
  width: 25%;
}
.music__card img{
  height: 150px;
  margin-bottom: 20px;

}
</style>

<template lang="html">
  <div class="music">
    <div class="overlay">
    </div>
    <img
      :src='img'
      class="music__banner"
      alt="img"
    />
    <span class="abs music__heading">{{title}}</span>
    <span class="abs link">Play Now</span>
  </div>
</template>

<script>
export default {
  name:'Music',
  props:{
    img:String,
    title:String
  }
}
</script>

<style lang="css" scoped>
.music {
  width: 30%;
  height: 334px;
  /* margin-bottom: 100px; */
  position: relative;
  margin-right: 10px;
  min-width: 27%;
  transition: 0.25s ease;
  text-align: center;
  cursor: pointer;
}
.music .music__banner {
  width: 100%;
  min-width: 70%;
}
.overlay
{
    position: absolute;

    width: 100%;
    min-width: 70%;
    background-color: rgba(0,0,0,0.9);
    height: 326px;
    opacity: 0;
    transition: 0.5s ease;
}
.music:hover .overlay
{
  opacity: 1;
}
.music:hover .abs
{
  visibility: visible;
}
.music__heading
{
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  /* left:1000px; */

  /* visibility: hidden; */
}
 .link
{
  margin: 46px;
  font-weight: bold;
  color: #1ED760;
}
.abs {
  position: absolute;
  top: 150px;
  left: 80px;
  visibility: hidden;
}
.music__heading
{
  left: 120px;
}
</style>

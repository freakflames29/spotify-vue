<template lang="html">
    <div class="subhero">
      <h1>Looking for music?</h1>
      <span>Pick up your recently played right where you left off.</span>
      <button type="button" class="btn sub__btn">launch web player</button>
    </div>
</template>

<script>
export default {
  name:'SubHero'
}
</script>

<style lang="css" scoped>
.subhero
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}
.subhero > h1
{
  font-size: 3em;
}
.subhero > span
{
  margin-top: 10px;
}
.sub__btn
{
  background-color: #fff;
  color:#616467;
  /* border: none; */
  border: 2px solid #616467;
  width: 20%;
  padding: 15px;
  font-size: 15px;
  margin-bottom: 10px;
}
.sub__btn:hover{
  background-color: #616467;
  color: #fff;
}
</style>

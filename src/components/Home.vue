<template lang="html">
  <div class="home__background">
    <div class="home__text">
      <h1>Go Premium. Be happy</h1>
    </div>
    <!-- <div class="home__button"> -->
    <button type="button" class="btn home__button">start free trial</button>
    <!-- </div> -->
  </div>
  <div class="home__terms">
    <span>
      * Terms and conditions apply. Open only to users who haven't already tried
      Premium.
    </span>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="css" scoped>
.home__background {
  background-color: #f3c05b;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.btn {
  margin-top: 20px;
  color: #fff;
  padding: 20px;
  width: 25%;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease;
}
.home__button {
  background-color: #1db954;
}
.home__button:hover {
  background-color: #1ed760;
}
.home__text {
  margin-top: 50px;
  font-size: 2.5em;
}
.home__terms {
  margin-top: -20px;
  color: #fff;
  text-align: center;
  font-size: 15px;
}
</style>

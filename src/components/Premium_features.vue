<template lang="html">
    <div class="features">
          <div class="feature__heading">
            <h1>The power of Premium</h1>
          </div>
          <div class="feature__boxes">
            <div class="first__box mr">
              <img
              src="../assets/icons/no.svg"
              alt="no interrpution">
              <h3>No interruptions</h3>
              <span>Play the music you love, ad-free.</span>
            </div>
            <div class="sec__box mr">
              <img
              src="../assets/icons/download.svg"
              alt="no interrpution">
              <h3>Offline playback</h3>
              <span>Save your data by listening offline.</span>
            </div>
            <div class="third__box mr">
              <img
              src="../assets/icons/clock.svg"
              alt="no interrpution">
              <h3>Play everywhere</h3>
              <span>Listen on your speakers, TV, and other favorite devices.</span>
            </div>
            <div class="four__box mr">
              <img
              src="../assets/icons/mob.svg"
              alt="no interrpution">
              <h3>Pay your way</h3>
              <span>Prepay with Paytm, UPI, and more.</span>
            </div>
          </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.features{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin:50px auto;
  /* margin-top: 50px; */


}
.feature__heading{
  margin-bottom: 40px;
  font-size: 1.5em;
  font-weight: bold;
}
.feature__boxes{
  justify-content: center;
  align-items: center;
  display: flex;

}
.feature__boxes img
{
  height: 100px;
  /* background-color: red; */
  padding: 10px;
  /* border-radius: 50%; */
  /* width: 100%; */
}
.mr
{
  width: 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.mr span
{
  margin-top: 10px;
}
</style>

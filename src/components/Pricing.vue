<template lang="html">
  <div class="pricing">
    <h1>Pick your Premium</h1>
    <span>Listen without limits on your phone, speaker, and other devices.</span>
    <div class="pricing__card">
      <Pricing_card
        head="Mini"
        subhead="One-time plans from ₹7 1 account"
        lone="Listen to music ad-free on mobile"
        ltwo="Group Session"
        lthree="Download 30 songs on 1 mobile device"
        cl="mi"
      />
      <Pricing_card
        head="Individual"
        subhead="One-time plans from ₹129. Auto-renew plans temporarily unavailable.
        1 account"
        lone="Listen to music ad-free"
        ltwo="Group Session"
        lthree="Download 10k songs/device on 5 devices"
      />
      <Pricing_card
        head="Duo"
        subhead="One-time plans from ₹165. Auto-renew plans temporarily unavailable.
        2 accounts"
        lone="For couples who live together"
        ltwo="Listen to music ad-free"
        lthree="Group Session"
        lfour="Download 10k songs/device, on 5 devices per account"
      />
      <Pricing_card
        head="Family"
        subhead="One-time plans from ₹199. Auto-renew plans temporarily unavailable.

        Up to 6 accounts"
        lone="For family who live together"
        ltwo="Block explicit music"
        lthree="Listen to music ad-free"
        lfour="Group Session"
        lfive="Download 10k songs/device on 5 devices"
      />
    </div>
  </div>
  <div class="discount">
    <div class="content">
      <h2>Special discount for eligible students in university</h2>
      <button type="button" class="btn cbtn">learn <br> more</button>

    </div>
  </div>
</template>

<script>
import Pricing_card from "./Pricing_card";
export default {
  name: "Pricing",
  components: {
    Pricing_card
  }
};
</script>

<style lang="css" scoped>
.pricing {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
.pricing > h1,
span {
  margin-bottom: 10px;
  margin-top: 10px;
}
.pricing > span
{
  margin-bottom: 60px;
}
.pricing__card {
  display: flex;
  width: 80%;
}
.discount{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* border: 1px solid #000; */
  margin-bottom: 20px;
  /* width:auto; */
}
.discount .content{
  display: flex;
  padding: 10px;
  /* border: 2px solid red; */
  justify-content:space-around;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
  border-radius: 10px;
}
.content h2
{
  width: 60%;
}
.cbtn
{
  background-color: #fff;
  color: #000;
  border: none;
  align-items: center;
  transition: none;
}
.cbtn:hover
{
  transform: scale(1.05);
}
.cbtn:active
{
  border: 3px solid #000;
}

</style>

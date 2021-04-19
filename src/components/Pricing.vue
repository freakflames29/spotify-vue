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
</style>

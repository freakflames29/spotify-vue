<template lang="html">
  <div class="prem__one" :style="backcss">
    <h1 class="prem__heading">{{ title }}</h1>
    <span class="prem__span">{{ subtitle }}</span>
    <span class="prem__span">{{ subtitle_two }}</span>
    <div class="prem__one__btn">
      <button type="button" class="btn prem_btnone">{{ btn }}</button>

      <button   v-if="show" type="button" class="btn prem_btntwo">
        {{ btn_two }}
      </button>
    </div>
    <span class="terms">Terms and conditions apply.</span>
  </div>

</template>

<script>
export default {
  name: "Prem_Home",
  props: {
    color: String,
    title: String,
    subtitle:String,
    subtitle_two: String,
    btn: String,
    btn_two: String,
    show:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    ec()
    {
      console.log(typeof this.view);
    }
  },
  computed: {
    backcss() {
      return {
        "--color": this.color
      };
    }
  }
};
</script>

<style lang="css" scoped>
.prem__one {
  /* margin-top: 100px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #a0c3d2; */
  background-color: var(--color);
  height: 90vh;
}
.prem__heading {
  margin-top: 80px;
  margin-bottom: 40px;
  font-size: 3em;
}
.prem__span {
  margin-bottom: 20px;
  font-weight: 600;
}
.prem__one__btn {
  display: flex;
  width: 100%;
  justify-content: center;
}
.prem_btnone {
  border: none;
  background-color: #000;
  transition: none;
  width: 300px;
  /* height: 30px; */
  /* padding: 10px; */
}
.prem_btntwo {
  border: none;
  background-color: inherit;
  color: #000;
  transition: none;
  margin-left: 10px;
}
.prem_btntwo:hover {
  transform: scale(1.05);
  background-color: #b1ceda;
}
.prem_btnone:hover {
  transform: scale(1.05);
}
.terms {
  margin-top: 50px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>

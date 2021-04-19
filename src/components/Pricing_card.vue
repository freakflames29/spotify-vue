<template lang="html">
      <div class="mini card" :class="cl">
        <h2>{{head}}</h2>
        <span class="subhead">{{subhead}}</span>
        <hr>
        <ul>
          <li>{{lone}}</li>
          <li>{{ltwo}}</li>
          <li>{{lthree}}</li>
          <li v-if='lfive'>{{lfour}}</li>
          <li v-if='lfive'>{{lfive}}</li>
        </ul>   

        <button type="button" class="btn view">view plans</button>
        <span class="terms">Terms and conditions apply.</span>
      </div>
</template>

<script>
export default {
  name:'Pricing_card',
  props:{
    head:String,
    subhead:String,
    lone:String,
    ltwo:String,
    lthree:String,
    lfour:String,
    lfive:String,
    cl:String
    // show:Boolean

  }
}
</script>

<style lang="css" scoped>
.card{
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* border: 1px solid #000;     */
  border-radius: 15px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
  margin-right: 20px;
  min-width: 25%;
  max-width: 30%;
  max-height: 30%;
  position: relative;
  /* align-items: baseline; */
  /* flex-wrap: wrap; */
}

.card h2{
  margin-bottom: 7px;

}
.mi .subhead{
  min-height: 16%;
}
.card span
{
  /* margin-bottom: 50px; */
}
hr
{
  /* position: absolute; */
  margin: 20px 0;
}
.card ul
{
  /* list-style: url('../assets/icons/ch.svg'); */
  min-height: 50%;
  /* list-style-image: url('../assets/icons/ch.svg'); */
}
.card li
{
  margin: 15px;
}

.card .view
{
  /* margin-top: 30px; */
  width: 80%;
  margin: auto;
  border: none;
  background-color: #000;
  /* height: 15%; */
  text-align: center;
  /* margin-top: 80px; */
  /* position: absolute;
  bottom: 8%; */
  padding: 13px;
  transition: none;
}
.card .view:hover
{
  transform: scale(1.05);
}
.card .terms
{
  margin-top: 20px;
  font-size: 12px;
  text-decoration: underline;
  font-weight: bold;
  /* position: absolute; */
  /* bottom: 1%; */
}
</style>

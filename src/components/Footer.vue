<template>
  <div class="container">
    <div class="footer">


      <div class="first">
          <img src="../assets/slogo.png" alt="">
      </div>
      <div class="second">
        <span  class='footer__heading'>COMPANY</span>
        <ul class="footer__list">
          <li>About</li>
          <li>Jobs</li>
          <li>For the records</li>
        </ul>

      </div>
      <div class="third">
          <span class='footer__heading'>COMMUNITIES</span>
          <ul class="footer__list">
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
          </ul>
      </div>
      <div class="fourth">
          <span class='footer__heading'>USEFUL LINKS</span>
          <ul class="footer__list">
            <li>Support</li>
            <li>Web Player</li>
            <li>Free Mobile App</li>
          </ul>
      </div>
      <!-- <div class="fifth">
        <svg>
          <img src="../assets/icons/instagram.svg" alt="insta" class="icons">

        </svg>

      </div> -->

    </div>
    <div class="misc">
      <span>legal</span>
      <span>Privacy Center</span>
      <span>Privacy Policy</span>
      <span>Cookies</span>
      <span>About Ads</span>

    </div>
    </div>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style scoped>
.container{
  padding: 100px;
  color: #fff;
  background-color: #000;
  display: flex;
  flex-direction: column;

}
.container span
{
  margin-right: 20px;
}
.container span:hover
{
  cursor: pointer;
  color: #1ED760;

}
.footer
{
  color: #fff;
  background-color: #000;
  display: flex;
  padding: 100px;
  justify-content: space-around;
}
.first
{
  width: 15%;
}
.first img
{
  width: 100%;
}

.footer__list
{
  list-style: none;
}
li
{
  cursor: pointer;
  margin-top: 20px;
}
li:hover
{
  color: #1ED760;
}
span
{
  color: #919496;
  font-size: 12px;
  font-weight: bold;
}
.footer__heading
{
  margin-bottom: 20px;
}
</style>

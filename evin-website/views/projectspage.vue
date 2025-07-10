<template>
  <div class="main-body">
    <!-- <div id="topOverlay">
      {{$t('projectspage.title')}}
    </div> -->
    <div id="mainOverlay">
      <a href="https://vinnow98.github.io/peasants/">
        <div class="peasants projectLink">
          <img src="../src/assets/images/projectspage/peasants.jpeg" alt="">
          <div class="text">
            <div class="subText">
              <b>{{$t('projectspage.peasantsTitle')}}</b>
              <br>
              {{$t('projectspage.peasantsDescription')}}
            </div>
            <div class="footerText">
              {{$t('projectspage.peasantsFooter')}}
            </div>
          </div>
        </div>
      </a>

      <a href="https://vinnow98.github.io/musicMaker.js/">
        <div class="music projectLink">
          <img src="../src/assets/images/projectspage/QuaverUp.jpeg" alt="music">
          <div class="text">
            <div class="subText">
              <b>{{$t('projectspage.musicTitle')}}</b>
              <br>
              {{$t('projectspage.musicDescription')}}
            </div>
            <div class="footerText">
              {{$t('projectspage.musicFooter')}}
            </div>
          </div>
        </div>
      </a>

      <a href="https://vinnow98.github.io/Zombies/">
        <div class="zombies projectLink">
          <img src="../src/assets/images/projectspage/zombies.png" alt="">
          <div class="text">
            <div class="subText">
              <b>{{$t('projectspage.zombiesTitle')}}</b>
              <br>
              {{$t('projectspage.zombiesDescription')}}
            </div>
            <div class="footerText">
              {{$t('projectspage.zombiesFooter')}}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProjectsPage"
}
</script>

<style>
   @import '../src/assets/css/projectspage.css';
</style>


  
<!-- </html>

<!DOCTYPE html>
<html>
  <head>
    <script src="p5.min.js"></script>
    <script src="horde.js"></script>
    <script src="zombies.js"></script>
    <script src="sketch.js"></script>

    <link rel="stylesheet"  href="style.css">
 
  </head> -->
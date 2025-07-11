<template>
    <div>
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
  
      <div class="layer1Container">
        <div class="layer1Left">
          <div class="greetings">
            {{$t('homepage.greetings')}}
          </div>
          <div class="description">
            {{$t('homepage.welcomeMessage')}}
            <br><br>
          </div>
          <div class="mainPagesContainer">
            <a class="resumeBtn redBtn" :href='cvLink()' target="_blank" rel="noopener" >
              {{$t('homepage.resumeBtn')}}
            </a>
            <router-link class="projectBtn redBtn" :to="{ name: 'Projects' }">
              {{$t('homepage.projectBtn')}}
            </router-link> 
          </div>
        </div>
        <div class="layer1Right">
          <img class="layer1Image" src="../src/assets/images/frontPagePic.jpg">
          <div class="layer1Caption">
            {{$t('homepage.imageCaption')}}
          </div>
        </div>
      </div>
      
      <div class="layer3">
        <div class="layer3Text">
          <div class="layer3Quote">
            {{$t('homepage.quote')}}
          </div>
          <div class="layer3QuoteFrom">
            {{$t('homepage.quoteAuthor')}}
          </div>
        </div>
      </div>
  
      <div class="layer4">
        <div class="layer4Bg">
          <div class="layer4Content">
            <div class="layer4Text">
              <div class="layer4TextHeading">
                {{$t('homepage.contactHeading')}}
              </div>
              <div class="layer4TextSubtext">
                {{$t('homepage.contactSubtext')}}
              </div>
            </div>
            <div class="layer4ContactContainer">
              <a href="mailto:evinwoon@gmail.com?Subject=Hello" target="_top" class="layer4Contact">
                {{$t('homepage.contactButton')}}
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <SiteFooter />
    </div>
  </template>
  
  <script setup>
  import SiteFooter from "@/components/SiteFooter.vue";
  import { useI18n } from 'vue-i18n'
  const { locale } = useI18n()

  const cvLink = ()=>
    locale.value === 'nl'?'/files/ResumeNl.pdf': '/files/ResumeEng.pdf'

  </script>
  
  <style>
  @import '../src/assets/css/homepage.css';
  </style>
  
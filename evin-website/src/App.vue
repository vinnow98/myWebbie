<template>
  <div id="app">
    <SiteNavBar />
      <div id="page-container">
        <router-view />
      </div>
  </div>
</template>

<script setup>
  import SiteNavBar from '@/components/SiteNavBar.vue';
  import {watchEffect} from 'vue'
  import {useRoute} from 'vue-router'
  import { useI18n } from 'vue-i18n'


  const { t } = useI18n()
  const route = useRoute()

  watchEffect(()=>{
    if (route.name){
      document.title = t(`title.${route.name}`,{default:"Evin John Woon"})
    }
  })

</script>

<style>
  @import './assets/css/index.css';
</style>
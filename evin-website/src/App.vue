<template>
  <div id="app">
    <SiteNavBar />
      <div id="page-container">
        <router-view />
      </div>
  </div>
</template>

<script>
import SiteNavBar from '@/components/SiteNavBar.vue';

export default {
  name: 'App',
  components:{
    SiteNavBar
  }
}
</script>

<style>
  @import './assets/css/index.css';
</style>
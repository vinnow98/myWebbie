<template>
    <div class="nav-bar-wrapper">
    <div class="headerBar">
        <div class="leftBarContainer">
            <router-link :to="{ name: 'Home' }">
                <img class="logoImage" src="../assets/icons/navBar/myIcon.jpg">
            </router-link> 
            <div id="Evinwoon">
                {{ $t(`pages.${route.name}`) ||'Evin John Woon'}}
            </div>
        </div>

        <div class="rightBarContainer">
            <div class="rightBarStuff">
                <router-link :to="{ name: 'Under Construction' }">
                <a class="section">
                    <img class="smallIcon" src="../assets/icons/navBar/musicIcon.png" alt="music">
                    <div class="iconTag">{{ $t('SiteNavBar.music')}}</div>
                </a>
            </router-link>
                <router-link :to="{ name: 'Under Construction' }">
                    <a class="section">
                        <img class="smallIcon" src="../assets/icons/navBar/cookingIcon.png" alt="cooking">
                        <div class="iconTag">{{ $t('SiteNavBar.cooking')}}</div>
                    </a>
                </router-link>
                <router-link :to="{ name: 'Under Construction' }">
                <a class="section">
                    <img class="smallIcon" src="../assets/icons/navBar/travelIcon.png" alt="travel">
                    <div class="iconTag">{{ $t('SiteNavBar.travel')}}</div>
                </a>
            </router-link>
            <div class="translation">
                    <img src="../assets/images/flags/nl.png" @click="changeLanguage('nl')" :class="{'active-flag':locale === 'nl'}">
                    <img src="../assets/images/flags/eng.png" @click="changeLanguage('en')" :class="{'active-flag':locale === 'en'}">
            </div>
            </div>
        </div>
    </div>
    <!-- hamburgerMenu section -->
    <label class="hamburger-menu">
        <input type="checkbox">
    </label>
    <aside class = "sidebar">
        <nav>
            <router-link :to="{ name: 'Under Construction' }">
            <a class="section">
                    <img class="smallIcon" src="../assets/icons/navBar/musicIcon.png" alt="music">
                    <div class="iconTag">{{ $t('SiteNavBar.music')}}</div>
                </a>
            </router-link>
                <router-link :to="{ name: 'Under Construction' }">
                <a class="section">
                    <img class="smallIcon" src="../assets/icons/navBar/cookingIcon.png" alt="cooking">
                    <div class="iconTag">{{ $t('SiteNavBar.cooking')}}</div>
                </a>
            </router-link>
                <router-link :to="{ name: 'Under Construction' }">
                <a class="section">
                    <img class="smallIcon" src="../assets/icons/navBar/travelIcon.png" alt="travel">
                    <div class="iconTag">{{ $t('SiteNavBar.travel')}}</div>
                </a>
            </router-link>
            <div class="translation">
                    <img src="../assets/images/flags/nl.png" @click="changeLanguage('nl')" :class="{'active-flag':locale === 'nl'}">
                    <img src="../assets/images/flags/eng.png" @click="changeLanguage('en')" :class="{'active-flag':locale === 'en'}">
            </div>
        </nav>
    </aside>
</div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import {useRoute} from 'vue-router'

const { locale } = useI18n()
const route = useRoute()

function changeLanguage(lang) {
    locale.value = lang
}
</script>

<style scoped>
 @import '../assets/css/sitenavbar.css';
</style>

<template>
    <div>
    <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
    <!-- <SiteNavBar /> -->
    <div class="layer1Container">
        <div class="layer1Left">
            <div class="greetings">
                Me and other things...
            </div>
            <div class="description">
                Hey there! If you're here looking for life-changing advice or the secret to a perfect soufflé, you might be in the wrong place. This is a slice of my life. Enjoy!
                <br>
                <br>
                <p></p>
            </div>
            <div class="mainPagesContainer">
                <a class="resumeBtn redBtn" href="otherPages/mainPages/resume/resume.html">My Resume</a>
                    <router-link class="projectBtn redBtn" :to="{name: 'Projects'}"> My Projects</router-link> 
            </div>
        </div>
        <div class="layer1Right">
            <img class="layer1Image" src="../src/assets/images/frontPagePic.jpg">
            <div class="layer1Caption">
                Me n' urinal,Netherlands
            </div>
        </div>
    </div>
    
    <div class="layer3">
        <div class="layer3Text">
            <div class="layer3Quote">
            "Be Yourself, Everyone Else is Already Taken."
            </div>
            <div class="layer3QuoteFrom">
            OSCAR WILDE
            </div>
        </div>
    </div>

    <div class="layer4">
        <div class="layer4Bg">
            <div class="layer4Content">
                <div class="layer4Text">
                    <div class="layer4TextHeading">
                     Contact me!
                    </div>
                    <div class="layer4TextSubtext">
                        Please be nice to my secretary because 1. he's a
                        volunteer and 2. well .... he's me.
                    </div>
                </div>
                <div class="layer4ContactContainer">
                    <a href="mailto:evinwoon@gmail.com?Subject=Hello" target="_top"
                    class="layer4Contact" >
                        Contact!      
                    </a>
                </div>
            </div>
        </div>
    </div>
    <SiteFooter/>
</div>
</template>

<script>
// import SiteNavBar from "@/components/SiteNavBar"
import SiteFooter from "@/components/SiteFooter.vue";
export default {
  name: 'App',
  components:{
    SiteFooter
  }
}
</script>

<style>
 @import '../src/assets/css/homepage.css';
</style>
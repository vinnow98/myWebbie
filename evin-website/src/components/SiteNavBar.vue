<template>
    <div class="nav-bar-wrapper">
    <div class="headerBar">
        <div class="leftBarContainer">
                <img class="logoImage" src="../assets/icons/navBar/myIcon.jpg">
            <div id="Evinwoon">
                Evin John Woon
            </div>
        </div>

        <div class="rightBarContainer">
            <div class="rightBarStuff">
                <a class="section" href="otherPages/underContruction/underContruction.html">
                    <img class="smallIcon" src="../assets/icons/navBar/musicIcon.png" alt="music">
                    <div class="iconTag">Music</div>
                </a>
                <a class="section" href="otherPages/underContruction/underContruction.html">
                    <img class="smallIcon" src="../assets/icons/navBar/cookingIcon.png" alt="cooking">
                    <div class="iconTag">Cooking</div>
                </a>
                <a class="section" href="otherPages/underContruction/underContruction.html">
                    <img class="smallIcon" src="../assets/icons/navBar/travelIcon.png" alt="travel">
                    <div class="iconTag">Travel</div>
                </a>
            </div>
        </div>
    </div>
    <!-- hamburgerMenu section -->
    <label class="hamburger-menu">
        <input type="checkbox">
    </label>
    <aside class = "sidebar">
        <nav>
            <a class="section" href="otherPages/underContruction/underContruction.html">
                    <img class="smallIcon" src="../assets/icons/navBar/musicIcon.png" alt="music">
                    <div class="iconTag">Music</div>
                </a>
                <a class="section" href="otherPages/underContruction/underContruction.html">
                    <img class="smallIcon" src="../assets/icons/navBar/cookingIcon.png" alt="cooking">
                    <div class="iconTag">Cooking</div>
                </a>
                <a class="section" href="otherPages/underContruction/underContruction.html">
                    <img class="smallIcon" src="../assets/icons/navBar/travelIcon.png" alt="travel">
                    <div class="iconTag">Travel</div>
                </a>
        </nav>
    </aside>
</div>
</template>
<script>
export default{
    name:"SiteNavBar"
}
</script>

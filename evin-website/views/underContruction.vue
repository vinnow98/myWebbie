<template>
    <body>
    <h1>Under Construction</h1>
    <p>I'm working on something exciting! Or y'know, sometimes life gets in the way </p>
    <img class="construction-image" src="/favicon.ico" alt="Under Construction" />
    <p>Stay tuned for updates.</p>
    <router-link :to="{name: 'Home'}"> Home</router-link>
</body>
</template>
<script>
// import Homepage from './homepage.vue';

export default{
    name:'underConstruction'
}
</script>
<style scoped>
    body {
        background-color: #ffdb4d; /* Bright yellow background */
        text-align: center;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    h1 {
        color: #ff3366; /* Pink header text */
        font-size: 3rem;
    }

    p {
        color: #333;
        font-size: 1.5rem;
    }

    .construction-image {
        margin-top: 20px;
        width: 200px;
    }

    a {
        text-decoration: none;
        background-color: #ff3366; /* Pink button background */
        color: #fff; /* White button text */
        padding: 10px 20px;
        font-size: 1.2rem;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    a:hover {
        background-color: #ff1744; /* Darker pink on hover */
    }
</style>

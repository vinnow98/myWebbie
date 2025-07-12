<template>
    <div class="main-body">
    <p>{{ $t('underConstruction.text1') }}</p>
    <img class="construction-image" src="/favicon.ico" alt="Under Construction" />
    <p>{{ $t('underConstruction.text2') }}</p>
    <router-link :to="{name: 'Home'}"> Home</router-link>
    </div>
</template>
<script setup>

</script>
<style scoped>
    .main-body {
        background-color: #ffdb4d; /* Bright yellow background */
        text-align: center;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
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

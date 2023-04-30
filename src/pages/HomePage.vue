<template>
    <div class="homepage-wrapper">
        <div class="main-logo-wrapper">
            <img
                class="main-logo"
                src="https://static.wixstatic.com/media/2460f4_0fe0a6ceccfa4b0791c8b0f0dba9add3~mv2.png/v1/fill/w_210,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2460f4_0fe0a6ceccfa4b0791c8b0f0dba9add3~mv2.png"
                srcset="https://static.wixstatic.com/media/2460f4_0fe0a6ceccfa4b0791c8b0f0dba9add3~mv2.png/v1/fill/w_210,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2460f4_0fe0a6ceccfa4b0791c8b0f0dba9add3~mv2.png"
            />
        </div>
        <h1>Hello, Welcome !</h1>
        <p class="welcome-msg">Check Your Loyalty Points & Rewards</p>
        <contact-num-form />
    </div>
</template>

<script>
export default {
    name: 'HomePage',
}
</script>

<script setup>
import ContactNumForm from "@/components/ContactNumForm.vue";
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.homepage-wrapper {
    padding: 15px;
    width: 370px;
    margin: 0 auto;
}

.main-logo-wrapper {
    display: flex;
    justify-content: center;
    margin: 70px 0;
}

.main-logo {
    width: 160px;
}

.welcome-msg {
    color: $orange;
    font-weight: 500;
    margin-bottom: 70px;
}
</style>
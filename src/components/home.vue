<template>
    <Header />
    <h1>home</h1>
</template>
<script>
import Header from './header.vue'
export default {
    name: "Home-view",
    components:{
        Header
    },
    async mounted() {
        let user = await localStorage.getItem('user-data')
        console.log("user", user);
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>
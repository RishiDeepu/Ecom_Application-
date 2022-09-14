<template>
    <div class="navbar">
        <img alt="logo" class="logoimg" src="../assets/logo2r.png">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Blog</a>
        <a href="#" v-on:click="logout">LogOut</a>
    </div>
</template>
<script>
export default {
    name:"Header-view",
    methods:{
        logout(){
            localStorage.clear()
            this.$router.push({name: 'Login'})
        }
    }
}
</script>
<style>
    @import '../style/nav.css'
</style>
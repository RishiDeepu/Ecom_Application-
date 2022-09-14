<template>
    <img alt="logo" class="logoimg" src="../assets/logo2r.png">
    <h1>Login</h1>
    <div class="form">
        <input type="text" placeholder="UserName" v-model="userName">
        <input type="password" placeholder="Password" v-model="password">
        <button v-on:click="login">Login</button><br>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "Login-view",
    data() {
        return {
            userName: '',
            password: ''
        }

    },
    methods: {
        async login() {
            console.log("userName", this.userName);
            console.log("password", this.password);
            let log = await axios.get(
                `http://localhost:1337/login?userName=${this.userName}&password=${this.password}`
            )
            console.log("login data", log);
            if (log.status == 200) {
                localStorage.setItem('user-data', JSON.stringify(log.data))
                this.$router.push({ name: "Home" })
            }
            // else{

            // }

        }
    },
    async mounted() {
        let user = await localStorage.getItem('user-data')
        if (user) {
            this.$router.push({ name: "Home" })
        }

    }
}
</script>
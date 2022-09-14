<template>
    <img alt="logo" class="logoimg" src="../assets/logo2r.png">
    <h3>Signup</h3>
    <div class="form">
        <input type="text" placeholder="UserName" v-model="userName">
        <input type="password" placeholder="Password" v-model="password">
        <input type="email" placeholder="Email" v-model="email">
        <input type="phone" placeholder="Phone No" v-model="phnNo">
        <button v-on:click="signUp">Submit</button>
    </div>
    <p class="already">Already have an account? <router-link class="link" to="/login">Login</router-link>
    </p>



</template>
<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data() {
        return {
            userName: '',
            password: '',
            email: '',
            phnNo: ''
        }

    },
    methods: {
        async signUp() {
            try {
                console.log('name', this.userName);
                console.log('password', this.password);
                console.log('email', this.email);

                let reg = await axios.post(
                    'http://localhost:1337/register',
                    {
                        userName: this.userName,
                        password: this.password,
                        email: this.email,
                        phone: this.phnNo
                    }
                )
                console.log("result", reg);
                if (reg.status == 200) {
                    localStorage.setItem('user-data', JSON.stringify(reg))
                    this.$router.push({ name: "Home" })
                }
                else {
                    alert("not fount")

                }
            } catch (e) {
                console.log("error", e);
            }
        }

    },
    async mounted() {
        let user = await localStorage.getItem('user-data')
        if (user) {
            this.$router.push({ name: 'Home' })

        }

        // let user = await axios.get(`http://localhost:1337/findOne?email=${this.email}`)
        // console.log("user", user);
        // if (user) {
        //     this.$router.push({ name: 'Home' })

        // }

    }

}
</script>
<style >
@import '../style/signup.css'
</style>
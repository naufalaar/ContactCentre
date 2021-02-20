<template>
<div class="background">
  <b-container class="middle">
    <b-row align-h="center" align-v="center" class="py-5">
    <b-col align-self="center" cols="6">
        
    <b-card-group deck>
        
      <b-card bg-variant="light" text-variant="white" class="text-center">
        <b-card-text>
            <div class="py-5 logo">
            <b-img class="logo" src="../assets/logo.svg" alt="Image 1"></b-img>
            <h1 class="text">Contact Centre</h1>   
            </div>  
            <b-form @submit.prevent="validateLogin" class="px-5 pb-5">
      <b-form-group
        id="input-group-1"
        label-for="input-1"
      >
      
        <b-form-input
        v-model="credentials.username"
          id="input-1"
          type="text"
          placeholder="Enter AD Username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
        v-model="credentials.password"
          id="input-2"
          type="password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>

      <p v-if="invalid" class="text-danger"> Invalid Credentials</p>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
        </b-card-text>
      </b-card>
    </b-card-group>
    </b-col>
    </b-row>
  </b-container>
</div>
    
</template>

<script>

import axios from 'axios';
import router from "../router";

export default {
    name: "Login",
    data(){
        return{
        invalid: false,
        credentials:{
            username: '', 
            password: ''
            }
        }
    },
    methods:{
        async validateLogin(){
            console.log(this.credentials.username + " " + this.credentials.password);
            await axios.post("http://localhost:8082/login", {username: this.credentials.username, password: this.credentials.password})
            .then(response => {
                this.$store.dispatch('setToken',response.headers.authorization.split(' ')[1]);
                router.push('/search');
                })
            .catch(response => {console.log(response); this.invalid = true});
        }

    }
    
}
</script>

<style scoped>

.background{
    background-color: #2f3c48;
    position:fixed;
    padding:0;
    margin:0;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
}

.middle{
    position: relative;
    top: 25%;
    bottom: 25%;

}

.text{
   color: var(--primary);
}

</style>
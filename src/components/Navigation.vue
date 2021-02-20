<template>
    <b-navbar toggleable="lg" type="dark" variant="secondary" class="py-4">
        <b-navbar-brand to="/"><img src="../assets/logo.svg"/></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                        <b-nav-item to="/search" exact exact-active-class="active" class="h3" >CUSTOMER SEARCH</b-nav-item>
                        <b-nav-item to="/requests" exact exact-active-class="active" class="h3">REQUESTS</b-nav-item>
            </b-navbar-nav>
        <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown class="active" right no-caret>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <!-- <i class="fas fa-user"></i>--> <b-icon icon="person-badge-fill" aria-hidden="true"></b-icon> Nawfal Ahmad 
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item v-on:click="logout()">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import router from "../router";

export default{
    
    name: "Navigation",
    methods: {
        logout(){
            this.$store.state.jwtToken='';
            sessionStorage.clear();
            router.push('/');
        }
    }
}
</script>





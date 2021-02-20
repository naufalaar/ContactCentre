<template>
  <div>
    <Navigation />
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="10"><SearchPanel @searchResults="searchResults($event)"/></b-col>
      </b-row>
      <b-row align-h="center">
        <b-col><SearchResults :customers="content.customers" v-if="content.display"/></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import SearchPanel from '../components/SearchPanel.vue';
import SearchResults from "../components/SearchResults.vue";
export default {
  name: "Home",
  components: {
    Navigation,
    SearchPanel,
    SearchResults
  },
  data(){
    return {
      content: {
        customers: [],
        display: false
      }
    }
  },
  methods: {
    searchResults(content){
      console.log(content);
      this.content.display = content.display;
      this.content.customers = content.customers;
    }
  }
};
</script>

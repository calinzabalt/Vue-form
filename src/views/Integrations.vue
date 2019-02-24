<template>
  <v-container>
  <div class="integration">
    <h1>csdafsad</h1>
     <v-layout row wrap v-for="integration in integrations" :key="integration.id" class="mb-2">
    
     <v-card-title primary-title>
                  <div>
                    <h1 class="white--text mb-0">{{ integrations.Name}}</h1>
                    <div>{{ integration.date }}</div>
                    <div>{{ integration.Customer }}</div>
                    <div>{{ integration.Description }}</div>
                    <div>{{ integration.ProductName}}</div>
                  </div>
                </v-card-title>
     </v-layout>
  </div>
  </v-container>
</template>


<style>
.integration {
  margin-top: 60px;
}
</style>

<script>
  export default {
    computed: {
      integration () {
        return this.$store.getters.loadedIntegrations
      }
    }
  }
</script>



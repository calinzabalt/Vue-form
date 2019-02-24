<template>
  <v-app>
    <div id="app">
    <Toolbar />
    <router-view/>
  </div>

    <v-content>
      
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'

export default {
  name: 'App',
  components: {
    Toolbar
    
  },
  data () {
    return {
      //
    }
  }
}
</script>

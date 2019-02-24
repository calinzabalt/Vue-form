<template>
  <v-container>
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="primary" dark>Create new integration</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Create new integration</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
             <form @submit.prevent="onCreateIntegration">
              <v-layout wrap>
              <v-flex xs12>
               <v-text-field
                name="Name"
                label="Name *"
                id="Name"
                v-model="Name"
                required></v-text-field>
              </v-flex>         
                                        
              <v-flex xs12>
                <v-autocomplete
                  :items="['Customer A', 'Customer B', 'Customer C', 'Customer D', 'Customer E', 'Customer F']"
                  name="Customer"
                  label="Customer *"
                  id="Customer"
                  v-model="Customer"
                  multiple
                  ></v-autocomplete>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  name="Description"
                  label="Description "
                  id="Description"
                  v-model="Description"
                  multi-line></v-text-field>
              </v-flex>

              <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Next</v-btn>

              <v-flex xs12>
                <v-text-field 
                name="Url"
                label="Url"
                id="Url"
                v-model="Url"
                multiple-line required></v-text-field>
              </v-flex>

              <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Back</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Next</v-btn>

              <v-flex xs12>
                <v-autocomplete
                  :items="['ProductId *', 'ProductName *', 'ProductDescripti', 'InStock', 'Price *', 'OnSalePrice', 'RetailPrice', 'LastDelivery', 'BrandId', 'BrandName', 'ProductUrl *', 'ImageUrl']"
                  name="ProductNumber"
                  label="ProductNumber"
                  id="ProductNumber"
                  v-model="ProductNumber"
                  multiple
                ></v-autocomplete>
              </v-flex>

              <v-flex xs12>
                <v-autocomplete
                  :items="['desc', 'desc 2', 'isInStock']"
                  name="name"
                  label="name"
                  id="name"
                  v-model="name"
                  multiple
                ></v-autocomplete>
              </v-flex>

              <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Back</v-btn>
              
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Create</v-btn>
              
            </v-layout>
            </form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
      dialog: false,
      Name: '',
      Customer: '',
      Description: '',
      Url: '',
      ProductNumber: '',
      name: ''
      
    }
  },
    computed: {
      formIsValid () {
        return this.Name !== '' &&
               this.Customer !== '' &&
               this.Url !== '' &&
               this.ProductNumber !== '' 
                                                         
      }
    },
    methods: {
      onCreateIntegration () {
        if (!this.formIsValid) {
          return
        }
        const integrationData = {
              Name: this.title,
              Customer: this.Customer,
              Description: this.Description,
              Url: this.Url,
              ProductNumber: this.ProductNumber,
              name: this.name,
              date: new Date()
        }
        this.$store.dispatch('createIntegration', integrationData)
        this.$router.push('../view/Integrations')
      }
    }
  }
</script>


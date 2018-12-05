<template>
  <v-flex
    xs6
  >
    <v-card>
      <v-img
        :src="recipe.src"
        height="200px"
      >
        <v-container
          fill-height
          fluid
          pa-2
        >
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline white--text" v-text="recipe.title"></span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>

      <v-card-actions>
        <v-spacer></v-spacer>
        <h3>{{recipe.kcalByPerson}} kcal / person</h3>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'recipe-card',
  props: {
    recipe: {
      type: Object,
      default: function () {
        return { kcalByPerson: 2 }
      }
    }
  }
}
</script>

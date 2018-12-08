<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row wrap>
      <v-flex xs12>
        <v-btn large to='/recipe/new'>Add recipe</v-btn>
      </v-flex>
      <v-flex xs12>
        <h1>Last recipes :</h1>
      </v-flex>
      <recipe-card
        v-for="recipe in lastRecipes"
        :key="recipe.title"
        :recipe="recipe"
        :to='`/recipe/${recipe.id}`'
      />
    </v-layout>
  </v-container>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    RecipeCard
  },
  computed: {
    ...mapGetters('recipes', [
      'lastRecipes'
    ])
  }
}
</script>

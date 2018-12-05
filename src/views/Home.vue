<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row wrap>
      <v-flex xs12>
        <v-btn large>Add recipe</v-btn>
      </v-flex>
      <v-flex xs12>
        <h1>Last recipes :</h1>
      </v-flex>
      <recipe-card
        v-for="recipe in recipes"
        :key="recipe.title"
        :recipe="recipe"
      />
    </v-layout>
  </v-container>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue'

export default {
  name: 'home',
  components: {
    RecipeCard
  },
  data: () => ({
    recipes: [
      { title: 'Tartiflette', src: `${process.env.BASE_URL}img/tartiflette.jpg`, kcalByPerson: 480 },
      { title: 'Salade', src: `${process.env.BASE_URL}img/salade.jpg`, kcalByPerson: 214 },
      { title: 'Tian', src: `${process.env.BASE_URL}img/tian.jpg`, kcalByPerson: 320 },
      { title: 'Pizza', src: `${process.env.BASE_URL}img/pizza.jpg`, kcalByPerson: 395 }
    ]
  })
}
</script>

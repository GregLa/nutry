<template>
  <v-container>

    <v-card class="mb-3">
      <v-layout row wrap>
        <v-flex xs12 sm6 pa-3>
          <v-text-field
            label="Nom"
            v-model="recipe.name"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 pa-3>
          <v-text-field
            label="Nb personnes"
            type="number"
            v-model.number="recipe.persons"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card class="mb-3">
      <v-card-title>
        <h2>Ingrédients</h2>
      </v-card-title>
      <v-divider></v-divider>
      <v-layout row wrap>
        <v-layout
          v-for="(ingredient, index) in recipe.composition"
          :key="'ingredient-' + index"
          xs12
          pa-3
          >
          <v-flex xs12 sm6 pr-3>
            <v-autocomplete
              label="Nom"
              v-model="ingredient.ingredientId"
              :items="ingredients"
              item-text="name"
              item-value="id"
              disabled
            ></v-autocomplete>
          </v-flex>
          <v-flex xs12 sm6 pl-3>
            <v-text-field
              label="Quantité (g)"
              v-model="ingredient.grams"
            />
          </v-flex>
        </v-layout>
      </v-layout>
    </v-card>

    <v-card>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content><h2>Informations nutritionnelles</h2></v-list-tile-content>
          <v-list-tile-content class="align-end">/ 100g</v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-content>Calories (kCal) :</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ getKCal }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Protéines :</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ getProtein }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Glucides :</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ getCarbohydrates }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Lipides :</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ getLipids }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Sucres :</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ getSugars }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>AG saturés :</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ getSatturedFatAcids }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>Sel :</v-list-tile-content>
            <v-list-tile-content class="align-end">{{ getSalt }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-card>

  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import { deepCopy } from '@/utils'
import store from '@/store'
export default {
  name: 'recipe',

  computed: {
    ...mapState({
      ingredients: state => state.ingredients.ingredients
    }),

    getKCal () {
      // return this.recipe.composition.reduce(ingr)
      return 'XXX'
    },

    getProtein () {
      return 'XXX'
    },

    getCarbohydrates () {
      return 'XXX'
    },

    getLipids () {
      return 'XXX'
    },

    getSugars () {
      return 'XXX'
    },

    getSatturedFatAcids () {
      return 'XXX'
    },

    getSalt () {
      return 'XXX'
    }
  },

  data: () => ({
    recipe: {}
  }),

  // Navigation guard
  async beforeRouteEnter (to, from, next) {
    const id = to.params.id
    if (id === 'new') {
      const recipe = await store.getters['recipes/getRecipeModel']
      next(vm => vm.setRecipe(recipe))
    } else if (!isNaN(Number(id))) {
      const recipe = await store.getters['recipes/getRecipe'](Number(id))
      if (recipe) {
        next(vm => vm.setRecipe(deepCopy(recipe)))
      } else {
        next('/reject')
      }
    } else {
      next('/reject')
    }
  },

  methods: {
    setRecipe (recipe) {
      this.recipe = recipe
    }
  },

  mounted () {

  }
}
</script>

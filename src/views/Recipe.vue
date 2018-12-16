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
              @change="$forceUpdate()"
            />
          </v-flex>
        </v-layout>
      </v-layout>
    </v-card>

    <v-card>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content><h2>Informations nutritionnelles</h2></v-list-tile-content>
          <v-list-tile-content class="align-end">
            <v-flex xs5>
              <v-select
                :items="scales"
                v-model="scale"
                item-value="value"
                @change="$forceUpdate()"
              />
            </v-flex>
          </v-list-tile-content>
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
import { mapState, mapGetters } from 'vuex'
import { deepCopy } from '@/utils'
import store from '@/store'
export default {
  name: 'recipe',

  computed: {
    ...mapState({
      ingredients: state => state.ingredients.ingredients
    }),

    ...mapGetters({
      getIngredient: 'ingredients/getIngredient'
    }),

    totalWeight () {
      return this.recipe.composition.reduce((accumulator, currentValue) => accumulator + currentValue.grams, 0)
    },

    getKCal () {
      const totalKcal = this.getNutritionnalTotalByValueType('kcal')
      return this.getNutrionValueByScale(totalKcal).toFixed(2)
    },

    getProtein () {
      const totalProtein = this.getNutritionnalTotalByValueType('protein')
      return this.getNutrionValueByScale(totalProtein).toFixed(2)
    },

    getCarbohydrates () {
      const totalCarbohydrates = this.getNutritionnalTotalByValueType('carbohydrates')
      return this.getNutrionValueByScale(totalCarbohydrates).toFixed(2)
    },

    getLipids () {
      const totalLipids = this.getNutritionnalTotalByValueType('lipids')
      return this.getNutrionValueByScale(totalLipids).toFixed(2)
    },

    getSugars () {
      const totalSugars = this.getNutritionnalTotalByValueType('sugars')
      return this.getNutrionValueByScale(totalSugars).toFixed(2)
    },

    getSatturedFatAcids () {
      const totalSatturedFatAcids = this.getNutritionnalTotalByValueType('saturatedFatAcids')
      return this.getNutrionValueByScale(totalSatturedFatAcids).toFixed(2)
    },

    getSalt () {
      const totalSalt = this.getNutritionnalTotalByValueType('salt')
      return this.getNutrionValueByScale(totalSalt).toFixed(2)
    }
  },

  data: () => ({
    recipe: {},
    scale: 'total',
    scales: [{ text: '/ 100g', value: '100g' }, { text: '/ personne', value: 'persons' }, { text: 'Total', value: 'total' }]
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
    },

    getNutritionnalTotalByValueType (type) {
      if (this.recipe.composition === undefined) return 0

      return this.recipe.composition.reduce((accumulator, currentIngredient) => {
        const ingredient = this.getIngredient(currentIngredient.ingredientId)
        if (ingredient) {
          const totalForThisNutritionValue = (currentIngredient.grams / 100) * ingredient[type]
          return accumulator + totalForThisNutritionValue
        } else {
          // Display error message
          return accumulator
        }
      }, 0)
    },

    getNutrionValueByScale (value) {
      switch (this.scale) {
        case '100g':
          return (100 * value) / this.totalWeight
        case 'persons':
          return value / this.recipe.persons
        default:
          return value
      }
    }
  },

  mounted () {

  }
}
</script>

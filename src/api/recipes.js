/**
 * Mocking client-server processing
 */
const _recipes = [
  {
    id: 0,
    name: 'Tartiflette',
    imgSrc: `${process.env.BASE_URL}img/tartiflette.jpg`,
    composition: [
      {
        ingredientId: 0,
        grams: 500
      },
      {
        ingredientId: 1,
        grams: 1000
      },
      {
        ingredientId: 2,
        grams: 200
      },
      {
        ingredientId: 3,
        grams: 100
      },
      {
        ingredientId: 4,
        grams: 50
      }
    ],
    persons: 4,
    kcalByPerson: 480
  },
  { id: 1, name: 'Salade', imgSrc: `${process.env.BASE_URL}img/salade.jpg`, kcalByPerson: 214 },
  { id: 2, name: 'Tian', imgSrc: `${process.env.BASE_URL}img/tian.jpg`, kcalByPerson: 320 },
  { id: 3, name: 'Pizza', imgSrc: `${process.env.BASE_URL}img/pizza.jpg`, kcalByPerson: 395 }
]

export default {
  getRecipes (callback) {
    setTimeout(() => callback(_recipes), 100)
  }
}

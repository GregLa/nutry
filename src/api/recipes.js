/**
 * Mocking client-server processing
 */
const _recipes = [
  { id: 0, title: 'Tartiflette', imgSrc: `${process.env.BASE_URL}img/tartiflette.jpg`, kcalByPerson: 480 },
  { id: 1, title: 'Salade', imgSrc: `${process.env.BASE_URL}img/salade.jpg`, kcalByPerson: 214 },
  { id: 2, title: 'Tian', imgSrc: `${process.env.BASE_URL}img/tian.jpg`, kcalByPerson: 320 },
  { id: 3, title: 'Pizza', imgSrc: `${process.env.BASE_URL}img/pizza.jpg`, kcalByPerson: 395 }
]

export default {
  getRecipes (callback) {
    setTimeout(() => callback(_recipes), 100)
  }
}

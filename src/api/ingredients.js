/**
 * Mocking client-server processing
 */
const _ingredients = [
  { id: 0, name: 'Reblochon', kJ: 1350, kcal: 326, protein: 19.9, carbohydrates: null, lipids: 27.4, sugars: 0, saturatedFattyAcids: 18.8, salt: 1.27 },
  { id: 1, name: 'Pomme de terre', kJ: 325, kcal: 76.6, protein: 2.16, carbohydrates: 15.2, lipids: 0.18, sugars: 0.73, saturatedFattyAcids: 0.038, salt: 0.016 },
  { id: 2, name: 'Lardons', kJ: 1150, kcal: 277, protein: 14.7, carbohydrates: 4.8, lipids: 22.1, sugars: 0.9, saturatedFattyAcids: 8.25, salt: 2.59 },
  { id: 3, name: 'Oignons', kJ: 146, kcal: 34.6, protein: 1.3, carbohydrates: 6.2, lipids: 0.2, sugars: 4, saturatedFattyAcids: 0.024, salt: 0.021 },
  { id: 4, name: 'Crème fraîche 30%', kJ: 1210, kcal: 295, protein: 2.42, carbohydrates: 2.19, lipids: 30.5, sugars: 2.19, saturatedFattyAcids: 21.8, salt: 0.066 }
]

export default {
  getIngredients (callback) {
    setTimeout(() => callback(_ingredients), 100)
  }
}

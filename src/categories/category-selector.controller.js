export default class CategorySelectorController {

  categories = []
  selectedCategories = []

  toggle(category) {
    let selectedCategories = this.selectedCategories;

    let index = selectedCategories.indexOf(category);
    if (index < 0) {
      selectedCategories.push(category)
    } else {
      selectedCategories.splice(index, 1)
    }
  }

  isSelected(category) {
    return this.selectedCategories.includes(category);
  }

}

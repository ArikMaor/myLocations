export default class CategorySelectorController {

  categories = []
  selectedCategories = []

  constructor(categoryService) {
    'ngInject';

    Object.assign(this, {
      categoryService
    });
  }

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

  addNewCategory(category) {
    this.categoryService.add(category);
  }
}

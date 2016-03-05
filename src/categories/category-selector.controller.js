export default class CategorySelectorController {

  newCategoryName = ''

  constructor(categoryService, selectedCategoriesService) {
    'ngInject';

    Object.assign(this, {
      categories: categoryService.getAll(),
      selectedCategories: selectedCategoriesService.list,

      categoryService,
      selectedCategoriesService
    });
  }

  toggle(category) {
    this.selectedCategoriesService.toggle(category);
  }

  isSelected(category) {
    return this.selectedCategoriesService.isSelected(category);
  }

  addNewCategory() {
    let category = this.newCategoryName;
    this.categoryService.add(category);
    this.selectedCategoriesService.select(category);
    this.newCategoryName = '';
  }

  delete(category) {
    if (confirm(`Are you sure you want to delete "${category}"?`)) {
      this.categoryService.remove(category);
    }
  }
}

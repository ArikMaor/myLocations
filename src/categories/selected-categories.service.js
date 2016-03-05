export default class SelectedCategoriesService {

  list = []

  constructor(categoryService) {
    this.list = categoryService.getAll();
  }

  select(category) {
    let selectedCategories = this.list;
    if (!selectedCategories.includes(category)) {
      selectedCategories.push(category);
    }
  }

  unselect(category) {
    let selectedCategories = this.list;
    let index = selectedCategories.indexOf(category);
    if (index >= 0) {
      selectedCategories.splice(index, 1);
    }
  }

  toggle(category) {
    let selectedCategories = this.list;
    let index = selectedCategories.indexOf(category);
    if (index < 0) {
      selectedCategories.push(category);
    } else {
      selectedCategories.splice(index, 1);
    }
  }

  isSelected(category) {
    return this.list.includes(category);
  }
}

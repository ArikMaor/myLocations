export default class CategoriesController {

  toggle(category) {
    category.selected = !category.selected;
  }
}

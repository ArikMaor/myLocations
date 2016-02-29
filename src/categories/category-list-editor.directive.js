import template from './category-list-editor.html'

export default function CategoryListEditor() {
  'ngInject';

  return  {
    restrict: 'E',
    controller: 'CategoryListEditorController',
    controllerAs: 'categoryListEditor',
    template
  };
}

const field = (function(){

  function genDOMField(row, column) {
    const fieldDOM = document.createElement('div');
    fieldDOM.classList.add('field');
    fieldDOM.dataset.row = row;
    fieldDOM.dataset.column = column;
    return fieldDOM;
  }

  function updateField() {
    changeSelected.call(this);
  };


  function changeSelected() {
    this.selected = !this.selected;
  };

  const Field = function(row, column) {
    this.selected = false;
    this.row = row;
    this.column = column;
    this.owner = null;
    this.element = genDOMField(row, column);
    this.element.addEventListener('click', updateField.bind(this));
  };

  var proto = Field.prototype;


  proto.setOwner = function(owner) {
    this.owner = owner;
  };

  proto.getElement = function() {
    return this.element;
  }

  const create = (row, column) => {
    return new Field(row, column);
  };

  return {
    create: create,
  };

})();

const field = (function(){

  const Field = function(row, column) {
    this.selected = false;
    this.row = row;
    this.column = column;
    this.owner = null;
  }

  var proto = Field.prototype;

  proto.changeSelected = function() {
    this.selected = !this.selected;
  }

  proto.setOwner = function(owner) {
    this.owner = owner;
  }

  const create = (row, column) => {
    return new Field(row, column);
  };

  return {
    create: create,
  }

})();

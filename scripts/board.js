const board = (function() {

  function genFields() {
    const tempArr = [];
    for(var i = 0; i < this.rows; i++){
      for(var j = 0; j < this.columns; j++){
        tempArr.push(field.create(i, j));
      }
    }
    return tempArr;
  };

  const Board = function(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.fields = genFields.call(this);
  };

  // TODO: define square dimension, take height and width then create as many fields as it's possible
  const create = () => {
    return new Board(5, 4);
  };

  return {
    create: create,
  };

})();

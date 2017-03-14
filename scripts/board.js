const board = (function() {

  const container = document.querySelector('.board');

  function breakRow() {
    const clearDiv = document.createElement('div');
    container.appendChild(clearDiv);
  };

  function render() {
    for(var i = 0; i < this.rows * this.columns; i++){
      if(i % this.rows === 0) {
        breakRow();
      }
      container.appendChild(this.fields[i].getElement());
    }
  };

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
    const board = new Board(5, 4);
    render.call(board);
    return board;
  };

  return {
    create: create,
  };

})();

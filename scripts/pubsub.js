const events = (function(){
  const events = {};
  // TODO: remove off function, invoke on() should return reference to args function. It'll resolve issue annonymous functions
  const on = (event, fn) => {
    events[event] = events[event] || [];
    events[event].push(fn);
  };

  const off = (event, fn) => {
    if(events[event]) {
      events[event].forEach((item, index) => {
        if (item === fn) {
          events[event].splice(index, 1);
        }
      });
    }
  }

  const emit = (event, data) => {
    if(events[event]) {
      events[event].forEach(item => {
        item(data);
      })
    }
  }

  return {
    on: on,
    off: off,
    emit: emit,
  }

})();

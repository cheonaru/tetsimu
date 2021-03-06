(function() {
  'use strict';

  var TetriminoS = function(pivot, direction) {
    C.Tetrimino.call(this, C.CellType.S, pivot, direction);
  };

  TetriminoS._Shape = {};
  TetriminoS._Shape[C.Direction.Up] = [
    { x:  0, y: 0 },
    { x: -1, y: 0 },
    { x:  0, y: 1 },
    { x:  1, y: 1 }
  ];

  TetriminoS._Shape[C.Direction.Left] = [
    { x:  0, y:  0 },
    { x:  0, y: -1 },
    { x: -1, y:  0 },
    { x: -1, y:  1 }
  ];

  TetriminoS._Shape[C.Direction.Down] = [
    { x:  0, y:  0 },
    { x:  1, y:  0 },
    { x:  0, y: -1 },
    { x: -1, y: -1 }
  ];

  TetriminoS._Shape[C.Direction.Right] = [
    { x: 0, y:  0 },
    { x: 0, y:  1 },
    { x: 1, y:  0 },
    { x: 1, y: -1 }
  ];

  TetriminoS.prototype = $.extend({}, C.Tetrimino.prototype, {
    Shape: function() {
      return TetriminoS._Shape[this.direction()];
    }
  });

  C.TetriminoS = TetriminoS;
})();


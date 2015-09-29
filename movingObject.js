(function () {

  window.Asteroids = window.Asteroids || {};


  var MovingObject = Asteroids.MovingObject = function (options) {

    for (var prop in options) {
      this[prop] = options[prop];
    }
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (!this.isWrappable && this.game.isOutOfBounds(this.pos)) {
      this.game.remove(this);
    } else {
      this.pos = this.game.wrap(this.pos);
    }
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    if (MovingObject._distance(this.pos, otherObject.pos) < (this.radius + otherObject.radius)) {
      return true;
    }

    return false;
  };

  MovingObject._distance = function (pos1, pos2) {
    return  Math.sqrt(Math.pow((pos1[0] - pos2[0]), 2) + Math.pow((pos1[1] - pos2[1]), 2))
  };

  MovingObject.prototype.collideWith = function(otherObject) {
    // It has a game object from constructor

  };

  MovingObject.prototype.isWrappable = true;

})();

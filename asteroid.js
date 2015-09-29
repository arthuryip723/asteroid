(function () {

  window.Asteroids = window.Asteroids || {};

  var Asteroid = Asteroids.Asteroid = function (options) {
    // this.pos = options["pos"];
    // this.game = options["game"];
    for (var prop in options) {
      this[prop] = options[prop];
    }
    Asteroids.MovingObject.call(this, {
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
      vel: Asteroids.Util.randomVec(Asteroid.LENGTH),
      pos: options.pos
    });
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "yellow";
  Asteroid.RADIUS = 20;
  Asteroid.LENGTH = 5;

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();

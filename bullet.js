(function () {

  window.Asteroids = window.Asteroids || {};

  var Bullet = Asteroids.Bullet = function (options) {
    // this.vel = options["vel"];
    // this.pos = options["pos"];
    // this.game = options["game"];
    for (var prop in options) {
      this[prop] = options[prop];
    }
    Asteroids.MovingObject.call(this, { radius: Bullet.RADIUS, color: Bullet.COLOR });
  };

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.RADIUS = 5;
  Bullet.COLOR = 'red';

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

  Bullet.prototype.isWrappable = false;

})();

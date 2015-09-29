(function () {

  window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function (options) {
    this.vel = [0, 0];
    // this.pos = options["pos"];
    // this.game = options["game"];
    for (var prop in options) {
      this[prop] = options[prop];
    }
    Asteroids.MovingObject.call(this, { radius: Ship.RADIUS, color: Ship.COLOR });
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject)
  Ship.RADIUS = 10;
  Ship.COLOR = "green";

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function() {
    var bullet = new Asteroids.Bullet({
      pos:this.pos.slice(),
      vel: this.vel.slice(),
      game: this.game
    });

    this.game.add(bullet);
  };

})();

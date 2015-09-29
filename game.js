(function () {

  window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function () {
    this.addAsteroids();
    this.ship = new Asteroids.Ship({ pos: this.randomPosition(), game: this });
    this.bullets = [];
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.randomPosition = function () {
    return [
      Math.floor(Math.random() * Game.DIM_X),
      Math.floor(Math.random() * Game.DIM_Y)
    ];
  };

  Game.prototype.addAsteroids = function () {
    this.asteroids = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.add(new Asteroids.Asteroid({pos: this.randomPosition(), game: this}));
    }
  };

  Game.prototype.draw = function (ctx, img) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.drawImage(img, 0, 0);
    var allObjects = this.allObjects();
    for (var i = 0; i < allObjects.length; i++) {
      allObjects[i].draw(ctx);
    }
  };

  Game.prototype.moveobjects = function () {
    var allObjects = this.allObjects();
    for (var i = 0; i < allObjects.length; i++) {
      allObjects[i].move();
    }
  };

  Game.prototype.wrap = function (pos) {
    if (pos[0] > Game.DIM_X) pos[0] -= Game.DIM_X;
    if (pos[0] < 0) pos[0] += Game.DIM_X;
    if (pos[1] > Game.DIM_Y) pos[1] -= Game.DIM_Y;
    if (pos[1] < 0) pos[1] += Game.DIM_Y;
    return pos;
  };

  Game.prototype.checkCollisions = function () {
    var allObjects = this.allObjects();
    for (var i = 0; i < allObjects.length; i++) {
      for(var j = 0; j < allObjects.length; j++) {
        if (allObjects[i].isCollidedWith(allObjects[j])) {

          allObjects[i].collideWith(allObjects[j]);
        }
      }
    }
  };

  Game.prototype.step = function () {
    this.moveobjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(object) {
    if (object instanceof Asteroids.Asteroid) {
      this.asteroids.splice(this.asteroids.indexOf(object), 1);
    } else if (object instanceof Asteroids.Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    }
  };

  Game.prototype.add = function(object) {
    if (object instanceof Asteroids.Asteroid) {
      this.asteroids.push(object);
    } else if (object instanceof Asteroids.Bullet) {
      this.bullets.push(object);
    }
  };

  Game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship]).concat(this.bullets);
  };

  Game.prototype.isOutOfBounds = function (pos) {
    return (pos[0] > Game.DIM_X || pos[0] < 0 ||
            pos[1] > Game.DIM_Y || pos[1] < 0
    );
  };

})();

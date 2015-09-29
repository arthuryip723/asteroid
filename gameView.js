(function () {

  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    var img = new Image();
    img.src = 'img.jpg';

    this.bindKeyHandlers();
    setInterval(function () {
      this.game.step();
      this.game.draw(this.ctx, img);
    }, 20);
  };

  GameView.prototype.bindKeyHandlers = function () {
    key('d', this.game.ship.power.bind(this.game.ship, [1,0]));
    key('a', this.game.ship.power.bind(this.game.ship, [-1,0]));
    key('s', this.game.ship.power.bind(this.game.ship, [0,1]));
    key('w', this.game.ship.power.bind(this.game.ship, [0,-1]));
    key('space', this.game.ship.fireBullet.bind(this.game.ship));
  };

})();

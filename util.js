(function () {

  window.Asteroids = window.Asteroids || {};

  Asteroids.Util = function () {};

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Asteroids.Util.randomVec = function (length) {
    var vel = [0, 0];
    while (vel[0] == 0 && vel[1] == 0) {
      for (var i = 0; i < 2; i++) {
        vel[i] = Math.floor((Math.random() * length) * 2 - length)
      }
    }

    return vel;
  };

})();

'use strict';


window.addEventListener('load', function () {

  var game = new Game([
    new ExampleMap1(),
    new ExampleMap2()
  ], [
    //KnightHero
    //Hero,
    //miau
    someguy
    //hero
  ]);

  game.appendTo(document.body);
  game.run();

});
const Westeros = {};

const Tournament = (function() {
  this.Events = [];
  function Tournament() {}
  return Tournament;
})();
Westeros.Tournament = Tournament;

const tournament = new Westeros.Tournament();

console.log(tournament.Events);

var ProgressBar = require('../');

var bar = new ProgressBar(' [:bar]', {
    complete: '.insert text here'
  , incomplete: ' '
  , width: 100
  , total: 100
});

var id = setInterval(function (){
  bar.tick();
  if (bar.complete) {
    clearInterval(id);
  }
}, 50);

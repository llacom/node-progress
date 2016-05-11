/**
 * An example to show how you could handle a progress bar with unknown total
 * which exceed the number of columns in the terminal
 */

var ProgressBar = require('../');

// simulated download, passing the chunk lengths to tick()

var bar = new ProgressBar(' [:wheel] [:bar] :actual / ?', {
    complete: ' --->'
  , incomplete: ' '
  , width: 100
  , total: 100
});

var step = 1;
var totalTicks = 0;
var wheels = '-\\|/'; /* a wheels animation */

(function next() {

  var wheelChar = wheels[parseInt(totalTicks / 10)  % wheels.length];

  totalTicks = totalTicks + 1;

  /* Reset the bar progression if we've reached 100%, otherwise call bar.tick */
  if (bar.curr < bar.total - step) {
    bar.tick(step, {actual: totalTicks, wheel: wheelChar});
  } else {
    bar.update(0, {actual: totalTicks, wheel: wheelChar});
  }

  setTimeout(next, 30);
})()

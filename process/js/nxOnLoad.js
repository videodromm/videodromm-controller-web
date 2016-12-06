var keyboard = require('./Keyboard');
var nx = {};;
nx.onload = function(){
  console.log('nx loaded');
  keyboard.on('*', function(data){
    console.log('on data');
    var frequency;
    if (data.on > 0){
      //convert the midi note to frequency
      frequency = nx.mtof(data.note);

    } else if (data.on === 0) {
    }
  });
}

module.exports = nx;

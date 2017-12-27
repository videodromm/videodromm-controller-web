window.socket = new ws('ws://127.0.0.1:8088');
Nexus.colors.accent = '#220022';
Nexus.colors.fill = '#440';

let dialArray = [];
let dialColors = ['#a70','#f00','#0f0','#00f','#aaa','#f00','#0f0','#00f','#370','#ff0','#fff','#a0f','#a70','#270','#fff','#a0f'];
let buttonsArray = [];
let slidersArray = [];
let resetDial = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for (let i = 0; i < 16; i++) {
  let dial = new Nexus.Add.Dial('#dials');
  dial.parent.style.float = 'left';
  dial.value = 0.5;
  dial.index = i;
  dial.colorize('accent', dialColors[i]);
  dial.on('change', function (data) {
    console.log( '{"params" :[{"name" : ' + this.index + ',"value" :' + data + '}]}' );
    if (window.socket) window.socket.send('{"params" :[{"name" : ' + i + ',"value" :' + data + '}]}');
  });
  dialArray.push(dial);
  let btn = new Nexus.Add.Button('#dials', {
    size: [10, 10],
    mode: 'aftertouch'
  });
  btn.on('change', function (data) {
    console.log( i  );
    if (window.socket) window.socket.send('{"params" :[{"name" : ' + i + ',"value" :' + resetDial[i] + '}]}');
  });
  buttonsArray.push(btn);
}
for (let i = 16; i < 32; i++) {
  let slider = new Nexus.Add.Slider('#sliders', {
    size: [25, 100],
    mode: 'relative',  // 'relative' or 'absolute'
    min: 0,
    max: 1,
    step: 0,
    value: 0
  });
  slider.on('change', function (data) {
    console.log('val:' + JSON.stringify(data));
    if (window.socket) window.socket.send('{"params" :[{"name" : ' + i + ',"value" :' + data + '}]}');
  });
  slidersArray.push(slider);
}
/*
// 1 red  2 green 3 blue 4 alpha 5 red x 6 green x 7 blue x 8 iBadTv 9 audio x 10 exposure 11 pixelate 12 trixels
// slitscan
// slitscan
// iChromatic
// background red
    var slider = Nexus.Add.Slider('#instrument', {
      'size': [25, 100],
      'mode': 'relative',  // 'relative' or 'absolute'
      'min': 0,
      'max': 1,
      'step': 0,
      'value': 0
    });
    slider.on('change', function (data) {
      // v holds the new numeric value of the dial
      console.log('13 val:' + JSON.stringify(data));
      if (window.socket) window.socket.send('{"params" :[{"name" : 13,"value" :' + data + "}]}");
    });

var form = document.getElementById('wsform');
var message = document.getElementById("message");
var ip = document.getElementById("ip");
var port = document.getElementById("port");

form.addEventListener('submit', function(e){
  e.preventDefault();
  //window.socket = new ws('ws://' + ip + ':' + port);
  message.innerHTML = "Connected to " + ip + ":" + port;
  delete form;
});*/

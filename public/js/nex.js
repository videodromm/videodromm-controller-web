window.socket = new ws('ws://127.0.0.1:8088');
Nexus.colors.accent = "#220022"
Nexus.colors.fill = "#440"

/*ui = new Nexus.Rack('#all-interfaces');
ui.tilt.active = false;
var synth = new Nexus.Rack("#all-interfaces", {
  attribute: 'data-nx'
})
var dial12 = new Nexus.Dial("#dial12");
var dial13 = new Nexus.Dial("#dial13");
var dial14 = new Nexus.Dial("#dial14");*/
var dialArray = [];
for (var i = 0; i < 16; i++) {
  dialArray.push(new Nexus.Add.Dial('#target', {
    size: [100, 100],
    value: i * 0.1
  }));
}
// red
dialArray[0].colorize("accent", "#f00");
dialArray[0].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 1 + ',"value" :' + data + "}]}");
});
// green
dialArray[1].colorize("accent", "#0f0");
dialArray[1].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 2 + ',"value" :' + data + "}]}");
});
// blue
dialArray[2].colorize("accent", "#00f");
dialArray[2].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 3 + ',"value" :' + data + "}]}");
});
// alpha
dialArray[3].colorize("accent", "#aaa");
dialArray[3].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 4 + ',"value" :' + data + "}]}");
});

// red x
dialArray[4].colorize("accent", "#f00");
dialArray[4].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 5 + ',"value" :' + data + "}]}");
});
// green x
dialArray[5].colorize("accent", "#0f0");
dialArray[5].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 6 + ',"value" :' + data + "}]}");
});
// blue x
dialArray[6].colorize("accent", "#00f");
dialArray[6].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 7 + ',"value" :' + data + "}]}");
});
// iBadTv
dialArray[7].colorize("accent", "#370");
dialArray[7].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 8 + ',"value" :' + data + "}]}");
});

// audio x
dialArray[8].colorize("accent", "#ff0");
dialArray[8].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 13 + ',"value" :' + data + "}]}");
});
// exposure
dialArray[9].colorize("accent", "#fff");
dialArray[9].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 14 + ',"value" :' + data + "}]}");
});
// pixelate
dialArray[10].colorize("accent", "#a0f");
dialArray[10].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 15 + ',"value" :' + data + "}]}");
});
// trixels
dialArray[11].colorize("accent", "#a70");
dialArray[11].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 16 + ',"value" :' + data + "}]}");
});

// slitscan
dialArray[12].colorize("accent", "#270");
dialArray[12].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 27 + ',"value" :' + data + "}]}");
});
// slitscan
dialArray[13].colorize("accent", "#fff");
dialArray[13].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 28 + ',"value" :' + data + "}]}");
});
// iChromatic
dialArray[14].colorize("accent", "#a0f");
dialArray[14].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 17 + ',"value" :' + data + "}]}");
});
// background red
dialArray[15].colorize("accent", "#a70");
dialArray[15].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 19 + ',"value" :' + data + "}]}");
});

/*var dial12 = Nexus.Add.Dial('#dial12', {
  'size': [50, 50],
  'interaction': 'radial', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "absolute" or "relative"
  'min': 0,
  'max': 1,
  'step': 0,
  'value': 0
});
dial12.colorize("accent", "#220022");
dial12.colorize("border", "#e4e4e4");
dial12.colorize("fill", "#333");
dial12.on('change', function (data) {
  // v holds the new numeric value of the dial
  console.log('iZoom  val:' + JSON.stringify(data));
  if (window.socket) window.socket.send('{"params" :[{"name" : 12,"value" :' + data + "}]}");
  //ws.send('{"params" :[{"name" : 6,"value" :'+data+"}]}");
});
var dial13 = Nexus.Add.Dial('#dial14', {
  'size': [50, 50],
  'interaction': 'radial', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "absolute" or "relative"
  'min': 0,
  'max': 1,
  'step': 0,
  'value': 0
});
dial13.colorize("accent", "#220022");
dial13.colorize("border", "#e4e4e4");
dial13.colorize("fill", "#333");
dial13.on('change', function (data) {
  // v holds the new numeric value of the dial
  console.log('13 val:' + JSON.stringify(data));
  if (window.socket) window.socket.send('{"params" :[{"name" : 13,"value" :' + data + "}]}");
});
var dial14 = Nexus.Add.Dial('#dial14', {
  'size': [50, 50],
  'interaction': 'radial', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "absolute" or "relative"
  'min': 0,
  'max': 1,
  'step': 0,
  'value': 0
});
dial14.colorize("accent", "#220022");
dial14.colorize("border", "#e4e4e4");
dial14.colorize("fill", "#333");
dial14.on('change', function (data) {
  // v holds the new numeric value of the dial
  console.log('14  val:' + JSON.stringify(data));
  if (window.socket) window.socket.send('{"params" :[{"name" : 14,"value" :' + data + "}]}");
});

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
*/

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
for (var i = 0; i < 10; i++) {
  dialArray.push(new Nexus.Add.Dial('#target', {
    size: [100, 100],
    value: i * 0.1
  }));
}
dialArray[0].colorize("accent", "#f00");
dialArray[0].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 5 + ',"value" :' + data + "}]}");
});
dialArray[1].colorize("accent", "#0f0");
dialArray[1].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 6 + ',"value" :' + data + "}]}");
});
dialArray[2].colorize("accent", "#00f");
dialArray[2].on('change', function (data) {
  if (window.socket) window.socket.send('{"params" :[{"name" : ' + 7 + ',"value" :' + data + "}]}");
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

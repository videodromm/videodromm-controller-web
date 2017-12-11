var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash'); // useless for now

//var Controls = require('./Controls');
var UniformList = require('./UniformList');

var MainInterface = React.createClass({
  getInitialState: function () {
    return {
      title: 'Uniforms',
      uniforms: [],
      show: true,
      wshost: '127.0.0.1',
      wsport: 8088
    } //return
  }, //getInitialState
  componentDidMount: function () {
    window.socket = new ws('ws://' + this.state.wshost + ':' + this.state.wsport);
    var dial12 = Nexus.Add.Dial('#dial12', {
      'size': [100, 100],
      'interaction': 'radial', // "radial", "vertical", or "horizontal"
      'mode': 'relative', // "absolute" or "relative"
      'min': 0,
      'max': 1,
      'step': 0,
      'value': 0
    });
    dial12.colorize("accent", "#220022")
    dial12.colorize("border", "#e4e4e4");
    dial12.colorize("fill", "#333")
    dial12.on('change', function (data) {
      // v holds the new numeric value of the dial
      console.log('iZoom  val:' + JSON.stringify(data));
      if (window.socket) window.socket.send('{"params" :[{"name" : 12,"value" :' + data + "}]}");
      //ws.send('{"params" :[{"name" : 6,"value" :'+data+"}]}");
    });
    var dial14 = Nexus.Add.Dial('#dial14', {
      'size': [100, 100],
      'interaction': 'radial', // "radial", "vertical", or "horizontal"
      'mode': 'relative', // "absolute" or "relative"
      'min': 0,
      'max': 1,
      'step': 0,
      'value': 0
    });
    dial14.colorize("accent", "#220022")
    dial14.colorize("border", "#e4e4e4");
    dial14.colorize("fill", "#333")
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
    /*
    for (var key in nx.widgets) {
      with (nx.widgets[key]) {
        on('*', function(data) {
          // code that will be executed
          console.log(canvasID, data)
        })
      }
       nx.widgets[key].on('*', function(data) {
         var d = document.getElementById("tester");
         d.innerHTML = key + " " + data.value;
         window.socket.send('{"params" :[{"name" : 12,"value" :'+data.value+"}]}");
       })
     };

 }; */
    this.serverRequest = $.get('./js/uniforms.json', function (result) {
      var tempUniforms = result;
      this.setState({
        uniforms: tempUniforms
      }); //setState
      console.log('uniforms:' + JSON.stringify(this.state.uniforms));
    }.bind(this));
  }, //componentDidMount
  componentWillUnmount: function () {
    this.serverRequest.abort();
  }, //componentWillUnmount
  resetUniform: function (item) {
    console.log('resetUniform:' + item.uniformName + ' was ' + item.uniformValue);
    item.uniformValue = item.defaultValue;
    var allUniformList = this.state.uniforms;
    console.log('reset to:' + item.uniformValue);
    this.setState({
      uniforms: allUniformList
    }); //setState
  }, //resetUniform
  changeUniform: function (item, value) {
    console.log('changeUniform:' + item.uniformName + ' was ' + item.uniformValue + ' to ' + value);
    if (item.uniformValue !== value) {
      item.uniformValue = value;
      var allUniformList = this.state.uniforms;
      console.log('changed to:' + item.uniformValue);
      this.setState({
        uniforms: allUniformList
      }); //setState
    } //if
  }, //changeUniform
  render: function () {
    var filteredUniforms = this.state.uniforms;
    filteredUniforms = filteredUniforms.map(function (item, index) {
      return (
        <UniformList key={index}
          singleItem={item}
          whichUniform={item}
          onChange={this.changeUniform}
          onReset={this.resetUniform} />
      ) //return
    }.bind(this)); //filteredUniforms.map
    return (
      <div className="interface">
        <div className="row">
          <div className="col s12 m5">
            <div id="dial12"></div>
            <div id="dial14"></div>
            <div id="instrument"></div>
          </div>
        </div>
        <ul className="item-list media-list">{filteredUniforms}</ul>
        {/* <Controls /> */}
      </div>
    ) //return
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('uniforms')
); //render

var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash'); // useless for now

var Keyboard = require('./Keyboard');
var Controls = require('./Controls');
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
    //this.changeHost = this.changeHost.bind(this);
    //this.changePort = this.changePort.bind(this);
    var dial12 = Nexus.Add.Dial('#instrument', {
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
      console.log('iZoom ' + JSON.stringify(ws) + ' val:' + JSON.stringify(data));
      window.socket.send('{"params" :[{"name" : 12,"value" :' + data + "}]}");
      //ws.send('{"params" :[{"name" : 6,"value" :'+data+"}]}");
    });
    var dial14 = Nexus.Add.Dial('#instrument', {
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
      console.log('iZoom ' + JSON.stringify(ws) + ' val:' + JSON.stringify(data));
      window.socket.send('{"params" :[{"name" : 14,"value" :' + data + "}]}");
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
      console.log('iZoom ' + JSON.stringify(ws) + ' val:' + JSON.stringify(data));
      window.socket.send('{"params" :[{"name" : 13,"value" :' + data + "}]}");
    });
    /*var toggle = Nexus.Add.Toggle('#target', {
      'size': [40, 20],
      'state': false
    });
    toggle.on('change', function (v) {
      console.log(v);
    })*/
    //nx;
    /*console.log('nx' + nx);

    nx.onload = function(){
      console.log('nx onload'+ ws);*/
    /**
     *
     *
     for (var key in nx.widgets) {
        with (nx.widgets[key]) {
          on('*', function(data) {
            // code that will be executed
            console.log(canvasID, data)
          })
        }
      }
        nx.colorize("accent", "#347");
        nx.colorize("border", "#e4e4e4");
        nx.colorize("fill", "#eee");
     */
    /* nx.colorize("#220022");
     nx.colorize("border", "#BBAAFF");
     nx.colorize("fill", "#BBAAFF");
     for (var key in nx.widgets) {
       nx.widgets[key].on('*', function(data) {
         var d = document.getElementById("tester");
         d.innerHTML = key + " " + data.value;
         window.socket.send('{"params" :[{"name" : 12,"value" :'+data.value+"}]}");
       })
     };

     //iZoom.animate("bounce");
     iZoom.on('*', function(data){
       console.log('iZoom ' + ws + ' val:' + data.value);
       window.socket.emit('params', '{"params" :[{"name" : 12,"value" :'+data.value+"}]}");
       //ws.send('{"params" :[{"name" : 12,"value" :'+data.value+"}]}");
      });
      iExposure.on('*', function(data){
        console.log('iExposure'+ ws + ' val:' + data.value);
        //ws.send('{"params" :[{"name" : 14,"value" :'+data.value+"}]}");
      });
      iRedMultiplier.on('*', function(data){
        console.log('iRedMultiplier'+ ws + ' val:' + data.value);
        //ws.send('{"params" :[{"name" : 5,"value" :'+data.value+"}]}");
      });
      iGreenMultiplier.on('*', function(data){
         console.log('iGreenMultiplier'+ ws + ' val:' + data.value);
         //ws.send('{"params" :[{"name" : 6,"value" :'+data.value+"}]}");
       });
       iBlueMultiplier.on('*', function(data){
         console.log('iBlueMultiplier'+ ws + ' val:' + data.value);
         //ws.send('{"params" :[{"name" : 7,"value" :'+data.value+"}]}");
       });
       iColor.on('*', function(data) {
         console.log('iColor:' + data.value);
         //ws.send('{"params" :[{"name" : 1,"value" :'+data.value+"}]}");
       });
 }; */
    this.serverRequest = $.get('./js/uniforms.json', function (result) {
      var tempUniforms = result;
      this.setState({
        uniforms: tempUniforms
      }); //setState
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
  submit: function (e) {
    e.preventDefault();
    console.log('h:' + this.state.wshost + ' p:' + this.state.wsport);
    window.socket = new WebSocket('ws://' + this.state.wshost + ':' + this.state.wsport);
  },
  changeHost: function (e) {
    console.log('changeHost:' + this.state.wshost + 'v:' + e.target.value);
    this.setState({ wshost: e.target.value });
    console.log('h:' + this.state.wshost);
  },
  changePort: function (e) {
    console.log('changePort:' + this.state.wsport + 'v:' + e.target.value);
    this.setState({ wsport: e.target.value });
    console.log('h:' + this.state.wsport);
  },
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
        <h1>{this.state.title}</h1>
        <div id="instrument"></div>
        <ul className="item-list media-list">{filteredUniforms}</ul>
        <Controls />
        <div id="tester">
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 m5">
              <form onSubmit={this.submit}>
                <div className='form-group'>
                  <label htmlFor="host">Host</label>
                  <input id="host"
                    type="text"
                    required
                    defaultValue={this.state.wshost}
                    onChange={this.changeHost}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor="port">Port</label>
                  <input id="port"
                    type="number"
                    required
                    defaultValue={this.state.wsport}
                    onChange={this.changePort}
                  />
                </div>
                <div className="form-group">
                  <button className="btn">Connect</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    ) //return
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('uniforms')
); //render

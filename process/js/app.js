var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash'); // useless for now

var Keyboard = require('./Keyboard');
var Controls = require('./Controls');
var UniformList = require('./UniformList');
 
var ws = new WebSocket('ws://13.93.86.117:8088');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      title: 'Uniforms',
      uniforms: [],
      show: true
    } //return
  }, //getInitialState
  componentDidMount: function() {
    //nx;
    console.log('nx' + nx);

    nx.onload = function(){
      console.log('nx onload'+ ws);
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
      nx.colorize("#220022");
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
   };
    this.serverRequest = $.get('./js/uniforms.json', function(result) {
      var tempUniforms = result;
      this.setState({
        uniforms: tempUniforms
      }); //setState
    }.bind(this));
  }, //componentDidMount
  componentWillUnmount: function() {
    this.serverRequest.abort();
  }, //componentWillUnmount
  resetUniform: function(item) {
    console.log('resetUniform:' + item.uniformName + ' was ' + item.uniformValue);
    item.uniformValue = item.defaultValue;
    var allUniformList = this.state.uniforms;
    console.log('reset to:' + item.uniformValue);
    this.setState({
        uniforms: allUniformList
      }); //setState
  }, //resetUniform
  changeUniform: function(item, value) {
    console.log('changeUniform:' + item.uniformName + ' was ' + item.uniformValue + ' to ' + value);
    if(item.uniformValue !== value) {
      item.uniformValue = value;
      var allUniformList = this.state.uniforms;
      console.log('changed to:' + item.uniformValue);
      this.setState({
        uniforms: allUniformList
      }); //setState
    } //if
  }, //changeUniform
  render: function() {
    var filteredUniforms = this.state.uniforms;
    filteredUniforms = filteredUniforms.map(function(item, index) {
      return (
        <UniformList key = {index}
          singleItem = {item}
          whichUniform = {item}
          onChange = {this.changeUniform}
          onReset = {this.resetUniform} />
      ) //return
    }.bind(this)); //filteredUniforms.map
    return (
      <div className="interface">
        <h1>{this.state.title}</h1>       
        <ul className="item-list media-list">{filteredUniforms}</ul>
        <Controls />
        <div id="tester">
        </div>

      </div>
    ) //return
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('uniforms')
); //render

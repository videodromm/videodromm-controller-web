var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash'); // useless for now

var Keyboard = require('./Keyboard');
var Controls = require('./Controls');
var UniformList = require('./UniformList');
 
var nx = require('./nxOnLoad');
var ws = new WebSocket('ws://localhost:8088');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      title: 'Uniforms',
      uniforms: [],
      show: true
    } //return
  }, //getInitialState
  componentWillMount: function(){
    nx;
    nx.onload = function(){
     console.log('nx onload');
     var z;
     iZoom.on('*', function(data){
        z = Math.round(data.value);
        console.log('z' + z);
      });
   }
    console.log('nx' + nx);
  }, //componentWillMount
  componentDidMount: function() {
    ws.onopen = () => {
      // connection opened
      ws.send('something'); // send a message
    };
    ws.onmessage = (e) => {
      // a message was received
      console.log(e.data);
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
    };

    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
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
      </div>
    ) //return
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('uniforms')
); //render

var React = require('react');
var ReactDOM = require('react-dom');

var Keyboard = require('./Keyboard');
var nx = require('./nxOnLoad');
 
/*var Keyboard = React.createClass({
  //all nexusUI elements need to use data-nx with React.
  //be sure to change the manager.prototype.transform function
  componentWillMount: function() {
    console.log('nxSynthOnLoad from Keyboard');
    
  },
  render: function(){
    return(
      <div className='keyboard'>
        <canvas id="keyboard" className='keyboard__ui' data-nx='keyboard' ></canvas>
        <canvas data-nx="dial"></canvas>
      </div>
    );
  }
});*/
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
    console.log('nx' + nx);
  }, //componentWillMount
  componentDidMount: function() {
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
  render: function() {
    var filteredUniforms = this.state.uniforms;
    filteredUniforms = filteredUniforms.map(function(item, index) {
      return (
        <li className="uniform-info media-body" key={index}>
          <div className="uniform-head">
            <span className="uniform-name">{this.state.uniforms[index].uniformName}</span>
            <span className="uniform-info pull-right">{this.state.uniforms[index].uniformInfo}</span>
          </div>
        </li>
      ) //return
    }.bind(this)); //filteredUniforms.map
    return (
      <div className="interface">
        <h1>{this.state.title}</h1>       
        <ul className="item-list media-list">{filteredUniforms}</ul>
        <Keyboard />
      </div>
    ) //return
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('uniforms')
); //render

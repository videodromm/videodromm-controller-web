var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      title: 'Uniforms',
      show: true
    } //return
  }, //getInitialState

  render: function() {
    
    return (
      <div className="interface">
        <h1>{this.state.title}</h1>
        
      </div>
    )
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('uniforms')
); //render

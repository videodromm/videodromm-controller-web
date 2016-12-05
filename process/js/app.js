var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      title: 'Uniforms',
      data: [
        {
          "uniformName": "iZoom",
          "uniformInfo": "zoom level -3.0 to 3.0",
          "uniformValue": 0.5
        },
        {
          "uniformName": "iExposure",
          "uniformInfo": "exposure 0.0 to 3.0",
          "uniformValue": 1.5
        }
      ],
      show: true
    } //return
  }, //getInitialState

  render: function() {
    
    return (
      <div className="interface">
        <h1>{this.state.title}</h1>
        <div className="item-list media-list">
          <ul className="item-list media-list">
            <li className="uniform-info media-body">
              <div className="uniform-head">
                <span className="uniform-name">{this.state.data[0].uniformName}</span>
                <span className="uniform-info pull-right">{this.state.data[0].uniformInfo}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    ) // return
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('uniforms')
); //render

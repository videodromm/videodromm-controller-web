var React = require('react');

var UniformList = React.createClass({

  handleReset: function() {
    this.props.onReset(this.props.whichUniform)
  },
  render: function() {
    return(
      <li className="uniform-info media-body">
        <div className="uniform-head">
          <button className="btn btn-danger" onClick={this.handleReset}></button>
          <span className="uniform-name">{this.props.singleItem.uniformName}</span>
        </div>
        <div className="uniform-body">
          <span className="uniform-name">{this.props.singleItem.uniformValue}</span>
          <input type="range" min="0" max="10" />
          <span className="uniform-info pull-right">{this.props.singleItem.uniformInfo}</span>
        </div>
      </li>
    ) // return
  } // render
}); // UniformList

module.exports = UniformList;
var React = require('react');

var UniformList = React.createClass({
  render: function() {
    return(
      <li className="uniform-info media-body">
        <div className="uniform-head">
          <span className="uniform-name">{this.props.singleItem.uniformName}</span>
        </div>
        <div className="uniform-body">
          <span className="uniform-info pull-right">{this.props.singleItem.uniformInfo}</span>
        </div>
      </li>
    ) // return
  } // render
}); // UniformList

module.exports = UniformList;
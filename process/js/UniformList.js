var React = require('react');

var UniformList = React.createClass({
  getInitialState: function() {
    return {
      value: this.props.singleItem.uniformValue
    } //return
  }, //getInitialState
  componentDidMount: function() {
    var ctrl = document.getElementById("iRedMultiplier");
    /*ctrl.on('*', function(data){
      console.log('iRedMultiplier' + event.target.value);
      ws.send('{"params" :[{"name" : 14,"value" :'+data.value+"}]}");
      <span className="uniform-name">{this.props.singleItem.uniformValue}</span>
      <span className="uniform-name"> min:{this.props.singleItem.uniformMinValue}</span>
          <span className="uniform-name"> max:{this.props.singleItem.uniformMaxValue}</span>
});*/
  },
  handleReset: function() {
    this.props.onReset(this.props.whichUniform)
  },
  handleSliderChange: function() {
    this.props.onChange(this.props.whichUniform, this.props.singleItem.uniformValue);
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    console.log('handleChange' + event.target.value);
    this.props.onChange(this.props.whichUniform, this.state.value);
  },
  render: function() {
    return(
      
        <div className="uniform-head"  className="col-xs-3">
          
          <button className="btn btn-danger" onClick={this.handleReset}></button>
          <span className="uniform-name">{this.props.singleItem.uniformName}</span>
          
          <canvas id={this.props.singleItem.uniformName} 
            label={this.props.singleItem.uniformName} 
            data-nx='dial'
            min={this.props.singleItem.uniformMinValue} 
            max={this.props.singleItem.uniformMaxValue}>
          </canvas>
        </div>
     
    ) // return
  } // render
}); // UniformList

module.exports = UniformList;
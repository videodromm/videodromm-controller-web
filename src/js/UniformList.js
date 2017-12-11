var React = require('react');

var UniformList = React.createClass({
  getInitialState: function() {
    console.log(' getInitialState:' + this.props.singleItem.uniformName);
    return {
      value: this.props.singleItem.uniformValue
    } //return
  }, //getInitialState
  componentDidMount: function() {
    var ctrl = document.getElementById("iRedMultiplier");
    console.log('iRedMultiplier' + ctrl);
    /*var dial5 = Nexus.Add.Dial('#instrument', {
      'size': [100, 100],
      'interaction': 'radial', // "radial", "vertical", or "horizontal"
      'mode': 'relative', // "absolute" or "relative"
      'min': this.props.singleItem.uniformMinValue,
      'max': this.props.singleItem.uniformMaxValue,
      'step': 0,
      'value': this.props.singleItem.uniformValue
    });
    dial5.colorize("accent", "#220022")
    dial5.colorize("border", "#e4e4e4");
    dial5.colorize("fill", "#333")
    dial5.on('change', function (data) {
      // v holds the new numeric value of the dial
      console.log(' val:' + JSON.stringify(data));
      //console.log(' this.state:' + JSON.stringify(this.state));
      //if (window.socket) window.socket.send('{"params" :[{"name" : '+this.props.singleItem.uniformIndex+',"value" :' + data + "}]}");
      //ws.send('{"params" :[{"name" : 6,"value" :'+data+"}]}");
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
            label={this.props.singleItem.uniformInfo} 
            data-nx={this.props.singleItem.widget}
            min={this.props.singleItem.uniformMinValue} 
            max={this.props.singleItem.uniformMaxValue}>
          </canvas>
        </div>
     
    ) // return
  } // render
}); // UniformList

module.exports = UniformList;
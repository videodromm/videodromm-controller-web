var React = require('react');
//var nx = require('./nxOnLoad');

class Controls extends React.Component {
  //all nexusUI elements need to use data-nx with React.
  //be sure to change the manager.prototype.transform function
  constructor(props){
    super(props);
    console.log('ctrls ctor');

  }
  componentDidMount(){
    //nx;
    /*console.log('nx:' + nx);
    nx.onload = function(){
     console.log('nx onload');
     var z;
     iZoom.on('*', function(data){
        z = Math.round(data.value);
        console.log('z' + z);
      });
   }*/
  } //componentDidMount
  render(){
    return(
      <div className='controls'>
        <canvas id="iZoom" data-nx='dial' min='0' max='3'></canvas>
        <canvas id="iExposure" data-nx='dial' min='0' max='12'></canvas>
      </div>
    );
  }
}

module.exports = Controls;
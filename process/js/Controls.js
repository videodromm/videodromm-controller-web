var React = require('react');

class Controls extends React.Component {
  //all nexusUI elements need to use data-nx with React.
  //be sure to change the manager.prototype.transform function
  constructor(props){
    super(props);
    console.log('ctrls ctor');

  }
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
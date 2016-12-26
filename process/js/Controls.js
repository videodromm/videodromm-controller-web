var React = require('react');

class Controls extends React.Component {
  //all nexusUI elements need to use data-nx with React.
  //be sure to change the manager.prototype.transform function
  /*
  <canvas id="position3d_1" data-nx="wheel" >HI!</canvas>
       <canvas id="iZoom1" label="zoom" data-nx='dial' min='0' max='3'></canvas>
        <canvas id="iExposure1" label="exposure" data-nx='dial' min='0' max='12'></canvas>
  */
  constructor(props){
    super(props);
    console.log('ctrls ctor');

  }
  render(){
    return(
      <div className='controls'>
 	
      </div>
    );
  }
}

module.exports = Controls;
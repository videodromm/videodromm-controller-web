var React = require('react');

class Keyboard extends React.Component {
  //all nexusUI elements need to use data-nx with React.
  //be sure to change the manager.prototype.transform function
  constructor(props){
    super(props);
    console.log('keyb ctor');

  }
  render(){
    return(
      <div className='keyboard'>
        <canvas id="keyboard" className='keyboard__ui' data-nx='keyboard' ></canvas>
      </div>
    );
  }
}

module.exports = Keyboard;

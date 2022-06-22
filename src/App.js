import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello Wolrd</h1>
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}

function FuncComp(props){
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];
  return(
    <div className='container'>
      <h2>Function Style Component</h2>
      <p>Number : {number}</p>
      <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random())
          }
        } />
    </div>
  );
}

class ClassComp extends React.Component{
  state = {
    number: this.props.initNumber
  }
  render(){
    return(
      <div className='container'>
        <h2>Class Style Component</h2>
        <p>Number : {this.state.number}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number: Math.random()})
          }.bind(this)
        } />
      </div>
    )
  }
}

export default App;

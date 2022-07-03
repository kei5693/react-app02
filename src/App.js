import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setclassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello Wolrd</h1>
      <input type="button" value="remove func" onClick={function(){
        setFuncShow(false);
      }} />
      <input type="button" value="remove class" onClick={function(){
        setclassShow(false);
      }} />
      {funcShow ? <FuncComp initNumber={2} /> : null}
      {classShow ? <ClassComp initNumber={2} /> : null}
    </div>
  );
}

var funcStyle = 'color: blue';
var funcId = 0;
function FuncComp(props){
  // var numberState = useState(props.initNumber);
  // var number = numberState[0];
  // var setNumber = numberState[1];

  var [number, setNumber] = useState(props.initNumber);

  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];

  var [_date, setDate] = useState((new Date()).toString());

  // side effect
  useEffect(function(){
    console.log('%cfunc => useEffect number (componentDidMount) '+(++funcId), funcStyle);
    document.title = number;
    // clean up
    return function(){
      console.log('%cfunc => useEffect number return componentDidMount '+(++funcId), funcStyle);
    }
  }, []); // 빈 배열을 넣어서 1회만 실행되도록 조절

  useEffect(function(){
    console.log('%cfunc => useEffect number (componentWillUnMount) '+(++funcId), funcStyle);
    document.title = number;
    // clean up
    return function(){
      console.log('%cfunc => useEffect number return componentWillUnMount '+(++funcId), funcStyle);
    }
  }, [number]); // 빈 배열을 넣어서 1회만 실행되도록 조절

  // useEffect(function(){
  //   console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate) A '+(++funcId), funcStyle);
  //   document.title = number;
  //   // clean up
  //   return function(){
  //     console.log('%cfunc => useEffect number return A '+(++funcId), funcStyle);
  //   }
  // }, [number]);

  // useEffect(function(){
  //   console.log('%cfunc => useEffect _date (componentDidMount & componentDidUpdate) B '+(++funcId), funcStyle);
  //   document.title = _date;
  //   // clean up
  //   return function(){
  //     console.log('%cfunc => useEffect _date return B '+(++funcId), funcStyle);
  //   }
  // }, [_date]);

  console.log('%cfunc => render'+(++funcId), funcStyle);

  return(
    <div className='container'>
      <h2>Function Style Component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random())
          }
        } />
      <input type="button" value="date" onClick={
          function(){
            setDate((new Date()).toString())
          }
        } />
    </div>
  );
}

var classStyle = 'color: red';
class ClassComp extends React.Component{
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }

  componentWillMount(){
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate(nextProps, nextState){
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  componentWillUnmount(){
    console.log('%cclass => componentWillUnMount', classStyle);
  }

  render(){
    console.log('%cclass => render', classStyle);
    return(
      <div className='container'>
        <h2>Class Style Component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        
        <input type="button" value="random" onClick={
          function(){
            this.setState({number: Math.random()})
          }.bind(this)
        } />
        <input type="button" value="date" onClick={
          function(){
            this.setState({date: (new Date()).toString()})
          }.bind(this)
        } />
      </div>
    )
  }
}

export default App;

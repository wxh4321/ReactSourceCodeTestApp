import * as React from '../src/react/packages/react/src/React';
import Hello from './components/HelloWorld';
import logo from './logo.svg';
import './App.css';

class  App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      visible:false
    }
  }
  
  render(){
    const {visible} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {
            !visible?
            <button onClick={()=>{
              this.setState({
                visible:true
              })
            }}>
              展示
            </button>
            :
            <Hello/>
          }
        </header>
      </div>
    );
  }
 
}

export default App;

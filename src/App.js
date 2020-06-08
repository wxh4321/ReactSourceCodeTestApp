import * as React from '../src/react/packages/react/src/React';
import Hello from './components/HelloWorld';
import logo from './logo.svg';
import './App.css';
import { Button, Tooltip, } from 'antd';

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
          <div onClick={()=>{window.location.href='/menu'}}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {
            !visible?
            <Tooltip title={'展示'}>
              <Button onClick={()=>{
                this.setState({
                  visible:true
                })
              }}>
                展示
              </Button>
            </Tooltip>
            :
            <Hello/>
          }
        </header>
      </div>
    );
  }
 
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp.js";
import Quotes from "./Quotes.js";
import Quote from "./Quote.js";


class App extends Component {
constructor() {
  super();
  this.state = {
    working: true
  };
}



//*function
change() {
  this.setState({ working: !this.state.working });
}


  render() {

    const isChanged = this.state.working ? 'App-logo2 ' : 'App-logo ';

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className={isChanged} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={()=>this.change()}>Working</button>
        </header>
        <Lamp
          />
        <Lamp
        />
        <Quotes
        />
        <Quote
        />
        </div>
    );
  }
}
export default App;
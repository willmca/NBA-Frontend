import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link, Switch } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import './App.css';
import Home from './Home'
import ShowPlayer from "./ShowPlayer"

const NBAHeader = styled.header`
background-color:blue;
height:46px;
width:100%;
top:0;
position:fixed;
color:white;
`

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        players:[]
    }
  }
  componentDidMount() {
    fetch("https://secret-sea-08486.herokuapp.com/api/player").then(res=>res.json())
    .then(res => {
        console.log(res)
        this.setState({players:res})
    })}

  render(){
  return (
    <div className="App">
    <NBAHeader>
      <ul>
        <Link to="/"></Link>
        <li>Home</li>
        <li>Help</li>
        <li>Create Player</li>
      </ul>  
    </NBAHeader>
    <Route path="/" exact render={props => <Home {...props} {...this.state}/>} />
    <Route path="/:playerName" exact render={(routerProps) => <ShowPlayer {...routerProps} {...this.state} />}/>
    </div>
  )
};
}

export default App;

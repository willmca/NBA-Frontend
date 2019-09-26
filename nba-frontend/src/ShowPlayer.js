import React, { Component } from 'react'
import Player from './Player'
import { Link } from 'react-router-dom'



export default class ShowPlayer extends Component {
    editPlayer(){
      console.log("Yo")
    }
 render() {
     
     const clickedName = this.props.match.params.playerName
     const chosenPlayer = this.props.players.find(player => player.name === clickedName)
     var mainStyle={
         'margin-top':'50px'
     }
     var formStyle={
         'display':'flex',
         'flexDirection':'row',
         'margin-top': '10px;',
         'justifyContent':'space-around'
     }
     return (
         <div className="main" style={mainStyle}
         >
             < Player 
             imgSrc={chosenPlayer.photo}
             imgAlt={chosenPlayer.name}
            />
            <h1>{chosenPlayer.name}</h1>
            <h2>Height: {chosenPlayer.height} cm</h2>
            <h2>Weight: {chosenPlayer.weight} kg</h2>
            <p>To change {chosenPlayer.name}'s info, provide new information and click submit</p>
            <div className="form" style={formStyle}>
            <h3>Name:</h3><input type="text"></input>
            <h3>Height:</h3><input type="text"></input>
            <h3>Weight:</h3><input type="text"></input>
            </div>
            <input type="submit" onClick={this.editPlayer}></input>
        </div>
     )
 }
}


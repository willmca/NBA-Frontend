import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'
import './Home.css';
import Player from './Player';

const PlayerContainer = styled.section`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 25px auto;
  width: 800px;
`
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.deletePlayer = this.deletePlayer.bind(this);
    }
    deletePlayer() {
        console.log("Button works")
    }

    render() {
        
        return (
            <div className="main">
                <PlayerContainer>
                    {this.props.players.map((player, index) => {
                        return (
                            <div className="playa">
                                <Link to={`/player/${player.name}`}>
                                    <Player
                                        player={player}
                                        key={index}
                                        imgSrc={player.photo}
                                        imgAlt={player.name}
                                    />
                                </Link>


                                <button onClick={this.deletePlayer}>Click here to delete {player.name}</button>
                            </div>

                        )

                    })}

                </PlayerContainer>
            </div>
        )
    }
}
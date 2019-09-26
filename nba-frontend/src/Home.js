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
    }

    render() {
        return (
            <div className="main">
                <PlayerContainer>
                    {this.props.players.map((player, index) => {
                        return (
                        <div className="playa">
                            <Link to={`/${player.name}`}>
                                <Player
                                    player={player}
                                    key={index}
                                    imgSrc={player.photo}
                                    imgAlt={player.name}
                                     />
                            </Link>
                              <Link>
                        
                              <button>Click here to delete this player</button></Link>
                        </div>

                        )

                    })}

                </PlayerContainer>
            </div>
        )
    }
}
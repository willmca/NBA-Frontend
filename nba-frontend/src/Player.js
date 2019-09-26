import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom"


class Player extends Component{
    constructor(props){
        super(props)
    }

        render(){
            return(
            <div>
                <img src={ this.props.imgSrc } alt={ this.props.imgAlt }></img>
            </div>
            )
        }
}

export default Player
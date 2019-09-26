import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom"


class Help extends Component{
    constructor(props){
        super(props)
    }
    
        render(){
            var helpStyle={
                'marginTop':'100px'
            }
            return(
           <div style={helpStyle}>
               <h1>Info</h1>

               <p>This is a full stack React app with a back end built in Express and Node.js. The front end of the app allows you to access or edit the database.  <a href="https://secret-sea-08486.herokuapp.com/api/player" target="_blank">Click here to visit the database!</a></p>
           </div>
            )
        }
}

export default Help
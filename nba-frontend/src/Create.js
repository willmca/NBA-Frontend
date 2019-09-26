import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom"


class Create extends Component{
    constructor(props){
        super(props)
    }
    
        render(){
            var helpStyle={
                'marginTop':'100px'
                
            }
            return(
           <div style={helpStyle}>
               <h1>Create a player</h1>

               <p>Fill out these forms with the information for a player you would like to add to the database! Once you press submit, your player will be added to the database and be visible on the home page.</p>
                
                <form>
                    Name:<input type="text"></input>
                    Height:<input type="text"></input>
                    Number:<input type="text"></input>
                    Photo URL:<input type="text"></input>
                    <input type="submit"></input>
                </form>
           </div>
            )
        }
}

export default Create
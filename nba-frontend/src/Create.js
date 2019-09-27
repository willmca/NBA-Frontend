import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom"
import axios from 'axios'


class Create extends Component{
    constructor(props){
        super(props)
        this.state={
            nameValue:"",
            heightValue:"",
            weightValue:"",
            photoValue:""
        }
        this.updateNameValue = this.updateNameValue.bind(this)
        this.updateHeightValue = this.updateHeightValue.bind(this)
        this.updateWeightValue = this.updateWeightValue.bind(this)
        this.updatePhotoValue = this.updatePhotoValue.bind(this)
        this.createPlayer = this.createPlayer.bind(this)



       }
    updateNameValue(evt){
        evt.preventDefault();
        this.setState({nameValue: evt.target.value})
    }
    updateHeightValue(evt){
        evt.preventDefault();
        this.setState({heightValue: evt.target.value})
    }
    updateWeightValue(evt){
        evt.preventDefault();
        this.setState({weightValue: evt.target.value})
    }
    updatePhotoValue(evt){
        evt.preventDefault();
        this.setState({photoValue: evt.target.value})
    }
    createPlayer(evt){
        evt.preventDefault()
        let newPlayer={
            name:this.state.nameValue,
            weight:this.state.weightValue,
            height:this.state.heightValue,
            photo:this.state.photoValue
        }
        axios.post(`https://secret-sea-08486.herokuapp.com/api/player/`, { ...newPlayer })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
        

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
                    Name:<input type="text" onChange={this.updateNameValue}></input>
                    Height:<input type="text" onChange={this.updateHeightValue}></input>
                    Weight:<input type="text" onChange={this.updateWeightValue}></input>
                    Photo URL:<input type="text" onChange={this.updatePhotoValue}></input>
                    <input type="submit" onClick={this.createPlayer}></input>
                </form>
           </div>
            )
        }
}

export default Create
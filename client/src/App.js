import React, { Component } from 'react';
import Card from './components/Card'
import API from './utils/API'
// import Axios from 'axios'
import './App.css';

class App extends Component {
  state={
    randomPeople:[]
  }
  randomize = ()=>{
    API.randomize().then(res=>{
      // console.log(res.data);
      this.setState({randomPeople: res.data})
    })
    .catch(err=> console.log(err))
  }
  handlePost=(data)=>{
    console.log("post obj", data)
    API.saveFriend(data)
    .catch(err => console.log(err))
  }
  handleClick=(obj)=>{
    // this.handleBestScore(this.state.score)
    this.handlePost(obj)
    this.randomize();
  }
  componentDidMount(){
    this.randomize()
  }
  render() {
    return (
      <div className="App container">
      <div className="row">
      {this.state.randomPeople.map(arr=>
      <div key={arr.email} className="col-md-2 col-sm-4 col-xs-6 mb-4">
        <Card  zip ={arr.location.postcode} firstName={arr.name.first} lastName ={arr.name.last} randomize={this.randomize} handleClick={this.handleClick} picture={arr.picture.large}/>
      </div>
    )}
    </div>
    </div>
    )}
  }

export default App;

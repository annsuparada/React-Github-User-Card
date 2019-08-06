import React from 'react';
import ReactDom from 'react-dom'
import axios from 'axios'
import { Card, Icon, Image } from 'semantic-ui-react'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubCard: '',
      followers: []
    }
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchFollowers();
  }

  fetchUsers = () => {
    axios(`https://api.github.com/users/annsuparada`)
      .then(response => {
        console.log('fetchUsers',response)
        this.setState({ githubCard: response.data })
      })
      
      .catch(err => {
        console.log(err)
      })
      
  }

  fetchFollowers = () => {
    axios(`https://api.github.com/users/annsuparada/followers`)
      .then(response => {
        console.log('fetchFollowers',response)
        this.setState({ followers: response.data })
      })
      
      .catch(err => {
        console.log(err)
      })
      
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github User Card</h1>
        </header>
          <img src={this.state.githubCard.avatar_url} />
          <h2>{this.state.githubCard.name}</h2>
          <h4>{this.state.githubCard.location}</h4>
        <div>
        <h4>Followers</h4>
          {this.state.followers.map(item => {
            return(
              <div>
                <p>{item.login}</p>
              </div>
            ) 
          })} 
        </div> 
      </div>
    );
  }
  
}

export default App;

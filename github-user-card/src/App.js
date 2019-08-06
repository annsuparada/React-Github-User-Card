import React from 'react';
import ReactDom from 'react-dom'
import axios from 'axios'
import { Card, Icon, Image } from 'semantic-ui-react'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubCard: ''
    }
  }

  componentDidMount() {
    this.fetchUsers();
    
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

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <h2>{this.state.githubCard.name}</h2>
          {/* <image key={this.githubCard} src={this.githubCard.avatar_url} />   */}
      </div>
    );
  }
  
}

export default App;

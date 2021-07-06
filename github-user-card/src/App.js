import React from 'react';
import axios from 'axios'
import { Card, Button, Image } from 'semantic-ui-react'

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
          <h1>Suparada's Github</h1>
        </header>
        <div className="top-card">
          <div className="flex">
            <img className="ann-img" src={this.state.githubCard.avatar_url} />
          </div>
          <div className="flex">
            <h2>{this.state.githubCard.name}</h2>
            <h4>Username: {this.state.githubCard.login}</h4>
            <h4>Location: {this.state.githubCard.location}</h4>
            <Button color='black' href={this.state.githubCard.html_url} target="_blank">Visit Github</Button>
          </div>  
        </div>
        <div className="followers">
        <h4>Followers: {this.state.followers.length}</h4>
          <Card.Group itemsPerRow={4}>
            {this.state.followers.map(item => {
              return(
                  <Card>
                    <Image key={item} src={item.avatar_url} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{item.login}</Card.Header>
                    <Button size='mini' color='black' href={item.html_url} target="_blank">Visit Github</Button>
                    </Card.Content>
                  </Card>) 
              })} 
          </Card.Group>
        </div> 
      </div>
    );
  }
  
}

export default App;

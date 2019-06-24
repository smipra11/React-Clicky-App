import React, { Component } from 'react';

import './App.css';
import Wrapper from "./components/wrapper";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title"
import friends from "./friends.json"
import Navbar from "./components/Navbar"
import Container from "./components/container"

class App extends Component {
  constructor() {
    super();
    this.state = {
      isguess: true,
      friends: friends,
      score: 0,
      topscore: 0,
      maxscore: 12,
      message: "click on image to begin"
    }
  }

  handlesaveClick = id => {
    const getfriends = this.state.friends
    const friendClicked = getfriends.filter(friend => friend.id === id)

    if (!friendClicked[0].clicked) {

      friendClicked[0].clicked = true;
      this.handleCorrectClick();
      this.shuffleFriend(getfriends);
    }
    else {

      this.handleIncorrectClick();
    }
  }





  shuffleFriend = character => {

    character.sort((a, b) => {
      return 0.5 - Math.random();
    })
  }


  handleCorrectClick = () => {
    this.setState({ isguess: true })
    if (this.state.score + 1 > this.state.topscore) {
      this.setState({ topscore: this.state.topscore + 1 })
    }
    if (this.state.score + 1 > this.state.maxscore) {
      this.setState({
        score: this.state.score + 1,
        massage: "you win!"
      })
    }
    else {
      this.setState({
        score: this.state.score + 1,
        message: "you guess it correctly"
      })
    }
  }





  handleIncorrectClick = () => {
    this.setState({
      message: "you guess it incorect",
      isguess: false

    })
    this.resetGame()

  }




  resetGame = id => {
    const newfriend = this.state.friends;
    for (let i = 0; i < newfriend.length; i++) {
      newfriend[i].clicked = false;
    }
    this.setState({ score: 0 });
  };



  render() {
    const { message, score, friends, topscore } = this.state;
    return (
      <Wrapper>
        <Navbar 
        score = {score}
        topscore = {topscore}
        message = {message}

        />
        <Title/>  
        <Container>
        {friends.map(({ id, name, image, clicked }) => (
          <FriendCard
            id={id}
            key={id}
            name={name}
            image={image}
            clicked={clicked}
            clickHandler={this.handlesaveClick}
          />
        ))}
        </Container>
      </Wrapper>

    );
  }
}


export default App;

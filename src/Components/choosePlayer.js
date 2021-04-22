import React, { Component } from "react";
import "../App.css";

class Player extends Component {
  handleForm = (e) => {
    e.preventDefault();
    this.props.player(e.target.player.value);
  };
  render() {
    return (
      <form onSubmit={(e) => this.handleForm(e)}>
        <label className="label">
          Player X
          <input type="radio" name="player" value="X" />
        </label>
        <label className="label">
          Player O
          <input type="radio" name="player" value="O" />
        </label>
        <input className="form_element" type="submit" value="Start" />
      </form>
    );
  }
}

export default Player;

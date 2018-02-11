import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListTitle from './list-title.js';
import ListCard from './list-card.js';
import SaveButton from './button.js';
import Card from './card.js'

class List extends Component {
  constructor() {
    super()
    state : {
      value: ''
    }
  }

  handleClickEvent = () => {
    console.log(this.state)
  }

  updateValueOfCard = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="list">
        <ListTitle title={this.props.title} />
        <ListCard onChange={this.updateValueOfCard} />
        <SaveButton handleClick={this.handleClickEvent} value="save" />
    </div>
    );
  }
}

export default List;

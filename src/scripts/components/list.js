import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListTitle from './list-title.js';

class List extends Component {
  render() {
    return (
      <div className="list">
        <ListTitle title={this.props.title} />
        <div className="list__card">
          <p>List item 1</p>
        </div>
        <div className="list__card">
          <p>List 2</p>
        </div>
        <div className = "list__card">
          <p>List 1</p>
        </div>
    </div>
    );
  }
}

export default List;

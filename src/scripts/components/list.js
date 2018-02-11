import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListTitle from './list-title.js';

class List extends Component {
  render() {
    return (
      <div className="list">
        <ListTitle title="My title that gets set" />
        <div className="list__item">
          <p>List item 1</p>
        </div>
        <div className="list__item">
          <p>List 2</p>
        </div>
        <div className = "list__item">
          <p>List 1</p>
        </div>
    </div>
    );
  }
}

export default List;

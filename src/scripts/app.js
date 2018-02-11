import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Trello extends Component {

  render() {
    return (
      <div className="trello">
        <div className="list">
          <div className="list__name">
            <h3>Name of the list</h3>
          </div>
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
      </div>
    );
  }
}

 ReactDOM.render((
  <Trello />
), document.getElementById('root'))

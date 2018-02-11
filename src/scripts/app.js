import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/list';
import AddList from './components/add-new-list-button'

class Trello extends Component {

  clickHandler = () => {
    console.log('clicked')
   };

  render() {
    return (
      <div className="trello">
        <List />
        <List />
        <AddList onClick={this.clickHandler}/>
      </div>
    );
  }
}

 ReactDOM.render((
  <Trello />
), document.getElementById('root'))

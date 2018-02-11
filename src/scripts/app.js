import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/list';
import AddList from './components/add-new-list-button'

class Trello extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: ['In progress',' Doing', 'Done'],
    };
  }

  clickHandler = () => {
    return this.state.items.map(this.listTemplate);
   }

   getFullElement() {
    return this.state.title.map((item, index) => <List key={index} title={item} />)
  }

  render() {
    const sectionMarkup = this.state.title && this.state.title.length ? this.getFullElement() : null;

    return (
      <div className="trello">
        {sectionMarkup}
        <AddList onClick={this.clickHandler}/>
      </div>
    );
  }
}

 ReactDOM.render((
  <Trello />
), document.getElementById('root'))



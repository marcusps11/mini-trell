import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddList from '../components/add-new-list-button'
import ListInput from '../components/list-input'

class AddListContainer extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

  updateInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    });
   }

   clickHandler = (event) => {
     console.log('clicked')
   }

  render() {
    console.log(this.state)
    return (
      <div>
        <ListInput value={this.state.inputValue} onChange={this.updateInputValue}/>
        <AddList onClick={this.clickHandler} />
     </div>
    );
  }
}

export default AddListContainer;

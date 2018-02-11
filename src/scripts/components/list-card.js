import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ListCard = ({onChange}) =>
  <input type="text"  placeholder="enter name" onChange={onChange} />

export default ListCard;

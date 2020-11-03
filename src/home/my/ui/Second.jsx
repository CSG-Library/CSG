import React, { Component } from 'react'

import Book from './Book'
import Left from './Left'

import {StyLeft} from './Stylemy'

class First extends Component { 
  render() {
    return (
      <StyLeft>
        <Left></Left>
        <div>
          <Book></Book>
        </div>
      </StyLeft>
    )
  }
}

export default First

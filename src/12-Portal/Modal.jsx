import React, { Component } from 'react'

import withPortal from './withPortal'

import "./style.css"

@withPortal
class Modal extends Component {
  render() {
    return (
      <div className="portal">
        <h1>Portal header</h1>
        <ul>
          <li>55</li>
          <li>666</li>
          <li>555</li>
          <li>555</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button>add</button>
      </div>
    )
  }
}

export default Modal

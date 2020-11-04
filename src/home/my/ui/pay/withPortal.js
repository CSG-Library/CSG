import React, {Component} from 'react'
import { createPortal } from 'react-dom'

function withPortal(WrappedComponent) {
  return class extends Component {
    render() {
      return createPortal(
        <WrappedComponent {...this.props} />,
        document.querySelector('body')
      )
    }
  }
}

export default withPortal
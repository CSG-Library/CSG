import React, { Component } from 'react'

// import Datum from './Datum'
import Left from './Left'
import Data from './Data'

import {StyLeft} from './Stylemy'

class Third extends Component { 
  render() {
    return (
      <StyLeft>
        <Left></Left>
        <div>
          {/* <Datum></Datum> */}
          <Data></Data>
        </div>
      </StyLeft>
    )
  }
}

export default Third

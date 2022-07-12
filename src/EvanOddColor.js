import React, { Component } from 'react'
import EvanOddColorChild from './EvanOddColorChild'
export default class EvanOddColor extends Component {

    render() {
    return (
      <div>
        <EvanOddColorChild number={2}/>
        <EvanOddColorChild number={3}/>
       
      </div>
    )
  }
}

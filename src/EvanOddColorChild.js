import React, { Component } from 'react'

export default class EvanOddColorChild extends Component {
   
  render() { 
    // alert(this.props.number);
    return (
        <>
        { (this.props.number % 2 === 0) ? 
            (<div style={{backgroundColor:'red',height:"50px"}}>even{this.props.number}</div>) : 
            (<div style={{backgroundColor:'yellow',height:"50px"}}>Odd{this.props.number}</div>)
        }
        </>
    )
  }
}

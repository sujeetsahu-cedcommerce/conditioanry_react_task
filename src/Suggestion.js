import React, { Component } from "react";

export default class Suggestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city : ["UTTAR PRADESH","RAJASTHAN","CHATTISGARH","MADHYA PRADESH","GOA","LADDAK","UTTARAKHAND","JAMMU KASHMIR","BIHAR","HIMACHAL PRADESH","ANDRA PRADESH","KOLKATA","CHENNAI","DELHI","MAHARASTRA"],
      get_value : "",
      arr1:[]
    };
  }

  Search = (e) => {
    var tempcity = [];
    let len = e.target.value.length;
    var entered_value = e.target.value;
    // console.log(entered_value);

    if(len){
      this.state.city.map((i) => {
        // console.log(i);
        if(entered_value.toUpperCase()===i.slice(0,len)){
          console.log(i);
          tempcity.push(i);
        }
      }
      )
    }
    this.setState({arr1:tempcity})
  }
  
  render() {
    return <div>
        <input type="text" id="inputtext" onChange={this.Search}></input>

        <div>
          {this.state.arr1.map((i)=>{
            return <div style={{padding:"4px",margin:"2px"}}>{i}</div>
          })}</div>
    </div>
  }
}

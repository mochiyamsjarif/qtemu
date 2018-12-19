import React, { Component } from 'react';

class Member extends Component {
  render() {
    return(
      <div class='container' style= {{marginTop: "10px", align: "centre"}}>
        <div class = "row bg-primary">
          <div class = "col-2">
              <div class="image" style={{align:"left", paddingTop:"10px", paddingBottom:"10px", marginLeft:"20px"}}>
              <img class="rounded-circle" display="block" width="70px" height="70px" src={"https://b.kisscc0.com/20180718/hsw/kisscc0-jerry-mouse-tom-cat-tom-and-jerry-cartoon-jerry-tom-and-jerry-5b4ec733bf7697.8847162715318894597843.jpg"} style={{opacity:"0.8"}}/>
              </div>
          </div>
          <div class="col-6">
              <h4 style={{color:"white", textAlign:"left", marginTop:"10px", marginLeft:"20px"}}>Organizers</h4>
              <p style={{color:"white", textAlign:"left", marginLeft:"20px"}}> JERRY&nbsp;    &nbsp;     &nbsp;   4 others.</p>
          </div>
        </div>
      </div>
        )

    }
} 




export default Member
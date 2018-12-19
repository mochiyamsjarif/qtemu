import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar.js'
import Profil from './hactiv8 profile/containerProfil.js'
import ContainerNextMeetup from './containerNextmeetup.js'
import AboutMeetup from './aboutmeetup.js'
import Member from './containerMembers.js'
import FetchData from './axios.js'
import MemberDetail from './MemberTest.js'
// import OnComingEvent from './containerComingEvent.js'
// import OCEDetails from './containerOCEdetails.js'
// import CardEvents from './containerCardevents.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Profil/>
      <span>
        <h4 class="card-title" style={{marginLeft: "15px", marginTop: "15px"}}>Next Meetup</h4>
        <a class="float-right text-muted" href="#" style={{textAlign:"right", marginRight:"70px", fontWeight:"bold"}}>See all</a>
        </span>
        <br/>
      <ContainerNextMeetup/>
      <span>
        <h4 class="card-title" style={{marginLeft: "15px", marginTop: "15px"}}>About Meetup</h4>
        <a class="float-right text-muted" href="#" style={{textAlign:"right", marginRight:"70px", fontWeight:"bold"}}>See all</a>
        </span>
        <br/>
      <AboutMeetup/>
     <span> 
        <h4 class="card-title" style={{marginLeft: "15px", marginTop: "15px"}}>Members</h4>
        <a class="float-right text-muted" href="#" style={{textAlign:"right", marginRight:"70px", fontWeight:"bold"}}>See all</a>
        </span>
        <br/>
      <Member/>
        <span>
        <h4 class="card-title" style={{marginLeft: "15px", marginTop: "15px"}}>Pasts Meetups</h4>
        <a class="float-right text-muted" href="#" style={{textAlign:"right", marginRight:"70px", fontWeight:"bold"}}>See all</a>
        </span>
        <br/>
      
      </div>

    )}
}

export default App;

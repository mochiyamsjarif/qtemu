import React, { Component } from 'react';
import LogoHactiv from './logohactiv';
import CardBody from './cardbody.js'

class Profil extends Component {
    render() {
      return (
        <div class="container" style={{marginTop: "15px"}}>
            <div class="row -expand-lg navbar-light bg-warning">
                <div class="col-3">
                    <LogoHactiv/>
                </div>
                <div class="col-9">
                    <CardBody/> 
                </div>
            </div>
        </div>
      )}
}

export default Profil
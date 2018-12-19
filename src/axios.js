import React from "react";
import axios from "axios";

class FetchData extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      tidakloading: false
    };
  }
  componentDidMount() {
    axios.get("https://swapi.co/api/people")
      .then(response => {this.setState({ 
        people: response.data.results,
        tidakloading: true
    })}
        
        );
  }
  render() {
    console.log(this.state.people)
    let firstfilter = this.state.people.filter(res => {
    return res.height >= 150 && res.height <= 175
    })

    let secondfilter = firstfilter.filter(res => {
    return res.hair_color != "n/a" && res.hair_color != "none"
    })
    console.log(secondfilter)

    const{people, tidakloading} = this.state
    if(tidakloading){
        return ( <div>
            <h3>Fetching Data...</h3>
            {<ul>{secondfilter.map(p => <li>{p.name} {p.height}cm {p.hair_color} </li>)}</ul>}
        </div>)}
    else if(!tidakloading){
        return (
            <div>
                <img src="https://media1.tenor.com/images/1b173ce0e42fe376352b1defeba93b23/tenor.gif?itemid=10320491"/>
            </div>
                )
                        }
                    }
}


export default FetchData


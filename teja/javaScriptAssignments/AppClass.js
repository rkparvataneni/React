import React from 'react'
import App from "./App";

class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state = { count: 0
        };
    }

    render(){
        const {airportLocations, setAirports} = this.props;
        return(

            <div>
                <div className = "tableConatiner">
                    <table>
                        <thead>
                        <tr>
                            <th>Names</th>
                            <th>Code</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            airportLocations.map((airport) => (
                                <tr>
                                    <td>{airport.name}</td>
                                    <td>{airport.code}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <button onClick={ () => {setAirports([...airportLocations, {name: "sanAntonio", code: "SAN" }])}}>Add to List</button>
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    this.setState({count: this.state.count + 1})
                }}>Increment
                </button>
                <button onClick={() => {
                    this.setState({count: this.state.count - 2})
                }}>Decrement
                </button>

            </div>
        )
    }
}

export default ClassComponent;
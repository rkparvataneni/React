
import logo from './logo.svg';
import './App.css';
import React from 'react';
import ClassComponent from './appClass';
import './tableStyle.css';

function App() {

    var airport =[
        {
            name: 'newyork',
            code: "jfk"
        },
        {
            name: 'newark',
            code: "ewr"
        },
        {
            name: 'philly',
            code: "phl"
        }

    ]
    const [abc, setABC] = React.useState(0);
    const [airports, setAirports] = React.useState(airport);

    return (


        <div className="App">



            <div className="tableConatiner">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        airports.map((airport) => (
                            <tr>
                                <td>{airport.name}</td>
                                <td>{airport.code}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <ClassComponent airportLocations={airports} setAirports = {setAirports} />
            <input type="text" value={abc}/>
            <button onClick={() => setABC(abc + 5)}>Add 5</button>
        </div>
    );
}

export default App;

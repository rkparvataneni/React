import { useState } from "react";
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        state: "",
    });
    const [formEntries, setFormEntries] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormEntries([...formEntries, formData]);
        setFormData({ firstName: "", lastName: "", contact: "", email: "", state: "" });
    };
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div className="form-details">
                    <h2>Form Details</h2>
                    <label htmlFor="firstName">First Name</label>
                    <input  onChange={handleChange} type="text" id="firstName" value={formData.firstName} placeholder="First Name"/>
                    <label htmlFor="lastName">Last Name</label>
                    <input  onChange={handleChange} type="text" id="lastName" value={formData.lastName} placeholder="Last Name"/>
                    <label htmlFor="contact">Contact</label>
                    <input  onChange={handleChange} type="number" id="contact" value={formData.contact} placeholder="+1 (999) 999-99-99"/>
                    <label htmlFor="email">Email</label>
                    <input  onChange={handleChange} type="email" id="email" value={formData.email} placeholder="Email Address"/>
                    <label htmlFor="state">State</label>
                    <select onChange={handleChange} id="state" value={formData.state} name="state">
                        <option value=""></option>
                        <option value="NJ">New Jersy</option>
                        <option value="Ny">New York</option>
                        <option value="ST">Saint Peters</option>
                    </select>
                    <button>Submit</button>
                </div>
            </form>
            {formEntries.length > 0 && (
            <div className="tableDetails">
                <table >
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>State</th>
                    </tr>
                    </thead>
                    <tbody>
                    {formEntries.map((data, index) => (
                        <tr key={index}>
                            <td >{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.contact}</td>
                            <td>{data.email}</td>
                            <td>{data.state}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
                )}
        </div>
    );
}
export default App;

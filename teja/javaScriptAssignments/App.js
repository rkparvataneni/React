import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
    const[formState, setFormState] = React.useState(
        {firstName:'',
            lastName:'',
            DOB: '',
            email:'',
            password:''
        }
    );
    const [formDataList, setFormDataList] = React.useState([]);
    function valueChange(event) {
        const { name, value } = event.target;

        setFormState((prevState)=>({ ...prevState, [name] : value }));

    }
    function submitForm() {
        setFormDataList((list)=>([...list, formState]));
        setFormState(()=>({ firstName:'',
            lastName:'',
            DOB: '',
            email:'',
            password:'' }));
    }

    const formFilled = formState.firstName || formState.lastName|| formState.email || formState.DOB || formDataList.length>0;
    return (

        <div className="App">
            <div className="form">
                <h1> Login</h1>

                <div className="formElements">
                    <lable htmlFor="firstName" className="fullName">FirstName:</lable>
                    <input type="text" id="firstName" className="firstName" name ="firstName" value={formState.firstName} placeholder="First Name" onChange={valueChange} />
                </div>
                <div className="formElements">
                    <lable htmlFor="lastName" className="fullName">Last Name:</lable>
                    <input type="text" id="lastName" className="lastName" name="lastName" value ={formState.lastName} placeholder="Last Name" onChange={valueChange}/>
                </div>

                <div className="formElements">
                    <lable htmlFor="DOB" className="dob">DOB:</lable>
                    <input type="date" id="DOB" className="DOB" name="DOB" placeholder="Date" value ={formState.DOB} onChange={valueChange}/>
                </div>

                <div className="formElements">
                    <lable htmlFor="email" className="emailLabel">Email:</lable>
                    <input type="email" id="email" className="email" name="email" value = {formState.email} placeholder="Email" onChange={valueChange}/>
                </div>
                <div className="formElements">
                    <lable htmlFor="password2" className="password">Password:</lable>
                    <input type="password" id="password2" className="password2" name="password" value ={formState.password}  placeholder="Password" onChange={valueChange} />
                </div>
                <button type="submit" value="Singup" onClick={submitForm}> SingUp</button>
            </div>
            <div className="table">
                {(formFilled)&&(<table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>Email</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        (formState.firstName || formState.lastName|| formState.email || formState.DOB)&&(
                            <tr>
                                <td>{formState.firstName}</td>
                                <td>{formState.lastName}</td>
                                <td>{formState.DOB}</td>
                                <td>{formState.email}</td>
                            </tr>
                        )
                    }
                    {
                        formDataList.map((item)=>(
                            <tr>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.DOB}</td>
                                <td>{item.email}</td>

                            </tr>))
                    }
                    </tbody>
                </table>)}

            </div>

        </div>
    )

}

export default App;

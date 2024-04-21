import React, { useState } from 'react';
import { useSelector,useDispatch} from "react-redux";
import {useNavigate,Navigate } from "react-router-dom";
import { FetchData } from './FetchData';

const RegisterEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMsg,setErrorMsg] = useState('');  
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let regExForUserId = /^\S+@\S+\.\S+$/;
    if(!email.match(regExForUserId)){
        setErrorMsg("Invalid userId");
    }else{
        const user = {
            email:email,
            role:role,
            password:password,
            firstName:firstName,
            lastName:lastName
        }
        dispatch({
            type:"UPDATE",
            payload:user
        });
        if(role==="HR"){
            const dataFunc = FetchData(dispatch);
            dataFunc();
            navigate("/hrdashboard");
        }else{
            navigate("/login");
        }
        
    }

    // You can perform form validation and submission here
    console.log('Form submitted');
  };



  return (
    <div className="container d-flex justify-content-center" style={{height:"600px",padding:"20px"}}>     
      <form onSubmit={handleSubmit} style={{height:"500px",width:"50%",border:"3px black solid",padding:"20px"}}>
      <h2 className="mt-5 pb-5" style={{textAlign:"center"}}>Employee Registration</h2>
      <h4 className='text-danger'>{errorMsg}</h4>
        <div className="mb-3">
           <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder='Enter First Name'
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder='Enter Last Name'
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Enter Email'
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Enter Password'
          />
        </div>
        <div className="mb-3">
        <select class="form-select" aria-label="Default select example" required onChange={ (e) => setRole(e.target.value)}>
            <option selected>Open this select menu</option>
            <option value="HR">HR</option>
            <option value="DELIVERY">Delivery</option>
            <option value="SALES">Sales</option>
            <option value="RND">R&D</option>
        </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default RegisterEmployee;

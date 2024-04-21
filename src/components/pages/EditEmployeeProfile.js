import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";

const EditEmployeeProfile = () => {
  const [employee, setEmployee] = useState({});
  const [message,setMessage]=useState('');
  const {employeeId} =useLocation().state;

  // Fetch employee data from API
  useEffect(() => {
    fetchEmployeeData();
  }, [employeeId]);

  const fetchEmployeeData = async () => {
    axios
        .get("http://localhost:3030/users/"+employeeId)
        .then((res) => {
        setEmployee(res.data)
      })
  };

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    
    if(name.includes('company.title')){
      const companyField = name.split('.')[1];
      setEmployee({
        ...employee,
        company: {
          ...employee.company,
          [companyField]: value
        }
      });
      console.log("=============>Value"+value);
    }else if(name.includes('company.department')){
      const companyField = name.split('.')[1];
      setEmployee({
        ...employee,
        company: {
          ...employee.company,
          [companyField]: value
        }
      });
    }else if(name.includes('address.address')){
      const companyField = name.split('.')[1];
      setEmployee({
        ...employee,
        address: {
          ...employee.address,
          [companyField]: value
        }
      });
      console.log("=============>Value"+value);
    }else{
      setEmployee({ ...employee, [name]: value });
    }
    console.log("=============>Name"+JSON.stringify(employee))

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:3030/users/${employeeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
      });
      console.log('save employee..'+JSON.stringify(employee));
      if (!response.ok) {
        throw new Error('Failed to update employee profile');
      }
      setMessage('Employee profile updated successfully');
      console.log('Employee profile updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className='text-center pb-5'>Edit Employee Profile</h2>
      <h5 className='text-success text-center'>{message}</h5>
      <div className='d-flex justify-content-center border-2 pb-5'>
      <form onSubmit={handleSubmit} style={{width:"50%"}}>
        <div className="mb-3 row">
          <div class="col">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={employee.firstName}
            onChange={handleInputChange}
            required
          />
          </div>
          <div class="col">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={employee.lastName}
            onChange={handleInputChange}
            required
          />
          </div>
        </div>
        <div className="mb-3">
          
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={employee.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department:</label>
          <input
            type="text"
            className="form-control"
            id="department"
            name="company.department"
            value={employee.company===undefined?'':employee.company.department}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">Position:</label>
          <input
            type="text"
            className="form-control"
            id="company.title"
            name="company.title"
            value={employee.company===undefined?'':employee.company.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address.address"
            value={employee.address===undefined?'':employee.address.address}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className='text-center'><button type="submit" className="btn btn-primary">Save Changes</button></div>
      </form>
      </div>
    </div>
  );
};

export default EditEmployeeProfile;

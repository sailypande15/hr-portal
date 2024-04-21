import React from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";




function HRDashboard(){   
   
   const data =useSelector((state)=>{
    return state['dataReducer'].users;
   
  })
  const items = [];
  if(data !== undefined && data[0]!==undefined){
  for (const employee of data[0]){
      items.push(<tr key = {employee.id}>
                    <td> { employee.id} </td>   
                    <td> {employee.name} {employee.lastName}</td>
                    <td> {employee.email}</td>
                    <td> {employee.company.department}</td>
                    <td> <Link to={"/editProfile"} state={{employeeId:employee.id}}>Edit</Link></td>
                  </tr>)
        }
    }
                    
  
    return(
        <div className="container mt-4">
        <h1 className="text-center mb-4">HR Dashboard</h1>
        <div className="row">
          <div className="col-md-12">
            <h2>Employee Details</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {items}                                  
              </tbody>
            </table>
          </div>
        </div>
    
        
      </div>
    
      

    )
}
export default HRDashboard;
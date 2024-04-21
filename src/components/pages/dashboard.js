import React from "react";
import { Link } from "react-router-dom";
import '../../styles/dashboard.css'
import { useSelector} from "react-redux";




function Dashboard(){
    const user = useSelector((state)=>{return state["userReducer"].userProfile});
    return(
        <div>
       <div className="row p-xl-3" style={{width:"100%"}}>
        <div className="col-3" >
        <div className="card">
                    <div className="p-3">
                    <img src={user.image} className="card-img-top rounded" alt="..." style={{width:"50%",height:"150px"}}/>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{user.firstName}  {user.lastName}</h3>
                        <h5>{user.company.title}</h5>
                        <p>DOB: {user.birthDate}</p>
                        <p>Gender: {user.gender}</p>
                        <p>Nationality: Indian</p>
                        <p>Department: {user.company.department}</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p><Link to={"/editProfile"} state={{employeeId:user.id}}> Edit Profile</Link></p>
                        {(() => {
                        if(user.company.department==="Human Resources"){
                            return (
                                <>
                                    <p><Link  to={"/hrdashboard"}>Hr Dashboard</Link></p>
                                </>
                        )}
                        
                         })()}
                    </div>
                </div>
        </div>
        <div className="col-9 ">        
            <div className="row" >
                <div className="col">
                            <div className="card mb-3" style={{width:"100%"}}>
                                <div className="row g-0">
                                <div className="col-2 bg-success">                
                                </div>
                                <div className="col-10">
                                <div className="card-body" style={{height:"200px"}}>
                                    <h5 className="card-title">Leaves</h5>
                                    <div className="card-text text-start">
                                        <ul style={{ listStyleType: "none"}}>
                                            <li style={{fontSize:"12px"}}>Privilege Leave (PL) : <b>12</b> </li>
                                            <li style={{fontSize:"12px"}}>Casual Leave (PL) : <b>2</b> </li>
                                            <li style={{fontSize:"12px"}}>Sick Leave (PL) :<b>15</b> </li>
                                        </ul>

                                    </div>
                                    
                                </div>
                                <div className="card-footer">
                                <p className="card-text"><small><Link to={"/leave"}>Apply For Leave</Link></small></p>
                                </div>
                                </div>      
                                </div>
                            </div>
                </div>
                <div className="col">
                    <div className="card mb-3" style={{width:"100%"}}>
                      <div className="row g-0">
                        <div className="col-2 bg-primary">                
                        </div>
                        <div className="col-10">
                            <div className="card-body" style={{height:"200px"}}>
                                <h5 className="card-title">Trainings Completed</h5>
                                <div className="card-text">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </div>
                            </div> 
                            <div className="card-footer">
                                <p className="card-text"><small><Link to={"/trainings"}>Complete Training</Link></small></p>
                                </div>                           
                        </div>
                     </div>
                    </div>               
                </div>
                <div className="col">
                    <div className="card mb-3 p-0" style={{width:"100%"}}>
                      <div className="row g-0 p-0">
                        <div className="col-2 bg-danger">                
                        </div>
                        <div className="col-10">
                            <div className="card-body" style={{height:"200px"}}>
                                <h5 className="card-title">To Do Tasks</h5>
                                <div className="card-text text-start">
                                <ul>
                                            <li style={{fontSize:"12px"}}>Submit the Timesheet</li>
                                            <li style={{fontSize:"12px"}}>Apraisal pending for employee comments</li>
                                            <li style={{fontSize:"12px"}}>Last date for mandatory trainings is 31 March 2024</li>
                                        </ul>
                                </div>
                            </div>
                            <div className="card-footer">
                                <p className="card-text"><small><Link to={"/todolist"}>View Tasks</Link></small></p>
                                </div>
                        </div>
                     </div>
                    </div>               
                </div>   
</div>
<div className="row" style={{height:"50px"}}>

</div>
<div className="row">
        <div className="w-100 bg-white">
            <h3>Reportees:</h3>
            {(() => {
                if(user.company.title.includes('Manager')){
                    return (
                    <div className="row mt-4">
                        <div className="col-md-3 text-center"><img src="/images/profile-pic.jpeg" className="img-thumbnail h-50" alt="..." ></img><p>Rahul Kumar</p></div>
                        <div className="col-md-3 text-center"><img src="/images/noimage.png" className="img-thumbnail h-50" alt="..." ></img><p>Rohini Dutt</p></div>
                    </div>);
                }else{
                    return (<h1>No Reportees</h1>);
                }
      })()}
            
            </div>

       </div>
       </div>
       </div>
       
       </div>
       
    )
}

export default Dashboard;
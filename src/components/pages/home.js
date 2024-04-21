import React, { useEffect } from "react";
import '../../styles/home.css'
import { useState } from "react";
import {useNavigate,Navigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { FetchData } from "./FetchData";
import axios from "axios";



function Home(){
    
    //const users =[{email:"user1@gmail.com",password:"password",role:"HR",firstname:"Test",lastname:"Test"}];
    const navigate = useNavigate();
    const [formData, setFormData] = useState({email:'',password:'',emailErrorMsg:false,passwordErrorMsg:false});
    const [errorMsg,setErrorMsg] = useState('');
    const [users,setUsers] = useState([]);
   
    const dispatch=useDispatch();
    const updateUser=(user)=>{
        dispatch({
          type:"UPDATE",
          payload:user
        })
       
     }
     const updateUsers=(users)=>{
        dispatch({
          type:"UPDATE_DATA",
          payload:users
        })
       
     }
    
     console.log('user data before login..'+JSON.stringify(users));
    const login =(event)=>{
        event.preventDefault();
        let regExForUserId = /^\S+@\S+\.\S+$/;
        if(!formData.email.match(regExForUserId)){
            setErrorMsg("Invalid userId");
        }else{
            let userValid =users.find((user)=>{return (user.email===formData.email) && (user.password===formData.password)})
            if(userValid){               
                setFormData({...formData,email:'',password:''});
                updateUser(userValid);
                updateUsers(users);
                if(userValid.company.department==="Human Resources"){
                   navigate("/hrdashboard");
                }else{
                    navigate("/login");
                }
                
                
            }else{
                setErrorMsg("Userid / Password is invalid")
            }

        }
        


    }
    useEffect(() => {
        axios
        .get("http://localhost:3030/users")
        .then((res) => {
        setUsers(res.data)
      })
        console.log('inside the useeffect')
      })
    
     const user = useSelector((state)=>{return state.userReducer});
    
    if (Object.keys(user.userProfile).length===0){
        return(
            <>  
            <div  style={{width:"100%",paddingTop:"70px",paddingBottom:"70px"}} className="row">
                     <div className=" col-2">
                 
                 </div>
                <div className="text-center bg-white p-5  bg-img col-4">
                 
                </div>
                <div className=" text-center bg-white p-5 col-4" >
                <div className="login-form border p-5">
                <h3 className="text-center mb-4 ">Login</h3>
                <p style={{color:"red"}}>{errorMsg}</p>
                <form>
                    <div className="form-group ">
                    <input type="email" className="form-control" id="email" value={formData.email} placeholder="Enter email" onChange={(event)=>{setFormData({...formData,email:event.target.value});setErrorMsg('')}}/>
                    </div>
                    <div className="form-group pt-4 pb-4">
                    <input type="password" className="form-control" value={formData.password} id="password" placeholder="Password" onChange={(event)=>{setFormData({...formData,password:event.target.value});setErrorMsg('')}}/>
                    </div>
                    <button type="submit" className="btn btn-dark btn-block" onClick={login}>Login</button>
                </form>
                </div>
    
    
                </div>
                <div className=" col-2">
                 
                 </div>
            </div>
            
            </>
        )
    }else{
        return <Navigate to={"/login"}/>
    }
    
}

export default Home;
import React from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";

function Header(){
    const logout=()=>{
        dispatch({
          type:"UPDATE",
          payload:{}
        })
    }
    const user = useSelector((state)=>{return state["userReducer"].userProfile});
    const dispatch = useDispatch();
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{paddingLeft:"20px",backgroundColor: "rgb(9, 9, 75)"}}>;
            <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>HR Portal</Link>
            
            <div className="d-flex">
            <ul className="nav navbar-nav navbar-right">
            {(() => {
                if(Object.keys(user).length===0){
                    return (
                        <>                        
                            <li className="p-3 text-white"><Link to={"/signup"}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                            <li className="p-3 text-white"><Link  to={"/login"}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </>
                        );
                }else{
                    return (
                        <>
                            <li className="p-1 text-white">Welcome <Link to={"/editProfile"} state={{employeeId:user.id}} className="text-light">{user.firstName} </Link> !!</li>
                            <li className="p-1"><Link  onClick={logout} className="text-white"><span className="glyphicon glyphicon-log-in"></span> Logout</Link></li>
                        </>
                    );
                }     
                 })()}
               
            </ul>
                </div>
            </div>
            </nav>
    )
}

export default Header;
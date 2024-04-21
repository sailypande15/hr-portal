import './App.css';
import Footer from './components/footer';
import Home from './components/pages/home';
import Menu from './components/menu';
import News from './components/pages/News';
import {Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Dashboard from './components/pages/dashboard';
import Header from './components/header';
import LeaveApplication from './components/pages/LeaveApplication';
import TrainingPortal from './components/pages/TrainingPortal';
import ToDoList from './components/pages/ToDoList';
import { useSelector} from "react-redux";
import Protected from './components/Protected';
import HRDashboard from './components/pages/hrdashboard';
import RegisterEmployee from './components/pages/RegisterEmployee';
import EditEmployeeProfile from './components/pages/EditEmployeeProfile';


const UserSignedIn=()=>{
  
  const user = useSelector((state)=>{
    return state["userReducer"]});
  if (Object.keys(user.userProfile).length===0){
    return true;
  }
  return false;
}


function App() {
  return (
    <>
    <div>
      <Header/>
      <Menu/> 
      <div className='vertical-center'>       
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<RegisterEmployee/>}></Route>
      <Route path='/news' element={<News/>}></Route>
      <Route path='/login' element={
      <Protected isSigned={UserSignedIn()}>
       <Dashboard/>
       </Protected>
      }>

      </Route>
      <Route path='/hrdashboard' element={
      <Protected isSigned={UserSignedIn()}>
       <HRDashboard/>
       </Protected>
      }>

      </Route>
      <Route path='/leave' element={
          <Protected isSigned={UserSignedIn()}>
          <LeaveApplication/>
          </Protected>
          }>
      </Route>
      <Route path='/trainings' element={
        <Protected isSigned={UserSignedIn()}>
        <TrainingPortal/>
        </Protected>}>
      </Route>
      <Route path='/todolist' element={<ToDoList/>}></Route>
      <Route path='/editProfile' element={
      <Protected isSigned={UserSignedIn()}>
       <EditEmployeeProfile/>
       </Protected>
      }>

      </Route>
      </Routes>      
      </div>            
    </div>
    <Footer/>  
    </>
       
  );
}

export default App;

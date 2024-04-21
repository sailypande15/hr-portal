import axios from "axios";

export const FetchData=(dispatch)=> {
    return async getEmpData  => {
        const response=await axios.get("http://localhost:3030/users");
        dispatch(
          {
              type:"UPDATE_DATA",
              payload:response.data


        })
        
        
    }

}
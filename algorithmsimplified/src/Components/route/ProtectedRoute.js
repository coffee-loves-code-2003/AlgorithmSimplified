import { useSelector } from "react-redux";
import {Navigate} from 'react-router-dom'
import Loader from "../Other_Styles/Loader";
export default function ProtectedRoute({children})
{
    const{isAuthenticated,loading}=useSelector(state=>state.authState);
    if(loading)
        {
            return <div><Loader/></div>
        }

    if(!isAuthenticated)
    {
        return <Navigate to="/login"/>
    }
    return children;
}
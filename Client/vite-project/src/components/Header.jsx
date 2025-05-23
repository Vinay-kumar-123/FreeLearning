import React from "react";
import { GraduationCap } from "lucide-react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import store from "../redux/store";
import { FaUserCircle } from 'react-icons/fa';
import axios from "axios";
import { setUser } from "../redux/authSlice";
import { toast } from 'react-toastify';
const Header = () => {
  const {user} = useSelector(store=>store.auth)
  const dispatch = useDispatch()
  const logoutHander = async (e) => {
    try {
     const res =  await axios.get('http://localhost:8000/api/v1/user/logout', {withCredentials:true});
     if(res.data.success){
       dispatch(setUser(null))
       toast.success(res.data.message)
     }
    } catch (error) {
      console.log(error)
      toast.error(error.res.data.message)
    }
  }
  return (
    <>
      <div className="header">
        <div className="header_container">
          <div className="logo">
            <GraduationCap className="cap" />
            <h1 className="logoname">Logo</h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link  to='/course'>Course</Link></li>

              {
                !user ? (
                  <div className="auth">
                    <Link to='/login'>
                     <button type="button" className="btn btn-primary">
                       Login
                      </button>
                    </Link>
                   
                    <Link to='/Signup'>
                    <button type="button" className="btn btn-secondary">
                      Signup
                    </button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link to='/profile'> <FaUserCircle size={40} color="#FFFFFF" /></Link>
                    <button onClick={logoutHander} type="button" className="btn btn-primary">
                      Logout
                    </button>
                  </>
                  
                )
              }
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

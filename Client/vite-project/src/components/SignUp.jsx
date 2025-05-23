import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser((prev) => ({
      ...prev,
      [name]:value
    }))
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user)
    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/register', user, {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      })
      if (response.data.success) {
        navigate('/login')
        toast.success(response.data.message)
      } else {
        
        toast.error(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="Signup-container">
        <div className="signup-box">
          <h1 style={{ textAlign: "center" }}>Create Your Account</h1>
          <p style={{ textAlign: "center" }}>
            Join us today! It's quick and easy
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your name"
                id="name"
                onChange={handleChange}
                value={user.name}
                name="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
                name="email"
                onChange={handleChange}
                value={user.email}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Create a Password"
                id="password"
                onChange={handleChange}
                name="password"
                value={user.password}
              />
            </div>
            <div className="p-6 bg-gray-100 rounded-md w-fit">
              <p className="font-semibold text-lg">Role</p>
              <div>
                <label htmlFor="role1" className="flex items-center space-x-2 mx-2 mb-2">
                  <input  style={{ accentColor: "#0d6efd" }}
                    type="radio"
                    id="role1"
                    name="role"
                    value="student"
                    checked={user.role === "student"}
                    onChange={handleChange}
                  />
                  <span className="mx-2">Student</span>
                </label>

                <label htmlFor="role2" className="flex items-center space-x-2 mx-2 ">
                  <input  style={{ accentColor: "#0d6efd" }}
                    type="radio"
                    id="role2"
                    name="role"
                    value="instructor"
                    checked={user.role === "instructor"}
                    onChange={handleChange}
                  />
                  <span className="mx-2">Instructor</span>
                </label>
              </div>
            </div>

            <button 
           onClick={handleSubmit} type="submit" className="btn btn-primary signup ">
              Signup
            </button>
            <div className="mb-3">
              <p style={{ textAlign: "center" }}>
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

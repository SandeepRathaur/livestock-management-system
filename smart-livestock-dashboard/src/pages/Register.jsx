// Importing React and useState hook to manage component state
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if(phone.length !== 10){
      setError("Enter valid phone number");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      setError("Only Gmail accounts are allowed.");
      return;
    }

    const name = document.querySelector('input[placeholder="Farmer Name"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    try {
      const res = await fetch("https://livestock-backend-8osq.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      alert("Registration Successful");

      navigate("/login");

    } catch (err) {
      setError("Server error");
    }
  };

  return (

    <div className="auth-bg">

      <form className="auth-card" onSubmit={submit} style={{background:"none"}}>

        <h2
          className="register-title"
          style={{textAlign:"center",fontSize:"30px"}}
        >
          Farmer Registration
        </h2>

        {/* Only changed for responsive CSS */}
        <div className="register-form-container">

          <div style={{fontWeight:"bold"}}>Farmer Name:-</div>

          <input
            className="auth-input"
            placeholder="Farmer Name"
            required
            style={{fontSize:"15px"}}
          />

          <div style={{fontWeight:"bold",marginTop:"10px"}}>
            Farmer Address:-
          </div>

          <input
            className="auth-input"
            placeholder="Farmer Address"
            required
            style={{fontSize:"15px"}}
          />

          <div style={{fontWeight:"bold",marginTop:"10px"}}>
            Mobile No.:-
          </div>

          <input
            className="auth-input"
            placeholder="Mobile No."
            required
            style={{fontSize:"15px"}}
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />

          <div style={{fontWeight:"bold",marginTop:"10px"}}>
            Email ID:-
          </div>

          <input
            className="auth-input"
            placeholder="Email ID"
            required
            style={{fontSize:"15px"}}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          {error && (
            <p style={{color:"red",fontSize:"14px"}}>
              {error}
            </p>
          )}

          <div style={{fontWeight:"bold",marginTop:"10px"}}>
            Password:-
          </div>

          <input
            className="auth-input"
            placeholder="Password"
            required
            style={{fontSize:"15px"}}
          />

          <button
            type="submit"
            className="register-button"
            style={{
              color:"white",
              backgroundColor:"aqua",
              padding:"10px",
              fontSize:"20px",
              textAlign:"center",
              borderRadius:"25px",
              margin:"10px"
            }}
          >
            Register
          </button>

          <div style={{color:"white",marginTop:"10px",textAlign:"center"}}>
            Already have an Account?
            <Link to="/login" style={{color:"aquamarine"}}>
              Login
            </Link>
          </div>

        </div>

      </form>

    </div>
  );
}
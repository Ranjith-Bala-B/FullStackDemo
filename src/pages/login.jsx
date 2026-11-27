import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Login(){
    const navigate=useNavigate();
    const location = useLocation();
    const registerdata = location.state;
    //const[email,setEmail]=useState("")
    //const[pass,setPass]=useState("")
    const[formdata,setFormdata]=useState({user:"",pass:""})

    const print = (e)=>{
        e.preventDefault();
        console.log("Register data",registerdata)
        console.log("Login data",formdata)
        if(formdata.user===registerdata.name && formdata.pass===registerdata.password){
            console.log("Login Success")
            navigate("/dashboard",{state:formdata})
        }else{
            console.log("Invalid credentials")
        }
    }

function handlechange(e){
    e.preventDefault();
    setFormdata({...formdata,[e.target.name]:e.target.value})
}

    return( 
    <>
{/*
    <div>
        <label>Email </label>
        <input placeholder="Enter email" required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label>Password </label>
        <input placeholder="Enter Password" required type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />

        <button onClick={()=>console.log(email,pass)}>Submit</button>
    </div>


    <form onSubmit={print}>
        <label>Email </label>
        <input placeholder="Enter email" required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label>Password </label>
        <input placeholder="Enter Password" required type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />

        <button type="submit">Submit</button>
    </form>
    */}

    <form onSubmit={print}>
        <label>Username </label>
        <input placeholder="Enter username" required type="text" name="user" onChange={handlechange} />

        <label>Password </label>
        <input placeholder="Enter Password" required type="password" name="pass" onChange={handlechange} />

        <button type="submit">Submit</button>
    </form>

    </>
    );
}
export default Login;
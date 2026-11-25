import { useState } from "react";

function Login(){
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")

    const print = (e)=>{
        e.preventDefault();
        console.log(email,pass)
    };
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
*/}

    <form onSubmit={print}>
        <label>Email </label>
        <input placeholder="Enter email" required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    
        <label>Password </label>
        <input placeholder="Enter Password" required type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />

        <button type="submit">Submit</button>
    </form>
 
    </>
    );
}
export default Login;
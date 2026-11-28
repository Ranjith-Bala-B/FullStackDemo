import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
    //function displaydata(){
    //    setUserdata(location.state);
    //    console.log(userdata)
    //}

    useEffect(()=>{setUserdata(location.state);},[])
    return ( 
        <>
            {/*<button onClick={displaydata}>button</button>*/}
            <div>{userdata.user}</div>
            <div>{userdata.pass}</div>
        </>
    );
}

export default Dashboard;
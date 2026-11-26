import { useLocation } from "react-router-dom";

function Dashboard(){
    const location=useLocation();
    const[userdata,setUserdata]=useState("");
    function diplaydata(){
        setUserdata(location.state);
        console.log(userdata)
    }

    return(
        <>
        <button onClick={displaydata}>button</button>
        </>
    );
}
export default Dashboard
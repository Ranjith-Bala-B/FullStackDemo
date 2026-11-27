import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { registerschema } from "../components/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register succes")
        navigate("/", {state: data})
    }
return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300">
        <form onSubmit={handleSubmit(onSubmit1)} className="bg-white p-8 w-95 border border-black">
            <h2 className="text-3xl font-semibold mb-5 text-center">Register</h2>

            <label>Name</label>
            <input className="border border-black rounded-3xl p-2 w-full mb-2 " placeholder="Enter your name" type="text" {...register("name")} />
            <p className="text-red-600">{errors.name?.message}</p>

            <label>Email</label>
            <input className="border border-black rounded-3xl p-2 w-full mb-2 " placeholder="Enter your email" type="email" {...register("email")} />
            <p className="text-red-600">{errors.email?.message}</p>

            <label>Password</label>
            <input className="border border-black rounded-3xl p-2 w-full mb-2" placeholder="Enter Password" type="password" {...register("password")} />
            <p className="text-red-600">{errors.password?.message}</p>

            <label>Age</label>
            <input className="border border-black rounded-3xl p-2 w-full mb-2" placeholder="Enter your age" type="number" {...register("age")} />
            <p className="text-red-600">{errors.age?.message}</p>

            <button className="bg-black text-white rounded-3xl p-2 w-full mt-3" type="submit">
                Submit
            </button>
        </form>
    </div>
);
}

export default Register;
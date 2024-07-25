"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LabelledInput } from "../components/LabelledInput";


export default function Signin (){
    const [credentials, setCredentials] = useState({
        email:"",
        name:"",
        password:""
    });
    const router = useRouter();

    const type="signin";

    const onClickSignup = ()=>{
        router.push('/');
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="sign-header mb-7">
                <h2 className="font-bold text-2xl">{type==="signup" ? "Create an Account" : "Sign In"}</h2>
                <p className="text-md text-slate-400">{type==="signup" ? 
                (
                    <>
                        Already have an Account? <Link href={'/signin'} className="underline">Sign In</Link>
                    </>) : (
                        <>
                            Dont have an account? <Link href={'/signup'} className="underline">Sign Up</Link>
                        </>
                    )}</p>
            </div>
            <div className="signup-body flex flex-col justify-center items-center">
                {type==="signup" ? <LabelledInput label="Name" placeholder="John Doe" value={credentials.name || ""} name="name" onChangeFunc={(e)=>{
                    setCredentials({
                        ...credentials,
                        name:e.target.value
                    })
                }}/> : null}
                <LabelledInput label="Email" placeholder="johndoe@example.com" value={credentials.email} name="email" onChangeFunc={(e)=>{
                    setCredentials({
                        ...credentials,
                        email: e.target.value
                    })
                }}/>
                <LabelledInput label="Password" type={"password"} placeholder="Enter your password" name="password" value={credentials.password} onChangeFunc={(e)=>setCredentials({
                    ...credentials,
                    password: e.target.value
                })}/>
                <button type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={onClickSignup}>{type==="signup"?"Sign Up" : "Sign In"}</button>
            </div>  
        </div>
    )
}


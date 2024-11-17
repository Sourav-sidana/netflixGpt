import { set } from "lodash"
import { useState } from "react"

const Header = ()=>{
    const [isSignIn, setISSingIn] = useState(true)
    function handleClick(){
setISSingIn(!isSignIn)
    }
    return(
        <div>
          
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" className="w-44" />
            <div>
                <form action="" className="w-96  mx-auto my-20 flex flex-col bg-black bg-opacity-80 rounded-lg  py-8 ">
                    <h1 className="text-2xl px-16 py-4  text-left font-bold">{ isSignIn ? "Sign in" : "Sign up"}</h1>
                {!isSignIn && <input type="text" placeholder="Full Name"  className="my-2  mx-16 px-4 py-3 rounded-sm bg-black opacity-70 border border-gray-400"/>}
                <input type="text" placeholder="Email Address"  className="my-2  mx-16 px-4 py-3 rounded-sm bg-black opacity-70 border border-gray-400"/>
                <input type="password" placeholder="password" className="my-2 mx-16 px-4 py-3 bg-black opacity-70 border border-gray-400 rounded-sm"/>
                <button className="my-2 mx-16 px-4 py-2 bg-red-600   rounded-sm">{ isSignIn ? "Sign in" : "Sign up"}</button>
                <div className="px-16 py-4" onClick={()=>handleClick()}>{ isSignIn ? "new to netflix? sign-up Now" : "Already a member sign in now"}</div>
                </form>
            </div>
          
        </div>
    )
}
export default Header


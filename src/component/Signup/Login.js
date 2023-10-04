import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo.png";
import google from "../../Assets/Google svg.png";
import facebook from "../../Assets/Facebook svg.png";
import { auth } from "../Config/Firebase";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState()
  const [userName, setUserName] = useState(""); 
const navigate = useNavigate()


const handleLogin = async (e) => {
  e.preventDefault();
  try {
    setError(null); 
   const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    const displayName = user.displayName;
    console.log(displayName)
    setUserName(displayName)
    console.log(userName)
    navigate("/video");
  } catch (error) {
    setError(error.message); 
  }
};
const handleSignup = async (e) => {
  e.preventDefault();
  try {
    setError(null); 
    const result = await createUserWithEmailAndPassword(auth, email, password);
   
    navigate("/video");
  } catch (error) {
    setError(error.message); 
  }
};

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setError(null); 
     const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const displayName = user.displayName;
      console.log(displayName)
      setUserName(displayName)
      navigate("/video");
    } catch (error) {
      setError(error.message); 
    }
  };; 
  
    const handleFacebookLogin = async () => {
      const provider = new FacebookAuthProvider();
      try {
        setError(null);
        await signInWithPopup(auth, provider);
        navigate('/video')
      } catch (error) {
        setError(error.message)
        console.error(error.message);
      }
    };

  return (
    <div>
      <section className="container mx-auto">
      <div className="mx-5">
                <img
                  src={logo}
                  className="  mt-8 mx-8 ml-0"
                />
              </div>
        <div className="min-h-screen w-full  text-gray-900 flex justify-center">
          
    
          <div className=" m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center ">
            <div className=" p-6 sm:p-12">
              
              <div className=" w-full flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-bold py-3">
                  Log in or Sign up
                </h1>
                <p className="text-sm text-lightgray w-4/6">Join millions of others in sharing successful moves on <span className="text-gray-800 font-semibold">HelpMeOut.</span></p>
                <div className="w-full flex-1 mt-8">
                  <div className="flex flex-col items-center">
                    <button className="w-full  font-bold shadow-sm rounded-lg py-2 border border-herotext text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                      <div >
                        <img src={google} alt="google-logo" />
                      </div>
                      <span className="ml-4 text-herotext font-medium" >Continue with Google</span>
                    </button>

                    <button className="w-full font-bold shadow-sm rounded-lg py-2 border border-herotext text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                      <div>
                        <img src={facebook} alt="facebok-logo"/>
                      </div>
                      <span className="ml-4 text-herotext font-medium" >Continue with Facebook</span>
                    </button>
                  </div>

                  <div className="my-12 border-b text-center">
                    <div className="leading-none px-3 inline-block text-sm text-lightergray tracking-wide font-medium bg-white transform translate-y-1/2">
                      or 
                    </div>
                  </div>

                  <div className="mx-auto w-full">
                    <form className="flex justify-start flex-col" >
                    {error && ( 
            <div className="mb-4 text-red-600">{error}</div>
          )}
                  <div className="text-start py-3">
                  <label className="font-semibold text-xs font-medium py-2 text-start" for="usernameField"> Email</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg font-medium  border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                    />
                    </div>
                    <div className="text-start">                     <label className="font-semibold py-2 text-xs font-medium text-start" for="password">Password</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg font-medium  border border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your Password"
                    />
                    </div>
                    <button type="submit" className="mt-5 tracking-wide font-semibold bg-bluetwo text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      
                     <Link to='/video'><span className="ml-3">Sign Up</span></Link>
                    </button>
                    </form>
                    
                  </div>
                </div>
              </div>
            </div>
           
          </div>
         
        </div>
      </section>
    </div>
  );
}

export default Login;

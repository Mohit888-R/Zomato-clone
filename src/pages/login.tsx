import React,{useState} from 'react'
import {FcGoogle} from "react-icons/fc";
import { useUserAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Login() {
  const [email,setEmail] = useState("");
  const [password, setPassword ] = useState("");
  const {logIn,googleSignIn} =useUserAuth();
const router = useRouter();

  const handleSubmit = async(e: { preventDefault: () => void; })=>{
    e.preventDefault();

    try{
      await logIn(email,password);
        router.push('/home');
        alert("You are Login Successfully!!!");
            
    }catch(err){
      console.log(err.message);
      alert('please fill right properties!!!');
    }
  }

  const handleGoogleIn = async(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    try{
      await googleSignIn();
      router.push('/home');
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <div className='h-screen w-full grid content-center   '>
      <div className='border bg-gray-100 lg:w-4/12 w-10/12  m-auto justify-center rounded-lg  '>
          <h1 className='px-5 py-2 text-3xl font-medium text-gray-600'>Log in</h1>
          <form onSubmit={handleSubmit}>
          <div className="relative m-5">
    <input type="text" id="floating_outlined" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-00 bg-transparent rounded-lg border border-gray-600 appearance-none dark:text-gray400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email </label>
</div>
<div className="relative m-5 mb-2">
    <input type="text" id="floating_outlined_password" name='password' value={password}  onChange={(e)=>setPassword(e.target.value)} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-00 bg-transparent rounded-lg border border-gray-600 appearance-none dark:text-gray400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_outlined_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
</div>
<div className='px-5 pb-3 py-2 flex'>
  <div>
  <input id='term' type="checkbox" /> 
  </div>
  <label htmlFor='term' className='self-center text-xs px-1'>Remember me</label>
</div>
<div className='px-5 py-2'>
<button type="submit" className="w-full  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-700  ">Log In</button>
</div>   
<div className='px-5 py-2'>
<div className='w-full'>
  <p className='grid grid-cols-7 w-full'> <hr className='self-center col-span-3'/> <span className='m-auto justify-center text-xl text-gray-700'>or</span> <hr className='self-center col-span-3'/> </p>
</div>
</div>

<div className='px-5 py-2'>
  
  <div className='w-full border-2 rounded-lg py-2 cursor-default'   onClick={handleGoogleIn}>
      <div className='flex m-auto justify-center'><FcGoogle className='text-3xl'/><span className='px-2 text-xl self-center'> Continue with Google </span></div>
  </div>

  <div>
    <div>
      <p className='text-xl text-gray-700 py-5 px-1'>New to Zomato? <Link href="/register" className='text-red-600'>Sign up</Link> or <Link href="/" className='text-orange-500 self-center'>Skip</Link></p>
    </div>
  </div>
</div>

          </form>
      </div>
    </div>
  )
}

export default Login;
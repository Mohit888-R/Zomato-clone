import React from 'react'
import { useState } from 'react';
import { useUserAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Register() {
  // const [user,setUser] = useState({
  //   name:"",
  //   email:"",
  //   password : ""
  // });
  // const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword ] = useState("");
  const {signUp} =useUserAuth();
  let router = useRouter();

  const handleSubmit = async(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    try{
      await signUp(email,password);
      router.push('/');
      alert("You are SignUp Successfully!!!");
    }catch(err){
      console.log(err.message);
    }
  }
  // const register =()=>{
    // createUserWithEmailAndPassword(auth,name,email,password)
    //   .then((res)=>{
    //     const user = res.user;
    //     console.log(user);
    //   })
    //   .catch((error)=>{
    //     console.log(error.message);
    //   })
  // };

  // let name,value;
  // const getUserData = (event)=>{
  //   name=event.target.name;
  //   value=event.target.value;
  //   setUser({...user,[name]:value}) 
  // }

  // const postData =async(e)=>{
  //   e.preventDefault();
  //   const {name,email,password} = user;
  //   const res = await fetch('https://zomato-clone-firebase-default-rtdb.firebaseio.com/authUser.json',{
  //     method:"POST",
  //     headers:{
  //       "Content-Type":"application/json",
  //     },
  //     body:JSON.stringify({
  //       name,
  //       email,
  //       password 
  //     })
  //   });

  //   if(res){
  //     setUser({
  //       name:"",
  //       email:"",
  //       password:""
  //     })
  //     alert("Signup successfully!!!");
      
  //   }
  // }
  

  return (
    <div className='h-screen w-full grid content-center   '>
      <div className='border bg-gray-100 lg:w-4/12 w-10/12  m-auto justify-center rounded-lg  '>
          <h1 className='px-5 py-2 text-3xl font-medium text-gray-600'>Sign up</h1>
          <form onSubmit={handleSubmit}>
          {/* <div className="relative m-5">
    <input type="text" id="floating_outlined" name='name' value={user.name} onChange={getUserData} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-00 bg-transparent rounded-lg border border-gray-600 appearance-none dark:text-gray400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder=" " />
    <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Full Name </label>
</div> */}
<div className="relative m-5 mb-2">
    <input type="text" id="floating_outlined" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-00 bg-transparent rounded-lg border border-gray-600 appearance-none dark:text-gray400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
</div>

<div className="relative m-5 mb-2">
    <input type="text" id="floating_outlined_password"  name='password' value={password}  onChange={(e)=>setPassword(e.target.value)} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-00 bg-transparent rounded-lg border border-gray-600 appearance-none dark:text-gray400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label htmlFor="floating_outlined_password"  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
</div>

<div className='px-5 pb-3 py-2 flex'>
  <div>
  <input id='term' type="checkbox" /> 
  </div>
  <label htmlFor='term' className='self-center text-xs px-1'>I agree to Zomato's <span className='text-red-700 '>Terms of Service, Privacy Policy </span> and <span className='text-red-700'>Content Policies</span></label>
</div>
<div className='px-5 py-2'>
<button type="submit"   className="w-full  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-700  ">Create account</button>
</div>   
</form>
<div className='px-5 py-2'>
<div className='w-full'>
  <p className='grid grid-cols-7 w-full'> <hr className='self-center col-span-3'/> <span className='m-auto justify-center text-xl text-gray-700'>or</span> <hr className='self-center col-span-3'/> </p>
</div>
</div>

<div className='px-5 py-2'>
  
  <div>
    <div>
      <p className='text-xl text-gray-700 py-5 px-1'>Already have an account? <Link href="/login" className='text-red-600'>Log in</Link> or <Link href="/" className='text-orange-500 self-center'>Skip</Link></p>
    </div>
  </div>
</div>

    
      </div>
    </div>
  )
}

export default Register;
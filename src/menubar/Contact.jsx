import React, { useState } from 'react'

const Contact = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone, setPhone]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit= (e) =>{
    e.preventDefault();

    alert("Form Submitted Successfully.");
    console.log("Name:"+name);
    console.log("Email:"+email);
    console.log("Phone_No:"+phone);
    console.log("Password:"+password);


  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>Name:<input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}></input></div>
    <div>Email:<input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input></div>
    <div>Phone:<input type="number" name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}></input> </div>
    <div>password:<input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input></div>
    <div><button type="submit">Submit</button>
    <button type="reset">Clear</button></div>
    </form>
    </>
  )
}

export default Contact
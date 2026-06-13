import React, { useState } from 'react'

const Register = () => {
    const handleReset = () => {
     setFormData({
        name: "",
        email: "",
        mobile: "",
        password: "",
        workstatus: "",
  });
};

    const [formData, setFormData]=useState(
        {
            name:"",
            email:"",
            mobile:"",
            password:"",
            workstatus:"",

        }
    );
     
    const changeHandler= (e) =>{
        const {name, value}= e.target;
        setFormData({...formData,[name]:value})
    };
    const handelSubmit =(e)=>
    {
        e.preventDefault();
        alert("Form submitted successfully");
        console.log(formData);
    }
  return (
    <form onSubmit={handelSubmit}>
        <div>
          Name : <input type="text" name="name"  value={formData.name} onChange={changeHandler}/>
        </div>

        <br />

        <div>
          Email : <input type="email" name="email" value={formData.email} onChange={changeHandler}/>
        </div>

        <br />

        <div>
          Mobile : <input type="number" name="mobile" value={formData.mobile} onChange={changeHandler}/>
        </div>

        <br />

        <div>
          Password : <input type="password" name="password" value={formData.password} onChange={changeHandler}/>
        </div>
        <div>
            Work Status :<br/>
            Experienced <input type='radio' name='workstatus' value="experienced" onChange={changeHandler}/>
            Fresher <input type='radio' name='workstatus' value="fresher" onChange={changeHandler}/>
        </div>
        <div>
                 <button type="submit">Submit</button>
                 <button type="button" onClick={handleReset}>Clear</button>
        </div>
        
    </form>
  )
}

export default Register
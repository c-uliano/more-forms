import React, {useState} from 'react';

const Form = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPw, setconfirmPw] = useState("");  
    
    // const createUser = (e) => {
    //     e.preventDefault();
    
    //     const newUser = { 
    //         fname: fname, 
    //         lname: lname, 
    //         email: email, 
    //         password: password, 
    //         confirmPw: confirmPw 
    //     };
    //     console.log("Welcome", newUser.fname);
    //     setFname("");
    //     setLname("");
    //     setEmail("");
    //     setPassword("");
    //     setconfirmPw("");
    // };

    return(
        <>
            <form /*onSubmit={ createUser }*/ className="w-50 m-auto mt-3">
                <div className='mb-3'>
                    <label htmlFor='fname' className="form-label">First Name:</label> 
                    <input className="form-control" name='fname' type="text" onChange={ (e) => setFname(e.target.value) } value={fname} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='lname' className="form-label">Last Name:</label> 
                    <input className="form-control" name='lname' type="text" onChange={ (e) => setLname(e.target.value) } value={lname} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className="form-label">Email:</label> 
                    <input className="form-control" name='email' type="email" onChange={ (e) => setEmail(e.target.value) } value={email} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className="form-label">Password:</label>
                    <input className="form-control" name='password' type="password" onChange={ (e) => setPassword(e.target.value) } value={password} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className="form-label">Confirm Password:</label>
                    <input className="form-control" name='password' type="password" onChange={ (e) => setconfirmPw(e.target.value) } value={confirmPw} />
                </div>
                {/* <input className='btn btn-primary' type="submit" value="Create User" /> */}
            </form>
            <div className='w-50 m-auto mt-5'>
                <h1>Your Form Data</h1>
                <p>First Name: {fname}</p>
                <p>Last Name: {lname}</p>
                <p>Email: {email}</p>
                <p>Password (why would I show this?): {password}</p>
                <p>Confirm Password (don't do this!): {confirmPw}</p>
            </div>
        </>
    );

}
export default Form
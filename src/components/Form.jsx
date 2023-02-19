import React, {useState} from 'react';

const Form = (props) => {
    // hooks
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPw: ""
    });

    const [userList, setUserList] = useState([]);



    // validation
    function emailValidation(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    let errors = {};
    const formValidation = (email) => {
        let isValid = true;

        if(formData.firstName.length < 3 || formData.lastName.length < 3 || formData.password !== formData.confirmPw) {
            isValid = false;
            console.log("There were errors")
            return isValid;
        } 
        if (formData.password.length < 8 ) {
            isValid = false;
            console.log("There were errors")
            return isValid;
        }
        if (!emailValidation(email)) {
            isValid = false;
            errors.email = "Invalid email address";
            return errors;
        } 
        console.log(isValid);
        return isValid;
    }



    // event handlers
    const onChangeHandler = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        let isValid = formValidation();
        if(isValid) {
            console.log("In submit handler")
            console.log(`User: ${JSON.stringify(formData)}`)
            setUserList([...userList, formData])
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPw: ""
            });
        } else {
            return isValid
        }
    }



    return(
        <>
            <form onSubmit={ onSubmitHandler } className="w-50 m-auto mt-3">
                <div className='mb-3'>
                    {
                        formData.firstName && formData.firstName.length < 3 ? <p className="text-danger">First Name must be at least 3 characters</p> : null
                    }
                    <label htmlFor='firstName' className="form-label">First Name:</label> 
                    <input className="form-control" type="text" name="firstName" onChange={ onChangeHandler } value={formData.firstName} />
                </div>
                <div className='mb-3'>
                    {
                        formData.lastName && formData.lastName.length < 3 ? <p className="text-danger">Last Name must be at least 3 characters</p> : null
                    }
                    <label htmlFor='lastName' className="form-label">Last Name:</label> 
                    <input className="form-control" type="text" name="lastName" onChange={ onChangeHandler } value={formData.lastName} />
                </div>
                <div className='mb-3'>
                    {
                        errors ? <p className="text-danger">{errors.email}</p> : null
                    }
                    <label htmlFor='email' className="form-label">Email:</label> 
                    <input className="form-control" type="email" name="email" onChange={ onChangeHandler } value={formData.email} />
                </div>
                <div className='mb-3'>
                    {
                        formData.password && formData.password.length < 8 ? <p className="text-danger">Password must be at least 8 characters</p> : null
                    }
                    <label htmlFor='password' className="form-label">Password:</label>
                    <input className="form-control" type="password" name="password" onChange={ onChangeHandler } value={formData.password} />
                </div>
                <div className='mb-3'>
                    {
                        formData.password !== formData.confirmPw && formData.confirmPw ? <p className="text-danger">Password & Confirm Password must match</p> : null
                    }
                    <label htmlFor='password' className="form-label">Confirm Password:</label>
                    <input className="form-control" type="password" name="confirmPw" onChange={ onChangeHandler } value={formData.confirmPw} />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
            <div className='w-50 m-auto mt-5'>
                <h1>User List</h1>
                {
                    userList.map((user, idx) => (
                        <div key={idx}>
                            <p>First Name: {user.firstName}</p>
                            <p>Last Name: {user.lastName}</p>
                            <p>Email: {user.email}</p>
                            <p>Password (why would I show this?): {user.password}</p>
                            <p>Confirm Password (don't do this!): {user.confirmPw}</p>
                        </div>
                    ))
                }    
            </div>
        </>
    );

}
export default Form
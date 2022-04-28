import React, { useState } from "react";

const Formulario = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (

        <div className="container">

            <form onSubmit={""}>

                <div className="form-control">
                    <label>First Name:</label>
                    <input className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div className="form-control">
                    <label>Last Name:</label>
                    <input className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div className="form-control">
                    <label>Email:</label>
                    <input className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="form-control">
                    <label>Password:</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className="form-control">
                    <label>Password Confirm:</label>
                    <input type="password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </div>

            </form>

            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Password confirm: {confirmPassword}</p>
            </div>

        </div>

    );

}
export default Formulario;
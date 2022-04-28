import React, { useState } from "react";

const Formulario = () => {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const errorName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters");

        }
        else {
            setFirstNameError("");
        }
    }

    const errorLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters");

        }
        else {
            setLastNameError("");
        }
    }

    const errorEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");

        }
        else {
            setEmailError("");
        }
    }

    const errorPassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");

        }
        else {
            setPasswordError("");
        }
    }

    const errorConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password && e.target.value.length > 0) {
            setConfirmPasswordError("Passwords do not match");

        }
        else {
            setConfirmPasswordError("");
        }
    }

    return (

        <div className="container">

            <form>

                <div className="form-control">
                    <label>First Name:</label>
                    <input className="form-control" onChange={(e) => errorName(e)} value={firstName} />
                    <p>{firstNameError}</p>
                </div>
                <div className="form-control">
                    <label>Last Name:</label>
                    <input className="form-control" onChange={(e) => errorLastName(e)} value={lastName} />
                    <p>{lastNameError}</p>
                </div>
                <div className="form-control">
                    <label>Email:</label>
                    <input className="form-control" onChange={(e) => errorEmail(e)} value={email} />
                    <p>{emailError}</p>
                </div>
                <div className="form-control">
                    <label>Password:</label>
                    <input type="password" className="form-control" onChange={(e) => errorPassword(e)} value={password} />
                    <p>{passwordError}</p>
                </div>
                <div className="form-control">
                    <label>Password Confirm:</label>
                    <input type="password" className="form-control" onChange={(e) => errorConfirmPassword(e)} value={confirmPassword} />
                    <p>{confirmPasswordError}</p>
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
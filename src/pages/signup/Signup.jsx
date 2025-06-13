import './Signup.css'
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import Button from "../../components/button/Button.jsx";
import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";
import InputField from "../../components/input-field/InputField.jsx";
import {NavLink} from "react-router-dom";
import {useState} from "react";

function Signup() {

    const [signupFormState, setSignupFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    function handleChange(e) {
        setSignupFormState({
            ...signupFormState,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({...signupFormState});
    }

    return (
            <div className="page-wrapper">
                <div className="input-container">
                    <div className="form-container">
                        <h1>Sign-up</h1>
                        <form onSubmit={handleSubmit}>
                            <InputField
                                name="username"
                                id="username"
                                inputType="text"
                                placeholder="name*"
                                size={sizes.MEDIUM}
                                inputValue={signupFormState.username}
                                changeEvent={handleChange}
                                isRequired={true}/>
                            <br/>
                            <InputField
                                name="email"
                                id="email"
                                inputType="email"
                                placeholder="email*"
                                size={sizes.MEDIUM}
                                inputValue={signupFormState.email}
                                changeEvent={handleChange}
                                isRequired={true}/>
                            <InputField
                                name="password"
                                id="password"
                                type="text"
                                placeholder="password*"
                                size={sizes.MEDIUM}
                                inputValue={signupFormState.password}
                                changeEvent={handleChange}
                                isRequired={true}/>
                            <PageDivider />
                            <Button
                                type="submit"
                                variant={variants.PRIMARY}
                                size={sizes.LARGE}
                                label="REGISTER"/>
                        </form>
                        <NavLink to="/login">Already have an account?</NavLink>
                    </div>
                </div>
                <div className="image-container">
                    <h1 className="quote-text">Inspiring quote</h1>
                </div>
            </div>
    )
}

export default Signup
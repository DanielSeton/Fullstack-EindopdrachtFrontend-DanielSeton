import './Login.css'
import Button from "../../components/button/Button.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import InputField from "../../components/input-field/InputField.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";


function Login() {

    const [loginFormState, setLoginFormState] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    function handleChange(e) {
        setLoginFormState({
            ...loginFormState,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({...loginFormState});
    }

    return (
            <div className="page-wrapper">
                <div className="input-container">
                    <div className="form-container">
                        <h1>LOGIN</h1>
                        <form onSubmit={(handleSubmit)}>
                            <InputField
                                name="email"
                                id="email"
                                inputType="email"
                                placeholder="email*"
                                size={sizes.MEDIUM}
                                inputValue={loginFormState.email}
                                changeEvent={handleChange}
                                isRequired={true}/>
                            <InputField
                                name="password"
                                id="password"
                                inputType="text"
                                placeholder="password"
                                size={sizes.MEDIUM}
                                inputValue={loginFormState.password}
                                changeEvent={handleChange}
                                isRequired={true}/>
                            <br/>
                            <Button
                                type="submit"
                                variant={variants.PRIMARY}
                                size={sizes.LARGE}
                                label="LOGIN"
                                clickEvent={(e) => {e.stopPropagation()}} />
                            <PageDivider/>
                        </form>
                        <Button
                            type="button"
                            variant={variants.INVERTED}
                            size={sizes.MEDIUM}
                            label="SIGN-UP"
                            clickEvent={() => navigate("/signup")}/>
                    </div>
                </div>
                <div className="image-container">
                    <h1 className="quote-text">Inspiring quote</h1>
                </div>
            </div>
    )
}

export default Login
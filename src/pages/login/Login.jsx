import './Login.css'
import Button from "../../components/button/Button.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import InputField from "../../components/input-field/InputField.jsx";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";
import {AuthContext} from "../../context/AuthContext.jsx";
import axios from "axios";


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post("http://localhost:8080/auth", {
                username: username,
                password: password,
            });
            console.log(result);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
            <div className="page-wrapper">
                <div className="input-container">
                    <div className="form-container">
                        <h1>LOGIN</h1>
                        <form onSubmit={(handleSubmit)}>
                            <InputField
                                name="username"
                                id="username"
                                inputType="text"
                                placeholder="username*"
                                size={sizes.MEDIUM}
                                changeEvent={(e) => setUsername(e.target.value)}
                                isRequired={true}/>
                            <InputField
                                name="password"
                                id="password"
                                inputType="password"
                                placeholder="password*"
                                size={sizes.MEDIUM}
                                changeEvent={(e) => setPassword(e.target.value)}
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
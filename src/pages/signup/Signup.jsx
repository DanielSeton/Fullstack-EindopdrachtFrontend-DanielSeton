import './Signup.css'
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import Button from "../../components/button/Button.jsx";
import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";
import InputField from "../../components/input-field/InputField.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Signup() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post("http://localhost:8080/users", {
                email: email,
                password: password,
                username: username,
            });
            navigate('/login');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
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
                                changeEvent={(e) => setUsername(e.target.value)}
                                isRequired={true}/>
                            <br/>
                            <InputField
                                name="email"
                                id="email"
                                inputType="email"
                                placeholder="email*"
                                size={sizes.MEDIUM}
                                changeEvent={(e) => setEmail(e.target.value)}
                                isRequired={true}/>
                            <InputField
                                name="password"
                                id="password"
                                type="password"
                                placeholder="password*"
                                size={sizes.MEDIUM}
                                changeEvent={(e) => setPassword(e.target.value)}
                                isRequired={true}/>
                            <PageDivider />
                            {error && <p className="error">An error has occurred, please try again</p>}
                            <Button
                                type="submit"
                                variant={variants.PRIMARY}
                                size={sizes.LARGE}
                                label="REGISTER"
                                disable={loading}
                            />
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
import './Login.css'
import Button from "../../components/button/Button.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";
import InputField from "../../components/input-field/InputField.jsx";
import {useState} from "react";

function Login() {

    const [query, setQuery] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
            <div className="page-wrapper">
                <div className="input-container">
                    <div className="form-container">
                        <h1>Dit is de login sectie</h1>
                        <form onSubmit={(handleSubmit)}>
                            <InputField
                                type="email"
                                placeholder="email*"
                                size={sizes.MEDIUM}
                                inputValue={query}
                                handleInputCallback={setQuery}
                                isRequired={true}/>
                            <InputField
                                type="password"
                                placeholder="password"
                                size={sizes.MEDIUM}
                                isRequired={true}/>
                            <Button
                                type="login"
                                variant={variants.PRIMARY}
                                size={sizes.LARGE}
                                label="LOGIN"/>
                            <PageDivider/>
                            <Button
                                type="signup"
                                variant={variants.INVERTED}
                                size={sizes.MEDIUM}
                                label="SIGN-UP"/>
                        </form>
                    </div>
                </div>
                <div className="image-container">
                    <h1 className="quote-text">Inspiring quote</h1>
                </div>
            </div>
    )
}

export default Login
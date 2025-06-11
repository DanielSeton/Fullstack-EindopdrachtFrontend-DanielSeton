import './Signup.css'
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import Button from "../../components/button/Button.jsx";
import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";
import InputField from "../../components/input-field/InputField.jsx";
import {NavLink} from "react-router-dom";

function Signup() {

    return (
            <div className="page-wrapper">
                <div className="input-container">
                    <div className="form-container">
                        <h1>Sign-up</h1>
                        <form>
                            <InputField
                                type="name"
                                placeholder="name*"
                                size={sizes.MEDIUM}
                                isRequired={true}/>
                            <br/>
                            <InputField
                                type="email"
                                placeholder="email*"
                                size={sizes.MEDIUM}
                                isRequired={true}/>
                            <InputField
                                type="password"
                                placeholder="password*"
                                size={sizes.MEDIUM}
                                isRequired={true}/>
                            <PageDivider />
                            <Button
                                type="register"
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
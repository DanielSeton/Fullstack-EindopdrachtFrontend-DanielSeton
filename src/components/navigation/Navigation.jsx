import './Navigation.css'
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../../assets/img/djcorner_logo.png"
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import Button from "../button/Button.jsx";
import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";

function Navigation() {

    const navigate = useNavigate();

    const { authState, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <button type="button" className="navbar-logo-button" onClick={() => navigate("/")}><img src={logo} alt="Company logo"/>
                    <span id="header-color-section">DJ</span>Corner</button>
            </div>
            {console.log(authState.isAuth)}
            {console.log(authState.user?.role)}
            {authState.isAuth ?
                <ul>
                    <li>
                        <Button
                            type="button"
                            variant={variants.LINK}
                            size={sizes.MEDIUM}
                            label="Home"
                            clickEvent={() => {
                                navigate("/")
                            }}
                        />
                    </li>
                    {authState.user?.role === "USER" && (
                        <li>
                            <Button
                                type="button"
                                variant={variants.LINK}
                                size={sizes.MEDIUM}
                                label="Dashboard"
                                clickEvent={() => {
                                    navigate("/dashboard")
                                }}
                            />
                        </li>
                    )}
                    {["STAFF", "ADMIN"].includes(authState.user?.role) && (
                        <li>
                            <Button
                                type="button"
                                variant={variants.LINK}
                                size={sizes.MEDIUM}
                                label="Overview"
                                clickEvent={() => {
                                    navigate("/overview")
                                }}
                            />
                        </li>
                    )}
                    <li>
                        <Button
                            type="button"
                            variant={variants.LINK}
                            size={sizes.MEDIUM}
                            label="Logout"
                            clickEvent={() => {
                                logout();
                                navigate("/")
                            }}
                        />
                    </li>
                </ul>
                :
                <ul>
                    <li>
                        <Button
                            type="button"
                            variant={variants.LINK}
                            size={sizes.MEDIUM}
                            label="Home"
                            clickEvent={() => {
                                navigate("/")
                            }}
                        />
                    </li>
                    <li>
                        <Button
                            type="button"
                            variant={variants.LINK}
                            size={sizes.MEDIUM}
                            label="Sign-in"
                            clickEvent={() => {
                                navigate("/login")
                            }}
                        />
                    </li>
                </ul>
            }
        </nav>
    )
}

export default Navigation;
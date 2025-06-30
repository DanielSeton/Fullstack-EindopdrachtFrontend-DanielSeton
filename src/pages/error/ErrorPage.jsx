import "./ErrorPage.css"
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";

function ErrorPage() {

    const navigate = useNavigate();

    return (
        <section className="not-found-section">
            <div>
                <h1>404</h1>
                <h2>The page you are looking for doesn't exist</h2>
                <span>
                    <Button
                        label="Back to home"
                        variant={variants.SECONDARY}
                        size={sizes.LARGE}
                        clickEvent={() => navigate("/")}/>
                 </span>
            </div>
        </section>
    );
}

export default ErrorPage;
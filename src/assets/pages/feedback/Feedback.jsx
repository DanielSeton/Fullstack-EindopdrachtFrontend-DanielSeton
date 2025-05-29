import './Feedback.css'
import InputField from "../../../components/input-field/InputField.jsx";
import {sizes} from "../../constant/sizes.js";
import Button from "../../../components/button/Button.jsx";
import {variants} from "../../constant/variants.js";
import ButtonDropdown from "../../../components/button-dropdown/ButtonDropdown.jsx";
import PageDivider from "../../../components/pagedivider/PageDivider.jsx";

function Feedback(){
    return(
        <div className="content-wrapper">
            <div className="feedback-container">
                <div className="info">
                    <h2>Title</h2>
                    <PageDivider size={sizes.MEDIUM}/>
                    <p>Uploaded: Dit is de upload date</p>
                    <p>BPM: dit is de BPM</p>
                    <audio className="submission-audio" controls src="src/assets/placeholders/Beach_Walk.mp3"></audio>
                    <p>Tags</p>
                    <div>
                        <ul className="submission-tags-list">
                            <li className="submission-tags-list-item">tag</li>
                            <li className="submission-tags-list-item">tag</li>
                        </ul>
                    </div>
                </div>
                <div className="feedback">
                    <form>
                        <label>Feedback field</label>
                        <section className="feedback-section">
                            <textarea
                                className="feedback-textarea"
                                name="feedback"
                                id="feedback"
                                rows={6}
                                cols={40}>
                            </textarea>
                        </section>
                        <label>Status</label>
                        <section>
                            <ButtonDropdown/>
                        </section>
                        <section>
                            <Button
                                type="submit"
                                value="Submit"
                                variant={variants.SECONDARY}
                                size={sizes.LARGE}
                                isRequired={true}
                                label="Submit"/>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feedback;
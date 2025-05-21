import './Upload.css'
import Button from "../../../components/button/Button.jsx";
import InputField from "../../../components/input-field/InputField.jsx";
import {sizes} from "../../constant/sizes.js";
import {variants} from "../../constant/variants.js";

function Upload() {

    return (
            <div className="content-wrapper">
                <h1><span className="header-color">UPLOAD </span>your file</h1>
                <div className="upload-container">
                    <form>
                        <div className="upload-upper">
                            <dl className="form-container">
                                <dt>
                                    <div className="form-labelWrapper">
                                        <label className="form-label" htmlFor="title">Title:</label>
                                    </div>
                                </dt>
                                <dd>
                                    <InputField
                                        type="text"
                                        placeholder="..."
                                        size={sizes.LARGE}
                                        isRequired={true}/>
                                </dd>
                            </dl>
                            <dl className="form-container">
                                <dt>
                                    <div className="form-labelWrapper">
                                        <label className="form-label" htmlFor="bpm">BPM:</label>
                                    </div>
                                </dt>
                                <dd>
                                    <InputField
                                        type="text"
                                        placeholder="..."
                                        size={sizes.LARGE}
                                        isRequired={true}/>
                                </dd>
                            </dl>
                            <dl className="form-container">
                                <dt>
                                    <div className="form-labelWrapper">
                                        <label className="form-label" htmlFor="upload">Upload:</label>
                                    </div>
                                </dt>
                                <dd>
                                    <span>
                                        <a className="form-fileUploadButton">
                                        </a>
                                        <input type="file" accept="audio/*" title="Attach file" className="form-fileInput"></input>
                                    </span>
                                </dd>
                            </dl>
                            <dl className="form-container">
                                <dt>
                                    <div className="form-labelWrapper">
                                        <label className="form-label" htmlFor="tags">Tags:</label>
                                    </div>
                                </dt>
                                <dd>
                                    <InputField
                                        type="text"
                                        placeholder="..."
                                        size={sizes.LARGE}
                                        isRequired={true}/>
                                </dd>
                            </dl>
                        </div>
                        <div className="upload-bottom">
                            <Button
                                type="submit"
                                variant={variants.SECONDARY}
                                size={sizes.MEDIUM}
                                label="UPLOAD"/>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Upload

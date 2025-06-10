import './Upload.css'
import Button from "../../../components/button/Button.jsx";
import InputField from "../../../components/input-field/InputField.jsx";
import {sizes} from "../../constant/sizes.js";
import {variants} from "../../constant/variants.js";
import {useState} from "react";

import {removeTags} from "../../helpers/removeTags.js";
import {tagList} from "../../constant/tag-list.js";
import {addTags} from "../../helpers/addTags.js";



function Upload() {

    const [selectedTag, setSelectedTag] = useState([]);
    const [selectValue, setSelectValue] = useState("");

    const handleSelectChange = (e) => {
        const tag = e.target.value;
        console.log("tag: " + tag);
        console.log("Selectedtag: " + selectedTag);
        console.log("SetSelectedTag: ", typeof setSelectedTag === "function");

        addTags(tag, selectedTag, setSelectedTag);
        setSelectValue("");
    };

    const handleTagRemove = (tag) => {
        removeTags(tag, selectedTag, setSelectedTag);
    };

    function handleSubmit(e) {
        e.preventDefault();
    }



    return (
            <div className="content-wrapper">
                <h1><span className="header-color">UPLOAD </span>your file</h1>
                <div className="upload-container">
                    <form onSubmit={handleSubmit}>
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
                                    <select value={selectValue} onChange={handleSelectChange}>
                                        <option
                                            value="">
                                            --Choose a tag--
                                        </option>
                                        {tagList.map(tag => (
                                            <option key={tag} value={tag}>
                                                {tag}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="tag-storage">
                                        {selectedTag.map((tag) => (
                                            <div
                                                className="tag-item"
                                                key={tag}
                                                onClick={() => handleTagRemove(tag)}>
                                                {tag}
                                                <span
                                                    className="tag-item-cancel"
                                                    onClick={
                                                    (e) => {e.stopPropagation();
                                                    handleTagRemove(tag);}}>
                                                    x
                                                </span>
                                            </div>
                                        ))}
                                    </div>
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

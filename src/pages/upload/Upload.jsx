import './Upload.css'
import Button from "../../components/button/Button.jsx";
import InputField from "../../components/input-field/InputField.jsx";
import {sizes} from "../../assets/constant/sizes.js";
import {variants} from "../../assets/constant/variants.js";
import {useContext, useEffect, useState} from "react";

import {removeTags} from "../../assets/helpers/removeTags.js";
import {addTags} from "../../assets/helpers/addTags.js";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";



function Upload() {

    const [tags, setTags] = useState([]);
    const [error, toggleError] = useState(false);

    const [selectedTag, setSelectedTag] = useState([]);
    const [selectValue, setSelectValue] = useState("");
    const [uploadFormState, setUploadFormState] = useState({
        title: '',
        bpm: '',
    });

    useEffect(() => {
        const controller = new AbortController();

        async function fetchTags(){
            toggleError(false);

            const token = localStorage.getItem('token');

            try {
                const response = await axios.get("http://localhost:8080/tags", {
                    signal: controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data);
                setTags(response.data)
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        fetchTags();
    }, [])

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

    function handleUploadChange(e) {
        const { name, value, files } = e.target;

        setUploadFormState( {
            ...uploadFormState,
            [name]: name === "upload" ? files[0] : value,
            }
        )
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const token = localStorage.getItem('token');

        const metadata = {
            title: uploadFormState.title,
            bpm: uploadFormState.bpm,
            tags: selectedTag,
        };

        const formData = new FormData();
        formData.append("file", uploadFormState.upload);
        formData.append("metadata", new Blob(
           [JSON.stringify(metadata)],
            {type: "application/json"}
        ));

        try {
            const result = await axios.post("http://localhost:8080/submissions", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(result);
        } catch (e) {
            console.error(e);
        }
    }



    return (
            <div className="content-wrapper">
                <h1 className="upload-title"><span className="header-color">UPLOAD </span>your file</h1>
                <div className="upload-container">
                    <form onSubmit={handleSubmit}>
                        <div className="upload-form-fields">
                            <dl className="upload-form-container">
                                <dt>
                                    <div className="form-label-container">
                                        <label className="upload-form-label" htmlFor="title">Title:</label>
                                    </div>
                                </dt>
                                <dd>
                                    <InputField
                                        name="title"
                                        id="title"
                                        inputType="text"
                                        placeholder="..."
                                        size={sizes.LARGE}
                                        inputValue={uploadFormState.title}
                                        changeEvent={handleUploadChange}
                                        isRequired={true}/>
                                </dd>
                            </dl>
                            <dl className="upload-form-container">
                                <dt>
                                    <div className="form-label-container">
                                        <label className="upload-form-label" htmlFor="bpm">BPM:</label>
                                    </div>
                                </dt>
                                <dd>
                                    <InputField
                                        name="bpm"
                                        id="bpm"
                                        type="number"
                                        placeholder="..."
                                        size={sizes.LARGE}
                                        inputValue={uploadFormState.bpm}
                                        changeEvent={handleUploadChange}
                                        isRequired={true}/>
                                </dd>
                            </dl>
                            <dl className="upload-form-container">
                                <dt>
                                    <div className="form-label-container">
                                        <label className="upload-form-label" htmlFor="upload">Upload:</label>
                                    </div>
                                </dt>
                                <dd>
                                    <span>
                                        <input
                                            name="upload"
                                            id="upload-field"
                                            type="file"
                                            onChange={handleUploadChange}
                                            accept="audio/*"
                                            title="Attach file"
                                            className="form-file-input"></input>
                                    </span>
                                </dd>
                            </dl>
                            <dl className="upload-form-container">
                                <dt>
                                    <div className="form-label-wrapper">
                                        <label className="upload-form-label" htmlFor="tags">Tags:</label>
                                    </div>
                                </dt>
                                <dd>
                                    <select value={selectValue} onChange={handleSelectChange}>
                                        <option
                                            value="">
                                            --Choose a tag--
                                        </option>
                                        {Object.keys(tags).length > 0 && tags.map((tag) => (
                                            <option key={`${tag.id}_${tag.name}`} value={tag.name}>
                                                {tag.name}
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
                        <div className="upload-form-bottom">
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

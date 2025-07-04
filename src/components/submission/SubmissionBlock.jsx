import './SubmissionBlock.css'
import PageDivider from "../pagedivider/PageDivider.jsx";
import ButtonDropdown from "../button-dropdown/ButtonDropdown.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {formatDate} from "../../assets/helpers/formatDate.js";
import {NavLink} from "react-router-dom";

function SubmissionBlock({id}){

    const [submission, setSubmission] = useState({});
    const [error, toggleError] = useState();

    useEffect(() => {
        const controller = new AbortController();

        async function loadSubmission() {
            toggleError(false);

            try {
                const response = await axios.get(`http://localhost:8080/submissions/${id}`,
                    {signal:controller.signal});
                console.log("Dit is de data voor de blokken: ", response.data);
                setSubmission(response.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        loadSubmission();

        return function cleanup() {
            controller.abort();
        }
    }, [])

    return (
        <article className="submission">
            <div className="submission-content">
                <NavLink to={`/feedback/${id}`}>
                    <div>
                        <div className="submission-header">
                            <h2>{submission.title}</h2>
                            <ButtonDropdown/>
                        </div>
                        <PageDivider/>
                        <p><span className="submission-info-title">Name: </span>{submission.artistName}</p>
                        <p><span className="submission-info-title">Uploaded: </span>{formatDate(submission.uploadDate)}</p>
                        <p><span className="submission-info-title">BPM: </span>{submission.bpm}</p>
                    </div>
                </NavLink>
                <audio preload="none" className="submission-audio" controls src={`http://localhost:8080/${submission.audioDownloadUrl}`}></audio>
            </div>
            <div className="submission-bottom">
                <p>Tags: </p>
                <ul className="submission-tags-list">
                    {submission.tags?.map((tag) => {
                        return(
                            <li key={`${submission.id}`} className="submission-tags-list-item">{tag}</li>
                        )
                    })}
                </ul>
            </div>
        </article>
    )
}

export default SubmissionBlock;
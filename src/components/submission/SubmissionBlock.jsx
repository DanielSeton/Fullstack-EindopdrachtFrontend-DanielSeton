import './SubmissionBlock.css'
import PageDivider from "../pagedivider/PageDivider.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {formatDate} from "../../assets/helpers/formatDate.js";
import {NavLink} from "react-router-dom";
import StatusBlock from "../status-block/StatusBlock.jsx";
import {status} from "../../assets/constant/status.js";
import {sizes} from "../../assets/constant/sizes.js";
import {AuthContext} from "../../context/AuthContext.jsx";
import {formatStatus} from "../../assets/helpers/formatStatus.js";

function SubmissionBlock({id}){

    const [submission, setSubmission] = useState({});
    const [audio, setAudio] = useState({});
    const [isPlaying, toggleIsPlaying] = useState(false);
    const [error, toggleError] = useState();

    useEffect(() => {
        const controller = new AbortController();

        async function loadSubmission() {
            toggleError(false);

            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(`http://localhost:8080/submissions/${id}`, {
                    signal: controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
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

    useEffect(() => {
        if (!isPlaying) return;

        const controller = new AbortController();

        async function loadAudio() {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/submissions/${id}/audio`, {
                    responseType: "blob",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    signal: controller.signal
                });
                const audioUrl = URL.createObjectURL(response.data);
                setAudio(audioUrl);
            } catch (e) {
                console.error('Audio load error: ', e);
            }
        }

        loadAudio();

        return () => {
            controller.abort();
            if (audio) URL.revokeObjectURL(audio);
        }

    }, [isPlaying])

    return (
        <article className="submission">
            <div className="submission-content">
                <NavLink to={`/feedback/${id}`}>
                    <div>
                        <div className="submission-header">
                            <h2>{submission.title}</h2>
                            <StatusBlock
                                variant={status[submission.feedbackStatus] || status.NO_FEEDBACK}
                                size={sizes.MEDIUM}
                                label={submission.feedbackStatus}
                            />
                        </div>
                        <PageDivider/>
                        <p><span className="submission-info-title">Name: </span>{submission.artistName}</p>
                        <p><span className="submission-info-title">Uploaded: </span>{formatDate(submission.uploadDate)}</p>
                        <p><span className="submission-info-title">BPM: </span>{submission.bpm}</p>
                    </div>
                </NavLink>
                <audio preload="none" className="submission-audio" controls src={audio} onPlay={() => toggleIsPlaying(true)}></audio>
            </div>
            <div className="submission-bottom">
                <p>Tags: </p>
                <ul className="submission-tags-list">
                    {submission.tags?.map((tag, index) => {
                        return(
                            <li key={`${submission.id}-${index}`} className="submission-tags-list-item">{tag}</li>
                        )
                    })}
                </ul>
            </div>
        </article>
    )
}

export default SubmissionBlock;
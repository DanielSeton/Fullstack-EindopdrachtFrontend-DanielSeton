import './Feedback.css'
import {sizes} from "../../assets/constant/sizes.js";
import Button from "../../components/button/Button.jsx";
import {variants} from "../../assets/constant/variants.js";
import ButtonDropdown from "../../components/button-dropdown/ButtonDropdown.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {formatDate} from "../../assets/helpers/formatDate.js";
import {AuthContext} from "../../context/AuthContext.jsx";
import StatusBlock from "../../components/status-block/StatusBlock.jsx";

function Feedback(){

    const { authState } = useContext(AuthContext);

    const [submission, setSubmission] = useState({});
    const [audio, setAudio] = useState({})

    const [feedback, setFeedback] = useState("");
    const [status, setStatus] = useState("noFeedback");

    const [audioBlob, setAudioBlob] = useState({});
    const [trackAdded, setTrackAdded] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const navigate = useNavigate();


    const { id } = useParams();

    console.log(submission)

    useEffect(() => {
        const controller = new AbortController();

        async function fetchSubmission() {
            toggleError(false);
            toggleLoading(true);

            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(`http://localhost:8080/submissions/${id}`, {
                    signal:controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data);
                setSubmission(response.data);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is canceled...', e.message);
                } else {
                    console.error(e);
                    toggleError(true);
                }
            } finally {
                toggleLoading(false);
            }
        }

        fetchSubmission();

        return function cleanup() {
            controller.abort();
        }

    }, [])

    useEffect(() => {
        const controller = new AbortController();

        async function loadAudio() {
            toggleError(false);
            toggleLoading(true);

            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(`http://localhost:8080/submissions/${id}/audio`, {
                    responseType: "blob",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    signal: controller.signal
                });
                const audioUrl = URL.createObjectURL(response.data);
                console.log("Audio link: ", audioUrl);
                setAudio(audioUrl);
                setAudioBlob(response.data);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is canceled...', e.message);
                } else {
                    console.error(e);
                    toggleError(true);
                }
            } finally {
                toggleLoading(false);
            }
        }

        loadAudio();

        return () => {
            controller.abort();
            if (audio) URL.revokeObjectURL(audio);
        }

    }, [])



    async function handleSubmit(e) {
        e.preventDefault();

        toggleError(false);
        toggleLoading(true);

        const token = localStorage.getItem('token');

        try{
            const response = await axios.patch(`http://localhost:8080/submissions/${id}/feedback`, {
                status: status,
                feedback: feedback,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Feedback successfully send: ", response.data);
            navigate('/overview');
        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    async function handleDelete() {
        toggleError(false);
        toggleLoading(true);

        const token = localStorage.getItem('token');

        try {
            const result = await axios.delete(`http://localhost:8080/submissions/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(result)

            if (authState.user?.role === "USER") {
                navigate('/dashboard');
            } else if (["STAFF", "ADMIN"].includes(authState.user?.role)) {
                navigate("/overview")
            }
        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    async function handleAddToPlaylist() {
        toggleError(false);
        toggleLoading(true);

        const token = localStorage.getItem('token');


        try {
            const metadata = {
                uploadedBy: submission.artistName,
                title: submission.title,
                userId: submission.userId
            }

            const formData = new FormData();
            formData.append("file", audioBlob);
            formData.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));

            const result = await axios.post("http://localhost:8080/playlists/1", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTrackAdded(true);
            setSuccessMessage("Track successfully added to playlist!");
        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    return(
        <div className="content-wrapper">
            {loading ? (
                <p>Loading submission data...</p>
            ) : error ? (
                <Navigate to="/error" /> ) : (
            <div className="feedback-container">
                <div className="feedback-info">
                    <h2 className="submission-title">{submission.title}</h2>
                    {console.log(submission)}
                    <PageDivider size={sizes.MEDIUM}/>
                    <p><span className="submission-label">Uploaded: </span>{formatDate(submission.uploadDate)}</p>
                    <p><span className="submission-label">Artist: </span>{submission.artistName}</p>
                    <p><span className="submission-label">BPM: </span>{submission.bpm}</p>
                    <audio preload="none" className="submission-audio" controls src={audio}></audio>
                    <p><strong>Tags</strong></p>
                    <div>
                        <ul className="submission-tags">
                            {submission.tags?.map((tag, index) => {
                                return(
                                    <li key={`${submission.id}_${tag}_${index}`} className="submission-tag">{tag}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <PageDivider />
                    {(
                        ["STAFF", "ADMIN"].includes(authState.user?.role) ||
                        (
                            authState.user?.role === "USER" &&
                            (!submission.feedbackStatus || submission.feedbackStatus === "NO_FEEDBACK")
                        )
                    ) && (
                        <div className="feedback-actions">
                            <Button
                                variant={variants.INVERTED}
                                size={sizes.MEDIUM}
                                label="DELETE SUBMISSION"
                                clickEvent={handleDelete}
                            />
                        </div>
                    )}
                </div>
                <div className="feedback-display">
                {(["STAFF", "ADMIN"].includes(authState.user?.role)) && (
                        <form onSubmit={handleSubmit}>
                            <label>Feedback field</label>
                            <section className="feedback-section">
                            <textarea
                                className="feedback-textarea"
                                name="feedback"
                                id="feedback"
                                rows={6}
                                cols={40}
                                value={feedback}
                                onChange={(e) => {setFeedback(e.target.value)}}>
                            </textarea>
                            </section>
                            <label>Status</label>
                            <section>
                                <ButtonDropdown
                                    value={status}
                                    changeEvent={(e) => setStatus(e.target.value)}
                                />
                            </section>
                            <section>
                                <Button
                                    type="submit"
                                    value="submit"
                                    variant={variants.SECONDARY}
                                    size={sizes.LARGE}
                                    isRequired={true}
                                    label="Submit"/>
                            </section>
                        </form>
                )}
                {authState.user?.role === "USER" && (
                    <div className="feedback-display">
                        <StatusBlock
                            variant={status[submission.feedbackStatus] || status.NO_FEEDBACK}
                            size={sizes.MEDIUM}
                            label={submission.feedbackStatus}
                        />
                        <h2>Feedback</h2>
                        <PageDivider/>
                        {!submission.feedbackText && (
                            <p>No feedback yet...</p>
                        )}
                        {submission.feedbackText && (
                            <p>{submission.feedbackText}</p>
                        )}
                        <p></p>
                    </div>
                )}
                </div>
            </div>
            )}
            {(["STAFF", "ADMIN"].includes(authState.user?.role)) && (
            <section>
                {!trackAdded && (
                    <Button
                        variant={variants.PRIMARY}
                        size={sizes.SMALL}
                        clickEvent={handleAddToPlaylist}
                        label="Add to playlist"
                    />
                )}
                {trackAdded && (
                    <p className="success-message">{successMessage}</p>
                )}
            </section>
                )}
        </div>
    )
}

export default Feedback;
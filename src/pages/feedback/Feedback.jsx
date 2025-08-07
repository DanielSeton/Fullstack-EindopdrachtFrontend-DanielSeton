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

function Feedback(){

    const { authState } = useContext(AuthContext);

    const [submission, setSubmission] = useState({});
    const [audio, setAudio] = useState({})

    const [feedback, setFeedback] = useState("");
    const [status, setStatus] = useState("noFeedback");

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const navigate = useNavigate();


    const { id } = useParams();

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
                console.log("Audio link: ", audioUrl);
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

    }, [])



    async function handleSubmit(e) {
        e.preventDefault();

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
        } catch (e) {
            console.error(e);
        }
    }

    async function handleDelete() {
        const token = localStorage.getItem('token');

        try {
            const result = await axios.delete(`http://localhost:8080/submissions/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(result)
            navigate('/dashboard');
        } catch (e) {
            console.error(e);
        }
    }

    return(
        <div className="content-wrapper">
            {loading ? (
                <p>Loading submission data...</p>
            ) : error ? (
                <Navigate to="/error" /> ) : (
            <div className="feedback-container">
                <div className="info">
                    <h2 className="submission-title">{submission.title}</h2>
                    <PageDivider size={sizes.MEDIUM}/>
                    <p><strong>Uploaded: </strong>{formatDate(submission.uploadDate)}</p>
                    <p><strong>Artist: </strong>{submission.artistName}</p>
                    <p><strong>BPM: </strong>{submission.bpm}</p>
                    <audio preload="none" className="submission-audio" controls src={audio}></audio>
                    <p><strong>Tags</strong></p>
                    <div>
                        <ul className="submission-tags-list">
                            {submission.tags?.map((tag, index) => {
                                return(
                                    <li key={`${submission.id}_${tag}_${index}`} className="submission-tags-list-item">{tag}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <PageDivider />
                    {(
                        ["STAFF", "ADMIN"].includes(authState.user?.role) ||
                        (authState.user?.role === "USER" && submission.status === "no feedback" || !submission.status)
                    ) && (
                        <div className="feedback-buttoncontainer">
                            <Button
                                variant={variants.INVERTED}
                                size={sizes.MEDIUM}
                                label="DELETE SUBMISSION"
                                clickEvent={handleDelete}
                            />
                        </div>
                    )}
                </div>
                <div className="feedback">
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
                </div>
            </div>
            )}
        </div>
    )
}

export default Feedback;
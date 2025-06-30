import './Feedback.css'
import {sizes} from "../../assets/constant/sizes.js";
import Button from "../../components/button/Button.jsx";
import {variants} from "../../assets/constant/variants.js";
import ButtonDropdown from "../../components/button-dropdown/ButtonDropdown.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate, useParams} from "react-router-dom";
import {formatDate} from "../../assets/helpers/formatDate.js";

function Feedback(){

    const [submission, setSubmission] = useState({});
    const [error, toggleError] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [status, setStatus] = useState("");


    const { id } = useParams();

    useEffect(() => {
        const controller = new AbortController();

        async function fetchSubmission() {
            toggleError(false);

            try {
                const response = await axios.get(`http://localhost:8080/submissions/${id}`,
                    {signal:controller.signal});
                console.log(response.data);
                setSubmission(response.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        fetchSubmission();

        return function cleanup() {
            controller.abort();
        }

    }, [])

    async function handleSubmit(e) {
        console.log(status, feedback);
    }

    return(
        <div className="content-wrapper">
            {error ? <Navigate to="/error" /> :
            <div className="feedback-container">
                <div className="info">
                    <h2>{submission.title}</h2>
                    <PageDivider size={sizes.MEDIUM}/>
                    <p><strong>Uploaded: </strong>{formatDate(submission.uploadDate)}</p>
                    <p><strong>Artist: </strong>{submission.artistName}</p>
                    <p><strong>BPM: </strong>{submission.bpm}</p>
                    <audio preload="none" className="submission-audio" controls src={`http://localhost:8080/${submission.audioDownloadUrl}`}></audio>
                    <p><strong>Tags</strong></p>
                    <div>
                        <ul className="submission-tags-list">
                            {submission.tags?.map((tag) => {
                                return(
                                    <li key={`${submission.id}_${submission.tags.name}`} className="submission-tags-list-item">{tag}</li>
                                )
                            })}
                        </ul>
                    </div>
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
                                onChange={(e) => {setFeedback(e.target.value)}}>
                            </textarea>
                        </section>
                        <label>Status</label>
                        <section>
                            <ButtonDropdown
                                onChange={(e) => setStatus(e.target.value)}/>
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
            }
        </div>
    )
}

export default Feedback;
import './SubmissionBlock.css'
import Home from "../../assets/pages/home/Home.jsx";
import PageDivider from "../pagedivider/PageDivider.jsx";

function SubmissionBlock({title, name, date, bpm, tag}){
    return (
        <article className="submission">
            <div className="submission-content">
                <a href="" onClick={() => console.log('submission clicked')}>
                    <div>
                        <div className="submission-header">
                            <h2>{title}</h2>
                            <button className="submission-status-button"></button>
                        </div>
                        <PageDivider/>
                        <p><span className="submission-info-title">Name: </span>{name}</p>
                        <p><span className="submission-info-title">Uploaded: </span>{date}</p>
                        <p><span className="submission-info-title">BPM: </span>{bpm}</p>
                    </div>
                </a>
                <audio className="submission-audio" controls src="src/assets/placeholders/Beach_Walk.mp3"></audio>
            </div>
            <div className="submission-bottom">
                <p>Tags: </p>
                <ul className="submission-tags-list">
                    <li className="submission-tags-list-item">{tag}</li>
                    <li className="submission-tags-list-item">{tag}</li>
                </ul>
            </div>
        </article>
    )
}

export default SubmissionBlock;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import login from "./assets/pages/login/login.jsx";

function App() {
  const [count, setCount] = useState(0)

    return (
        <main>
            <div className="content-container">
                <aside className="filter-container">
                    <div className="filter-header">
                        <h2>FILTER</h2>
                    </div>
                    <hr></hr>
                    <div className="checkbox-container">
                        <h3>Status</h3>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="no-feedback-check" onClick={() => console.log("no feedback status clicked")}></input>
                            <label>No preference</label>
                        </div>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="in-review-check" onClick={() => console.log("review status clicked")}></input>
                            <label>In review</label>
                        </div>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="denied-check" onClick={() => console.log("denied status clicked")}></input>
                            <label>Denied</label>
                        </div>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="accepted-check" onClick={() => console.log("accepted status clicked")}></input>
                            <label>Accepted</label>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="checkbox-container">
                        <h3>Upload date</h3>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="no-preference-time-check" onClick={() => console.log("No time preference clicked")} checked></input>
                            <label>No preference</label>
                        </div>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="today-time-check" onClick={() => console.log("time today clicked")}></input>
                            <label>Today</label>
                        </div>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="threedays-time-check" onClick={() => console.log("3 days time clicked")}></input>
                            <label>3 days</label>
                        </div>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="fivedays-time-check" onClick={() => console.log("5 days time clicked")}></input>
                            <label>5 days</label>
                        </div>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="tendays-time-check" onClick={() => console.log("10 days time clicked")}></input>
                            <label>10 days</label>
                        </div>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="thirtydays-time-check" onClick={() => console.log("30 days time clicked")}></input>
                            <label>30 days</label>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="checkbox-container">
                        <h3>Tags</h3>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="no-preference-tag-check" onClick={() => console.log("No tag preference clicked")}></input>
                            <label>No preference</label>
                        </div>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="in-review-check"></input>
                            <label>In review</label>
                        </div>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="denied-check"></input>
                            <label>Denied</label>
                        </div>
                        <div className="checkbox-option">
                            <input type="Checkbox" name="accepted-check"></input>
                            <label>Accepted</label>
                        </div>
                    </div>
                </aside>
                <div className="content-container-right">
                    <button>Sort by date (newest first)</button>
                    <hr></hr>
                    <div className="submission-container">
                        <article className="submission">
                            <div className="submission-content">
                                <a href="" onClick={() => console.log('submission clicked')}>
                                <div>
                                    <div className="submission-header">
                                        <h2>Title of Submission</h2>
                                        <button className="submission-status-button"></button>
                                    </div>
                                        <hr></hr>
                                        <p>Name: naam artiest</p>
                                        <p>Uploaded: 12/05/2025</p>
                                        <p>BPM: 350</p>
                                </div>
                                </a>
                            </div>
                            <audio className="submission-audio" controls src="src/assets/placeholders/Beach_Walk.mp3"></audio>
                        <div className="submission-bottom">
                            <p>Tags: </p>
                            <ul className="submission-tags-list">
                                <li className="submission-tags-list-item">Disco</li>
                                <li className="submission-tags-list-item">Fast-paced</li>
                            </ul>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App

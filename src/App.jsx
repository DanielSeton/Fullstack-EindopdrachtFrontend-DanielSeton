import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import login from "./assets/pages/login/login.jsx";

function App() {
  const [count, setCount] = useState(0)

    return (
        <main>
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
                                    <input id="title" type="text" name="Submission-Title" className="form-textInput"></input>
                                </dd>
                            </dl>
                            <dl className="form-container">
                                <dt>
                                    <div className="form-labelWrapper">
                                        <label className="form-label" htmlFor="bpm">BPM:</label>
                                    </div>
                                </dt>
                                <dd>
                                    <input id="title" type="text" name="Submission-BPM" className="form-textInput"></input>
                                </dd>
                            </dl>
                            <dl className="form-container">
                                <dt>
                                    <div className="form-labelWrapper">
                                        <label className="form-label" htmlFor="bpm">Upload:</label>
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
                                    <input id="title" type="text" name="Submission-Tags" className="form-textInput"></input>
                                </dd>
                            </dl>
                        </div>
                        <div className="upload-bottom">
                            <button type="submit" className="form-button">UPLOAD</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default App

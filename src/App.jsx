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
                <div className="upload-container">
                    <div className="upload-upper">
                        <div className="upload-info">
                            <p>Title: </p>
                        </div>
                        <div className="upload-input">
                            <input type="field"></input>
                        </div>
                    </div>
                    <div className="upload-bottom">
                        <button>UPLOAD</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <div className="page-wrapper">
            <div className="input-container">
                <div className="form-container">
                    <h1>Dit is de login sectie</h1>
                    <form>
                        <input type="text" placeholder="email" className="email" />
                        <input type="password" placeholder="password" className="Password" />
                        <button type="login" className="login-button" onClick={()=> console.log("Login clicked")}>Login</button>
                        <hr></hr>
                        <button type="signup" className="signup-button" onClick={() => console.log("Sign-up clicked")}>Sign-up</button>
                    </form>
                </div>
            </div>
            <div className="image-container">
            </div>
        </div>
    </main>
  )
}

export default App

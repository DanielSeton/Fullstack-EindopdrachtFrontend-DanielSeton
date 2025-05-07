import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return(
    <>
    <header>
        <nav className="navbar">
            <div>
                <img src="" alt="Company logo"/>
                <p>DJ Corner</p>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
        </nav>
    </header>
    <main>

    </main>
    </>
)
}

export default App

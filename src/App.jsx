import { useState } from 'react'
import './App.css'
import Navigation from "./components/navigation/Navigation.jsx";
import Home from "./assets/pages/home/Home.jsx";

function App() {
  const [count, setCount] = useState(0)

    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Home/>
            </main>
        </>
    )
}

export default App

import { useState } from 'react'
import './App.css'
import Navigation from "./components/navigation/Navigation.jsx";
import Home from "./assets/pages/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Login from "./assets/pages/login/Login.jsx";

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
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default App

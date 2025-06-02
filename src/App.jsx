import { useState } from 'react'
import './App.css'
import Navigation from "./components/navigation/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import Upload from "./assets/pages/upload/Upload.jsx";

function App() {
  const [count, setCount] = useState(0)

    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Upload/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default App

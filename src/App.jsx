import { useState } from 'react'
import './App.css'
import Navigation from "./components/navigation/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import Upload from "./pages/upload/Upload.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Feedback from "./pages/feedback/Feedback.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

function App() {

    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/upload" element={<Upload/>} />
                    <Route path="/feedback" element={<Feedback/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default App

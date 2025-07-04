import { useState } from 'react'
import './App.css'
import Navigation from "./components/navigation/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import Upload from "./pages/upload/Upload.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Feedback from "./pages/feedback/Feedback.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import FeedbackOverview from "./pages/feedback-overview/FeedbackOverview.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import ErrorPage from "./pages/error/ErrorPage.jsx";

function App() {

    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="signup" element={<Signup/>} />
                    <Route path="/upload" element={<Upload/>} />
                    <Route path="/feedback/:id" element={<Feedback/>} />
                    <Route path="/overview" element={<FeedbackOverview/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/error" element={<ErrorPage/>} />
                </Routes>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default App

import {useContext, useState} from 'react'
import './App.css'
import Navigation from "./components/navigation/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import Upload from "./pages/upload/Upload.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Feedback from "./pages/feedback/Feedback.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import FeedbackOverview from "./pages/feedback-overview/FeedbackOverview.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import ErrorPage from "./pages/error/ErrorPage.jsx";
import {AuthContext} from "./context/AuthContext.jsx";

function App() {

    const { authState } = useContext(AuthContext)

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
                    <Route path="/upload" element={authState.isAuth === true ? <Upload/> : <Navigate to="/"/>} />
                    <Route path="/feedback/:id" element={authState.isAuth === true ? <Feedback/> : <Navigate to="/"/>} />
                    <Route path="/overview" element={authState.isAuth === true ? <FeedbackOverview/> : <Navigate to="/"/>} />
                    <Route path="/dashboard" element={authState.isAuth === true ? <Dashboard/> : <Navigate to="/"/>} />
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

import './Dashboard.css'
import SubmissionBlock from "../../components/submission/SubmissionBlock.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import FilterOption from "../../components/filter-option/FilterOption.jsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";

function Dashboard() {

    const [submissions, setSubmissions] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const { authState } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();

        async function fetchSubmissions() {
            toggleError(false);
            toggleLoading(true);

            const token = localStorage.getItem('token');

            try {
                const response = await axios.get("http://localhost:8080/submissions?page=0&size=15", {
                    signal:controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("Dit is wat we binnen krijgen: ", response.data.content);
                setSubmissions(response.data.content);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is canceled...', e.message);
                } else {
                    console.error(e);
                    toggleError(true);
                }
            } finally {
                toggleLoading(false);
            }
        }

        fetchSubmissions();

        return function cleanup() {
            controller.abort();
        }

    }, [])

    return (
            <div className="dashboard-content-container">
                <aside className="profile-container">
                    <div className="profile-header">
                        <h2>Profile</h2>
                    </div>
                    <PageDivider />
                    <div className="dashboard-profile-container">
                        <div className="dashboard-profile-info">
                            {console.log(authState)}
                            <p>User: {authState.user.username}</p>
                            <br/>
                            <p>Total submit(s): {submissions.length}</p>
                        </div>
                        <Button
                            type="button"
                            label="Upload file"
                            variant={variants.SECONDARY}
                            size={sizes.FULL}
                            clickEvent={() => navigate("/upload")}
                            />
                    </div>
                </aside>
                <div className="content-container-right">
                    <PageDivider/>
                    <div className="submission-container">
                        {loading && <p className="submission-state-message">Loading submissions...</p>}
                        {error && <p className="submission-state-message">Something went wrong loading your submissions</p>}
                        {!loading && !error && submissions.length === 0 && (
                            <p className="submission-state-message">No submissions found</p>
                        )}
                        {!loading && !error && Object.keys(submissions).length > 0 && submissions.map((submission) => {
                            {console.log("Dit is wat er in de submissions staat ", submissions)}
                            return (
                                <SubmissionBlock
                                    key={submission.id}
                                    id={submission.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
    )
}

export default Dashboard
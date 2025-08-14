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
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
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
                const response = await axios.get("http://localhost:8080/submissions/mine?page=0&size=15", {
                    signal:controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("Dit is wat we binnen krijgen: ", response.data.content);
                setSubmissions(response.data.content);
                setTotalPages(response.data.totalPages);
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

    }, [currentPage])

    return ["USER", "ADMIN"].includes(authState.user?.role) ? (
            <div className="content-container">
                <aside className="dashboard-profile">
                    <div className="sidebar-header">
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
                <div className="submission-content">
                    <PageDivider
                        size={sizes.LARGE}
                    />
                    {totalPages > 0 && (
                        <div className="submission-button-container">
                            <Button
                                variant={variants.SECONDARY}
                                size={sizes.SMALL}
                                clickEvent={() => setCurrentPage(prev => prev - 1)}
                                label="< Previous"
                                disabled={currentPage === 0}
                            />
                            <Button
                                variant={variants.SECONDARY}
                                size={sizes.SMALL}
                                clickEvent={() => setCurrentPage(prev => prev + 1)}
                                label="Next >"
                                disabled={currentPage === totalPages - 1}
                            />
                        </div>
                    )}
                    <div className="submission-container">
                        {loading && <p className="state-message">Loading submissions...</p>}
                        {error && <p className="state-message">Something went wrong loading your submissions</p>}
                        {!loading && !error && submissions.length === 0 && (
                            <p className="state-message">No submissions found</p>
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
        ) : (
            <section className="error-section">
                <div>
                    <h1>OOPS</h1>
                    <h2>The page you are looking for is off-limits to you</h2>
                    <span>
                        <Button
                            label="Back to home"
                            variant={variants.SECONDARY}
                            size={sizes.LARGE}
                            clickEvent={() => navigate("/")}
                        />
                    </span>
                </div>
            </section>
        )
}

export default Dashboard
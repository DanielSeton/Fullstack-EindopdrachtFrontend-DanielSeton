import './FeedbackOverview.css'
import SubmissionBlock from "../../components/submission/SubmissionBlock.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import FilterOption from "../../components/filter-option/FilterOption.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import qs from "qs";
import Button from "../../components/button/Button.jsx";
import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";
import {AuthContext} from "../../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

function FeedbackOverview() {

    const [submissions, setSubmissions] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("");

    const { authState } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    console.log("Current page: ", currentPage);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchTags(){
            toggleError(false);
            toggleLoading(true);

            const token = localStorage.getItem('token');

            try {
                const results = await axios.get("http://localhost:8080/tags", {
                    signal:controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(results.data);
                setTags(results.data);
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
        fetchTags()

        return function cleanup() {
            controller.abort();
        }

    }, [])

    useEffect(() => {
        const controller = new AbortController();

        async function fetchSubmissions() {
            toggleError(false);
            toggleLoading(true);

            const token = localStorage.getItem('token');

            try {
                const hasFilters = selectedTags.length > 0 || selectedStatus !== "";

                const params = {
                    tags : selectedTags,
                    status : selectedStatus,
                };

                const response = await axios.get(
                    hasFilters
                        ? `http://localhost:8080/submissions/filter?page=${currentPage}&size=15`
                        : `http://localhost:8080/submissions?page=${currentPage}&size=15`, {
                    signal:controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    params,
                    paramsSerializer: p => qs.stringify(p, {arrayFormat: 'repeat'})
                });
                console.log("Alle response data: ", response.data);
                console.log("Page number: ", response.data.pageable.pageNumber);
                console.log("Page total: ", response.data.totalPages);
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

    }, [currentPage, selectedTags, selectedStatus])


    function handleTagChange(tagName) {
        setSelectedTags(prev =>
            prev.includes(tagName)
                ? prev.filter(t => t !== tagName)
                : [...prev, tagName]
        );
        setCurrentPage(0);
    }

    function handleStatusChange(status) {
        setSelectedStatus(status);
        setCurrentPage(0);
    }

    function resetFilter() {
        setSelectedTags([])
        setSelectedStatus("")
        setCurrentPage(0)
    }


    return ["STAFF", "ADMIN"].includes(authState.user?.role) ? (
                <div className="content-container">
                    <aside className="filter-sidebar">
                        <div className="sidebar-header">
                            <h2>FILTER</h2>
                        </div>
                        <PageDivider />
                        <Button
                            variant={variants.SECONDARY}
                            size={sizes.FULL}
                            clickEvent={resetFilter}
                            label="Reset filter"/>
                        <PageDivider />
                        <div className="filter-section">
                            <h3>Status</h3>
                            <FilterOption
                                label="No feedback"
                                isChecked={selectedStatus === ""}
                                changeEvent={() => handleStatusChange("")}
                            />
                            <FilterOption
                                label="Accepted"
                                isChecked={selectedStatus === "APPROVED"}
                                changeEvent={() => handleStatusChange("APPROVED")}/>
                            <FilterOption
                                label="Denied"
                                isChecked={selectedStatus === "REJECTED"}
                                changeEvent={() => handleStatusChange("REJECTED")}/>
                            <FilterOption
                                label="In consideration"
                                isChecked={selectedStatus === "IN_CONSIDERATION"}
                                changeEvent={() => handleStatusChange("IN_CONSIDERATION")}/>
                        </div>
                        <PageDivider/>
                        <div className="filter-section">
                            <br/>
                            <details>
                                <summary>Tags</summary>
                                {Object.keys(tags).map(key => {
                                    const tag = tags[key];
                                    return (
                                        <FilterOption
                                            key={tag.id}
                                            label={tag.name}
                                            isChecked={selectedTags.includes(tag.name)}
                                            changeEvent={() => handleTagChange(tag.name)}
                                        />
                                    );
                                })}
                            </details>
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
                            {error && <p className="state-message">Something went wrong loading the submissions</p>}
                            {!loading && !error && submissions.length === 0 && (
                                <p className="state-message">No submissions found</p>
                            )}
                            {!loading && !error && Object.keys(submissions).length > 0 && submissions.map((submission) => {
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
                                clickEvent={() => navigate("/")}/>
                         </span>
                    </div>
                </section>
            )
}

export default FeedbackOverview
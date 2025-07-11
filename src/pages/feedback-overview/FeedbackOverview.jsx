import './FeedbackOverview.css'
import SubmissionBlock from "../../components/submission/SubmissionBlock.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import FilterOption from "../../components/filter-option/FilterOption.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import qs from "qs";
import Button from "../../components/button/Button.jsx";
import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";

function FeedbackOverview() {

    const [submissions, setSubmissions] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("");

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchTags(){
            toggleError(false);
            toggleLoading(true);

            try {
                const results = await axios.get("http://localhost:8080/tags",
                    {signal:controller.signal});
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

        async function fetchSubmissions() {
            toggleError(false);
            toggleLoading(true);

            try {
                const response = await axios.get("http://localhost:8080/submissions",
                    {signal:controller.signal});
                console.log(response.data);
                setSubmissions(response.data);
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
        fetchSubmissions();

        return function cleanup() {
            controller.abort();
        }

    }, [])


    async function fetchFilteredSubmissions() {
        toggleLoading(true);
        toggleError(false);

        try {
            const params = {
                tags : selectedTags,
                status : selectedStatus,
            };


            const response = await axios.get("http://localhost:8080/submissions/filter", {
                params,
                paramsSerializer: p => qs.stringify(p, {arrayFormat: 'repeat'})
            });
            setSubmissions(response.data);
            console.log(params)
        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    function handleTagChange(tagName) {
        setSelectedTags(prev =>
            prev.includes(tagName)
                ? prev.filter(t => t !== tagName)
                : [...prev, tagName]
        );
    }

    function handleStatusChange(status) {
        setSelectedStatus(status);
    }

    return (
        <div className="content-container">
            <aside className="filter-container">
                <div className="filter-header">
                    <h2>FILTER</h2>
                </div>
                <PageDivider />
                <Button
                    variant={variants.SECONDARY}
                    size={sizes.FULL}
                    clickEvent={fetchFilteredSubmissions}
                    label="Apply filter"/>
                <PageDivider />
                <div className="checkbox-container">
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
                <PageDivider />
                <div className="checkbox-container">
                    <h3>Tags</h3>
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
                </div>
            </aside>
            <div className="content-container-right">
                <PageDivider/>
                <div className="submission-container">
                    {loading && <p className="submission-state-message">Loading submissions...</p>}
                    {error && <p className="submission-state-message">Something went wrong loading the submissions</p>}
                    {!loading && !error && submissions.length === 0 && (
                        <p className="submission-state-message">No submissions found</p>
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
    )
}

export default FeedbackOverview
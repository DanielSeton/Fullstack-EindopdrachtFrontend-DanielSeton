import './FeedbackOverview.css'
import SubmissionBlock from "../../components/submission/SubmissionBlock.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import FilterOption from "../../components/filter-option/FilterOption.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {formatDate} from "../../assets/helpers/formatDate.js";

function FeedbackOverview() {

    const [submissions, setSubmissions] = useState({});
    const [error, toggleError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchSubmissions() {
            toggleError(false);

            try {
                const response = await axios.get("http://localhost:8080/submissions",
                    {signal:controller.signal});
                console.log(response.data);
                setSubmissions(response.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        fetchSubmissions();

        return function cleanup() {
            controller.abort();
        }

    }, [])

    return (
        <div className="content-container">
            <aside className="filter-container">
                <div className="filter-header">
                    <h2>FILTER</h2>
                </div>
                <PageDivider />
                <div className="checkbox-container">
                    <h3>Status</h3>
                    <FilterOption
                        label="No preference"
                        isChecked={false}/>
                    <FilterOption
                        label="In review"
                        isChecked={false}/>
                    <FilterOption
                        label="Denied"
                        isChecked={false}/>
                    <FilterOption
                        label="Accepted"
                        isChecked={false}/>
                </div>
                <PageDivider />
                <div className="checkbox-container">
                    <h3>Upload date</h3>
                    <FilterOption
                        label="No preference"
                        isChecked={true}/>
                    <FilterOption
                        label="Today"
                        isChecked={false}/>
                    <FilterOption
                        label="3 days"
                        isChecked={false}/>
                    <FilterOption
                        label="5 days"
                        isChecked={false}/>
                    <FilterOption
                        label="10 days"
                        isChecked={false}/>
                    <FilterOption
                        label="30 days"
                        isChecked={false}/>
                </div>
                <PageDivider/>
                <div className="checkbox-container">
                    <h3>Tags</h3>
                    <FilterOption
                        label="No preference"
                        isChecked={false}
                    />
                </div>
            </aside>
            <div className="content-container-right">
                <button>Sort by date (newest first)</button>
                <PageDivider/>
                <div className="submission-container">
                    {Object.keys(submissions).length > 0 && submissions.map((submission) => {
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
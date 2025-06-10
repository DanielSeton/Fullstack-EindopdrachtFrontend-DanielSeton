import './Dashboard.css'
import SubmissionBlock from "../../components/submission/SubmissionBlock.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import FilterOption from "../../components/filter-option/FilterOption.jsx";

function Dashboard() {

    return (
            <div className="content-container">
                <aside className="filter-container">
                    <div className="filter-header">
                        <h2>Profile Name</h2>
                    </div>
                    <PageDivider />
                    <div className="checkbox-container">
                        <a href="">Upload submission</a>
                    </div>
                </aside>
                <div className="content-container-right">
                    <button>Sort by date (newest first)</button>
                    <PageDivider/>
                    <div className="submission-container">
                        <SubmissionBlock
                            title="Title"
                            name="Henkie"
                            date="25/05/2025"
                            bpm={350}
                            tag="Disco"/>
                    </div>
                </div>
            </div>
    )
}

export default Dashboard
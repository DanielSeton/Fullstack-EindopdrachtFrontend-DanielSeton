import './Dashboard.css'
import SubmissionBlock from "../../../components/submission/SubmissionBlock.jsx";
import PageDivider from "../../../components/pagedivider/PageDivider.jsx";
import FilterOption from "../../../components/filter-option/FilterOption.jsx";

function Dashboard() {

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
                            isChecked={false}/>
                        <FilterOption
                            label="Disco"
                            isChecked={false}/>
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
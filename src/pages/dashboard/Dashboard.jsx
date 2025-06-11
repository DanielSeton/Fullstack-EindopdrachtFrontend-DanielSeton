import './Dashboard.css'
import SubmissionBlock from "../../components/submission/SubmissionBlock.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import FilterOption from "../../components/filter-option/FilterOption.jsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import {variants} from "../../assets/constant/variants.js";
import {sizes} from "../../assets/constant/sizes.js";

function Dashboard() {

    const navigate = useNavigate();

    return (
            <div className="dashboard-content-container">
                <aside className="profile-container">
                    <div className="profile-header">
                        <h2>Profile</h2>
                    </div>
                    <PageDivider />
                    <div className="dashboard-profile-container">
                        <div className="dashboard-profile-info">
                            <p>name</p>
                            <p>joined</p>
                            <p>submitTotal total submit(s)</p>
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
                    <button>Sort by date (newest first)</button>
                    <PageDivider/>
                    <div className="submission-container">
                        <SubmissionBlock
                            title="Title"
                            name="Henkie"
                            date="25/05/2025"
                            bpm={350}
                            tag="Disco"/>
                        <SubmissionBlock
                            title="Title"
                            name="Henkie"
                            date="25/05/2025"
                            bpm={350}
                            tag="Disco"/>
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
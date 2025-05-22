import './Home.css';
import ShowEntryBlock from "../../../components/showentryBlock/ShowEntryBlock.jsx";
import PageDivider from "../../../components/pagedivider/PageDivider.jsx";
import {sizes} from "../../constant/sizes.js";
import Playlist from "../../../components/playlist/Playlist.jsx";
import SubmissionBlock from "../../../components/submission/SubmissionBlock.jsx";

function Home(){
    return (
        <>
            <section className="banner-container">
                <div className="banner-text">
                    <h1>DJ CORNER</h1>
                    <h2>The BEST party this year</h2>
                </div>
            </section>
            <section>
                <div className="content-container">
                    <div className="section-title">
                        <h1 id="About-us">ABOUT <span className="header-color">US</span></h1>
                        <PageDivider size={sizes.SMALL}/>
                    </div>
                    <div className="content-container-inner">
                        <div className="content-container-inner-textblock">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt distinctio dolorum esse ex nesciunt quasi sequi sit tempore vero. Alias aliquam aliquid blanditiis corporis dolore dolores nam odit perferendis praesentium rem, similique ut vel, voluptatem. A accusantium alias cum cupiditate distinctio earum eius error fugiat hic iure iusto maxime necessitatibus perspiciatis, possimus praesentium ratione, repellat sapiente sequi totam voluptate.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo perspiciatis quas quidem quo tempore!</p>
                        </div>
                        <span className="content-container-inner-img"><img src="src/assets/img/dj-profile-image.jpg"/></span>
                    </div>
                </div>
            </section>
            <section>
                <div className="content-container">
                    <div className="section-title">
                        <h1 id="playlist">OUR <span className="header-color">PLAYLIST</span></h1>
                        <PageDivider size={sizes.SMALL}/>
                    </div>
                    <Playlist/>
                </div>
            </section>
            <section>
                <div className="content-container">
                    <div className="section-title">
                        <h1>UPCOMING <span className="header-color">SHOWS</span></h1>
                        <PageDivider size={sizes.SMALL}/>
                    </div>
                    <ShowEntryBlock date="April 22, 2025" location="Amsterdam, Netherlands" title="Grote Clubhuis"/>
                    <SubmissionBlock
                        title="Title"
                        name="Henkie"
                        date="25/05/2025"
                        bpm={350}
                        tag="Disco"/>
                </div>
            </section>
        </>
    )
}

export default Home
import './Home.css';
import ShowEntryBlock from "../../../components/showentryBlock/ShowEntryBlock.jsx";
import PageDivider from "../../../components/pagedivider/PageDivider.jsx";
import {sizes} from "../../constant/sizes.js";

function Home(){
    return (
        <>
            <section>
                <div className="content-container">
                    <div className="section-title">
                        <h1>ABOUT <span className="header-color">US</span></h1>
                        <PageDivider size={sizes.SMALL}/>
                    </div>
                    <div className="content-container-inner">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt distinctio dolorum esse ex nesciunt quasi sequi sit tempore vero. Alias aliquam aliquid blanditiis corporis dolore dolores nam odit perferendis praesentium rem, similique ut vel, voluptatem. A accusantium alias cum cupiditate distinctio earum eius error fugiat hic iure iusto maxime necessitatibus perspiciatis, possimus praesentium ratione, repellat sapiente sequi totam voluptate.</p>
                        <span className="about-img"><img src="src/assets/img/dj-profile-image.jpg"/></span>
                    </div>
                </div>
            </section>
            <section>
                <div className="content-container">
                    <div className="section-title">
                        <h1>OUR <span className="header-color">PLAYLIST</span></h1>
                        <PageDivider size={sizes.SMALL}/>
                    </div>
                </div>
            </section>
            <section>
                <div className="content-container">
                    <div className="section-title">
                        <h1>UPCOMING <span className="header-color">SHOWS</span></h1>
                        <PageDivider size={sizes.SMALL}/>
                    </div>
                    <ShowEntryBlock date="April 22, 2025" location="Amsterdam, Netherlands" title="Grote Clubhuis"/>
                </div>
            </section>
        </>
    )
}

export default Home
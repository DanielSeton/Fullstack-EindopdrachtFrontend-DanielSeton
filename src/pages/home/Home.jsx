import './Home.css';
import ShowEntryBlock from "../../components/showentryBlock/ShowEntryBlock.jsx";
import PageDivider from "../../components/pagedivider/PageDivider.jsx";
import Playlist from "../../components/playlist/Playlist.jsx";

import {sizes} from "../../assets/constant/sizes.js";

import headshot from "../../assets/img/dj_headshot.jpg"
import {useEffect, useState} from "react";
import axios from "axios";
import {formatDate} from "../../assets/helpers/formatDate.js";

function Home(){

    const [shows, setShows] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(()=>{
        const controller = new AbortController();

        async function fetchShows(){
            toggleError(false);
            toggleLoading(true);

            try {
                const response = await axios.get("http://localhost:8080/shows",
                    {signal:controller.signal});
                console.log(response.data);
                setShows(response.data)
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        async function fetchPlaylists() {
            toggleError(false);
            toggleLoading(true);

            const token = localStorage.getItem('token');

            try {
                const response = await axios.get("http://localhost:8080/playlists", {
                    signal: controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                setPlaylists(response.data);
                console.log("Playlist data: ", response.data);
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

        fetchPlaylists();
        fetchShows();
    }, []);

    return (
        <>
            <section className="banner-container">
                <div className="banner-text">
                    <h1>DJ CORNER</h1>
                    <h2>The BEST party only needs the BEST music</h2>
                </div>
            </section>
            <section>
                <div className="home-content-container">
                    <div className="home-content-title">
                        <h1 id="About-us">ABOUT <span className="header-color">US</span></h1>
                        <PageDivider size={sizes.SMALL}/>
                    </div>
                    <div className="home-content-container-inner">
                        <div className="home-content-container-inner-textblock">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt distinctio dolorum esse ex nesciunt quasi sequi sit tempore vero. Alias aliquam aliquid blanditiis corporis dolore dolores nam odit perferendis praesentium rem, similique ut vel, voluptatem. A accusantium alias cum cupiditate distinctio earum eius error fugiat hic iure iusto maxime necessitatibus perspiciatis, possimus praesentium ratione, repellat sapiente sequi totam voluptate.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo perspiciatis quas quidem quo tempore!</p>
                        </div>
                        <span className="home-content-container-inner-img"><img src={headshot}/></span>
                    </div>
                </div>
            </section>
            <section>
                <div className="home-content-container">
                    <div className="home-content-title">
                        <h1 id="playlist">OUR <span className="header-color">PLAYLIST</span></h1>
                        <PageDivider size={sizes.SMALL}/>
                    </div>
                    {!loading && !error && Object.keys(playlists).length > 0 && playlists.map((playlist) => {
                        return (
                            <Playlist
                                key={playlist.id}
                                id={playlist.id}
                            />
                        );
                    })}

                </div>
            </section>
            <section>
                <div className="home-content-container">
                    <div className="home-content-title">
                        <h1>UPCOMING <span className="header-color">SHOWS</span></h1>
                        <PageDivider size={sizes.SMALL}/>
                    </div>
                    {Object.keys(shows).length > 0 && shows.map((show) => {
                        return (
                            <ShowEntryBlock
                                key={`${show.id}`}
                                date={formatDate(show.date)}
                                title={show.name}
                                location={show.location}
                                website={show.website}
                                tickets={show.ticketSite}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    )
}

export default Home
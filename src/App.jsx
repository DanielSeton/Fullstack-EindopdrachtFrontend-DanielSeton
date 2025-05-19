import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import login from "./assets/pages/login/login.jsx";

function App() {
  const [count, setCount] = useState(0)

    return (
        <main>
            <section>
                <div className="content-container">
                    <h1>ABOUT <span className="header-color">US</span></h1>
                    <div className="content-container-inner">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt distinctio dolorum esse ex nesciunt quasi sequi sit tempore vero. Alias aliquam aliquid blanditiis corporis dolore dolores nam odit perferendis praesentium rem, similique ut vel, voluptatem. A accusantium alias cum cupiditate distinctio earum eius error fugiat hic iure iusto maxime necessitatibus perspiciatis, possimus praesentium ratione, repellat sapiente sequi totam voluptate.</p>
                        <span className="about-img"><img src="src/assets/img/dj-profile-image.jpg"/></span>
                    </div>
                </div>
            </section>
            <hr></hr>
            <section>
                <div className="content-container">
                <h1>OUR <span className="header-color">PLAYLIST</span></h1>
                </div>
            </section>
            <hr></hr>
            <section>
                <div className="content-container">
                    <h1>UPCOMING <span className="header-color">SHOWS</span></h1>
                    <a className="content-show-container" onClick={() => console.log("Show entry clicked")}>
                        <div className="content-show-entry">
                            <div className="show-entry-info">
                                <h3 className="show-entry-title">May 24, 2025</h3>
                                <p>Amsterdam, Netherlands</p>
                            </div>
                            <div className="show-location-text">
                                <p>Club BijzondereNaam</p>
                            </div>
                            <div className="show-entry-ticketButton">
                                <button onClick={() => console.log("ticket button clicked")}>TICKETS</button>
                            </div>
                        </div>
                    </a>
                    <a className="content-show-container" onClick={() => console.log("Show entry clicked")}>
                        <div className="content-show-entry">
                            <div className="show-entry-info">
                                <h3 className="show-entry-title">May 24, 2025</h3>
                                <p>Amsterdam, Netherlands</p>
                            </div>
                            <div className="show-location-text">
                                <p>Club BijzondereNaam</p>
                            </div>
                            <div className="show-entry-ticketButton">
                                <button onClick={() => console.log("ticket button clicked")}>TICKETS</button>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import login from "./assets/pages/login/login.jsx";
import ShowEntryBlock from "./components/showentryBlock/ShowEntryBlock.jsx";

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
                    <ShowEntryBlock date="April 22, 2025" location="Amsterdam, Netherlands" title="Grote Clubhuis"/>
                </div>
            </section>
        </main>
    )
}

export default App

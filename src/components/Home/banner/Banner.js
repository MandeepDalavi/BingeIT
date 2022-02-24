import './banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <ul class="slideshow">
                <li><h3>Goblin</h3><h4>The Lonely and Great God</h4><span>Slide One</span></li>
                <li><h3>Crash Landing<br/>on You</h3><span>Slide Two</span></li>
                <li><h3>Descendants<br/>of the Sun</h3><span>Slide Three</span></li>
                <li><h3>What's Wrong<br/>with Secretary Kim?</h3><span>Slide Four</span></li>
                <li><h3>Vincenzo</h3><span>Slide Five</span></li>
                {/* <li><h3>Hospital Playlist</h3><span>Slide Six</span></li> */}
            </ul>
        </div>
    );
}

export default Banner;
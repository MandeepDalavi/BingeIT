import './header.css';
import hamburger from '../../images/hamburger.png';
import close from '../../images/close.png';
import logo from '../../images/logo.svg';
import search from '../../images/search.png';

const Home = () => {
    const menu = document.getElementsByClassName('.nav_links');
    // const close = document.getElementsByClassName('.hamburgerClose');
    // const openMenu = document.getElementsByClassName('.hamburgerOpen');

    var display = false
    const displayMenu = () => {
        // menu.classList.remove('nav_links');
        // menu.classList.add('menuActive');
        // close.classList.add('hamburgerCloseActive');
        display = true
        console.log(display)
    }
    const closeMenu = () => {
        // menu.classList.remove('nav_links');
        // menu.classList.remove('menuActive')
        display = false
    }
    
    return (
        <div class="header">
            <div class="header-logo">
                <img src={hamburger} alt="menu" class="hamburgerOpen" onClick={displayMenu}/>
                <img src={logo} alt="logo" class="logo"/>
            </div>
            <nav>
                <ul class={`nav_links ${display === true ? 'menuActive' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Series</a></li>
                    <li><a href="#">Genre</a></li>
                    <img src={close} alt="menuCloseIcon" class={`hamburgerClose ${display === true ? 'hamburgerCloseActive' : ''}`} onClick={closeMenu}/>
                </ul>
            </nav>
            <form action="#" class="search_form">
                <input type="text" placeholder="I'm looking for..."/>
                <button type="submit">
                    <img src={search} alt="search" class="search_icon"/>
                </button>
            </form>
        </div>
    );
}

export default Home;
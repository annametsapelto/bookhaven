import BookHavenLogo from '../assets/bookhavenlogo.png';

const Header = () => {

    return (
        <header className="mainHeader">
            <img src={BookHavenLogo} alt="BookHavenLogo" className="mainHeader_logo"/>
            <h1>BookHaven</h1>
        </header>
    )
}

export default Header;
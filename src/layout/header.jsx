function Header() {
    return <nav className="red darken-3">
        <div className="container">
            <div className="nav-wrapper">
                <a href="https://github.com/aanedbala/films"
                className="brand-logo">React Movies</a>
                <ul id="nav-mobile" className="right
                hide-on-med-and-down">
                <li><a href="!#">Repository</a></li>
                </ul>
            </div>
        </div>
    </nav>
}
export { Header };

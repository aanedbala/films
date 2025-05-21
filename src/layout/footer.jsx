function Footer() {
    return <footer className="page-footer
    red darken-1">
        <div className="footer-copyright ">
            <div className="container">
                <span>© {new Date().getFullYear()} Nedbala A.A.</span>
                <a className="grey-text
                text-lighten-4 right" 
                href="!#">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer };
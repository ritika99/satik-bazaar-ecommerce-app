export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-description">
        <h4>
          Made with <i className="fas fa-heart"></i> by{" "}
          <a className="text-link" href="https://ritika-dhiman.netlify.app/">
            Ritika Dhiman
          </a>
        </h4>
      </div>
      <div className="footer-icon-link">
        <ul className="list list-inline">
          <li className="colored-list inline-list">
            <span className="nav-icon nav-pill">
              <a className="nav-link" href="https://github.com/ritika99">
                <i className="fab fa-github"></i>
              </a>
            </span>
          </li>
          <li className="colored-list inline-list">
            <span className="nav-icon nav-pill">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/ritikadhiman/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
          </li>
          <li className="colored-list inline-list">
            <span className="nav-icon nav-pill">
              <a className="nav-link" href="https://twitter.com/RitikaDhiman18">
                <i className="fab fa-twitter"></i>
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="footer-legal">
        <small>© 2021 SMart</small>
      </div>
    </footer>
  );
}

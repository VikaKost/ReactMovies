function Header() {
  return (
    <header>
      <nav className="deep-purple">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/VikaKost">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export { Header };

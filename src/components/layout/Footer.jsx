function Footer() {
  return (
    <footer className="page-footer deep-purple">
      <div className="footer-copyright deep-purple">
        <div className="container">
          © {new Date().getFullYear()} Copyright
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/VikaKost"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

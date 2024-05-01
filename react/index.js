function Header() {
    return (
      <header>
        <nav className="navbar">
          <img src="stian.jpg" width="80px" alt="bilde av stian" />
          <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </header>
    );
  }
  
function Footer() {
    return (
      <footer>
        <small>David</small>
      </footer>
    );
  }
  
function MainContent() {
    return (
      <div>
        <h1>bla bla bla</h1>
        <ol>
          <li>qwertyuiop</li>
          <li>qwertyuiop</li>
          <li>qwertyuiop</li>
          <li>qwertyuiop</li>
        </ol>
      </div>
    );
  }
  
function Page() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
  
  ReactDOM.render(<Page />, document.getElementById("root"));
  
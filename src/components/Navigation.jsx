const Navigation = () => {
  return (
    <div className="nav-bar">
      <h1 className="logo">adpushup</h1>
      <nav className="nav-bar-items">
        <ul>
          <li>
            <a href="/" className="btn btn-primary">
              REQUEST DEMO
            </a>
          </li>
          <li>
            <a href="/" className="btn btn-secondary">
              LOG IN
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

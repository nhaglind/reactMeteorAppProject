Header = React.createClass({
  render() {
    var navStyle = {
      backgroundColor: "#e1bee7",
      paddingLeft: "12px"
    };
    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Kosupure</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/register">Sign Up</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
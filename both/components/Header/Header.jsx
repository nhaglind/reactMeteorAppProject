Header = React.createClass({
  render() {
    var navStyle = {
      backgroundColor: "#e1bee7",
      paddingLeft: "12px"
    };
    var navOptions;
    if (User.isLoggedIn()) {
      navOptions = (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">Home</a></li>
        </ul>
      );
    } else {
      navOptions = (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/register">Sign Up</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
      );
    }
    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Kosupure</a>
          {navOptions}
        </div>
      </nav>
    );
  }
});
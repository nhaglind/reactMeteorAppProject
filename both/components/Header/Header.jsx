Header = React.createClass({
  render() {
    var navStyle = {
      backgroundColor: "#42a5f5",
      paddingLeft: "12px"
    };
    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">App Name</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
LoggedOutNav = React.createClass({
  render() {
        return (
        	<ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/register">Sign Up</a></li>
              <li><a href="/login">Login</a></li>
        	</ul>
       );
    }
});
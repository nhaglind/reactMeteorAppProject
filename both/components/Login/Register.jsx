Register = React.createClass({
    render() {
        return (
            <div className="row">
              <h4 className="text-center">Register Account</h4>
              <form className="col offset-s4 s4">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="text" className="validate" />
                    <label for="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="text" className="validate" />
                    <label for="password">Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="confirmPassword" type="text" className="validate" />
                    <label for="confirmPassword">Confirm Password</label>
                  </div>
                </div>
              </form>
            </div>

        );
     }
});
Register = React.createClass({
    onSubmit(e) {
        e.preventDefault();
        var ele = $(e.target);

        var email = ele.find("#email").val();
        var password = ele.find("#password").val();
        var confirmPassword = ele.find("#confirmPassword").val();
        if (password === confirmPassword && password !== "" & confirmPassword !== "") {

        } else {
            Materialize.toast('Password does not match!', 4000) // 4000 is the duration of the toast
        }
    },
    render() {
        return (
          <div className="row">
            <h4 className="text-center">Register Account</h4>
            <form onSubmit={this.onSubmit} className="col offset-s4 s4">
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="text" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="confirmPassword" type="password" className="validate" />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
              </div>
              <div className="row">
                <button className="waves-effect waves-light btn btn-block">Submt</button>
              </div>
            </form>
          </div>
        );
     }
});
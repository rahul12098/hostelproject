import React from "react";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
       
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password" />
                <div class="toggle-eye open">
                <ion-icon name="eye-outline"></ion-icon>
                </div>
                <div class="toggle-eye close">
                <ion-icon name="eye-off-outline"></ion-icon>
                </div>
              <div className="forgot">
                <label><a href="#">Forgot password?</a></label>
              </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

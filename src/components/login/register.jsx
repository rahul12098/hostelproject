import React from "react";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef} >
        <div className="header">Register</div>
        <div className="content">
         
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
              <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" />
              <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            </div>
          </div>
        </div>
        <div className="footer">
         <button type="button" className="btn">
            register
         </button>
        </div>
        </div>
        </div>
     
    );
 } 
}

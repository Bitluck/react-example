import React from 'react';
import '../styles/components/LoginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert(`Login: ${this.state.login}, \nPassword: ${this.state.password}`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <label>Login:</label>
          <input
            name="login"
            type="text"
            value={this.state.login}
            onChange={this.handleChange} />
          
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange} />
          
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

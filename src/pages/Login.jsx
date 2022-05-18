import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserName } from '../redux/actions';
import '../styles/Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      name: target.value
    });
  }

  handleSubmit = (event) => {
    const {history, setUserName} = this.props;
    const {name} = this.state;
    event.preventDefault();
    setUserName(name);
    history.push('/search');
  }

  render() {
    return (
      <div className='login-container'>
        <h1>Log in</h1>
        <form>
          <input
            type="text"
            placeholder="Nome completo"
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>Log in</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserName: (name) => dispatch(setUserName(name)),
})

Login.propTypes = {
  history: PropTypes.object.isRequired,
  setUserName: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Login);
import { Component } from 'react';
import "./Form.css";
class MyForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    errors: {},
    registrationSuccessful: false,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, errors: {} });
  };

  validate = () => {
    const { firstname, lastname, email, contact } = this.state;
    const errors = {};

    if (!firstname) errors.firstname = 'First name is required';
    if (!lastname) errors.lastname = 'Last name is required';

    if (email.trim() !== '') {
      const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!emailRegex.test(email)) {
        errors.email = 'Invalid email format';
      }
    }

    if (contact.trim() !== '') {
      const contactRegex = /^\d{0,10}$/;
      if (!contactRegex.test(contact)) {
        errors.contact = 'Contact number is invalid. It should be 10 digits.';
      }
    }

    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      this.setState({ registrationSuccessful: true });
      this.resetForm();
    } else {
      this.setState({ errors });
    }
  };

  resetForm = () => {
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      contact: '',
      errors: {},
    });
  };

  render() {
    const { firstname, lastname, email, contact, errors, registrationSuccessful } = this.state;

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form-example">
        {registrationSuccessful && <p className="success">Registration Successful!</p>}
          <div className="form-group">
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={this.handleInputChange}
              placeholder='First Name'
            />
            {errors.firstname && <p className="error">{errors.firstname}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={this.handleInputChange}
              placeholder='Last Name'
            />
            {errors.lastname && <p className="error">{errors.lastname}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              placeholder='Email'
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={this.handleInputChange}
              placeholder='Contact'
            />
            {errors.contact && <p className="error">{errors.contact}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
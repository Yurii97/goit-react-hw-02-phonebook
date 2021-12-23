import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  inputId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = e => {
    e.preventDefault();
    console.log(e.target);
    console.log(this.state);
    // const newArrey = [...this.state];

    // this.setState((this.state.contacts = newArrey));

    // console.log(this.state.contacts);
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form id={this.inputId} onSubmit={this.submitForm}>
          <label>
            Name
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <section>
          <ul>
            {console.log(this.state.contacts)}
            {this.state.contacts.map(({ id, name, number }) => (
              <li key={id}>
                {name}:{number}
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default App;

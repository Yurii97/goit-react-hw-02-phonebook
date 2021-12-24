import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
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
    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
      name: '',
      number: '',
    }));
  };

  deleteContact = idBtn => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idBtn),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.submitForm}>
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
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input
              type="text"
              name="filter"
              onChange={this.handleChange}
              value={this.state.filter}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
          </label>
          <ul>
            {this.state.contacts
              .filter(contact =>
                contact.name
                  .toLowerCase()
                  .includes(this.state.filter.toLowerCase())
              )
              .map(({ id, name, number }) => (
                <li key={id}>
                  {name}:{number}
                  <button type="button" onClick={() => this.deleteContact(id)}>
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </section>
      </>
    );
  }
}

export default App;

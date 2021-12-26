import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/filter';

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
    const { name, number, contacts } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      toast.error('contact with such name already exists')      
        this.setState(prevState => ({
        name: '',
      number: '',
    }))
      return
    }
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
    toast.success('contact added')
  };

  deleteContact = idBtn => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idBtn),
    }));
    toast.success("delete is complete")
  };

  render() {
    return (
      <>
        <Toaster/>
        <h1>Phonebook</h1>
        <ContactForm/>
        {/* <form onSubmit={this.submitForm}>
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
        </form> */}
        
          <h2>Contacts</h2>
          <Filter />
          <ContactList/>

          {/* <label>
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
        */}
      </>
    );
  }
}

export default App;

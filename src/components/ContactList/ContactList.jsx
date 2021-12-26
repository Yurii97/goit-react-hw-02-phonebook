export default function ContactList() {
    return (
        <>
            <section>
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
    )
}
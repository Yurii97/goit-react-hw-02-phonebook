export default function ContactList() {
    return (
        <>
            <section>
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
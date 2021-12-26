export default function Contact({id, name, number, deleteContact}) {
    return <>
        <span>

    {name}:{number}
        </span>
                  <button type="button" onClick={() => deleteContact(id)}>
                    Delete
                  </button>
    </>
}
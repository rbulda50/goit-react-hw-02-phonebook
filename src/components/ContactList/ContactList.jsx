
const ContactList = ({visibleContacts, deleteContact}) => {
    return (
        <ul>
            {visibleContacts.map(({ name, id, number }) => (
                <li key={id}>{name}: {number}
                    <button
                        type="button"
                        onClick={() => deleteContact(id)}
                    >Delete</button>
                </li>
            ))}
        </ul>
    )
};

export default ContactList;
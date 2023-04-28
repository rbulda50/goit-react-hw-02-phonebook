import css from './ContactList.module.css';

const ContactList = ({visibleContacts, deleteContact}) => {
    return (
        <ul className={css.ContactList}>
            {visibleContacts.map(({ name, id, number }) => (
                <li key={id}
                    className={css.ContactList__item}>{name}: {number}
                    <button
                        type="button"
                        onClick={() => deleteContact(id)}
                        className={css.ContactList__button}
                    >Delete</button>
                </li>
            ))}
        </ul>
    )
};

export default ContactList;
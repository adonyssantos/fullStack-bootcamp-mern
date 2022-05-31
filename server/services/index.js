const contacts = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@adonys.me',
    phone: '+1 (555) 555-5555',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@adonys.me',
    phone: '+1 (555) 555-5555',
  },
  {
    id: 3,
    name: 'Jack Doe',
    email: 'jack@adonys.me',
    phone: '+1 (555) 555-5555',
  },
];

module.exports = {
  getContacts: () => {
    return Promise.resolve(contacts);
  },
  getContact: id => {
    const contact = contacts.find(contact => contact.id === id);

    if (contact) {
      return Promise.resolve(contact);
    }

    return Promise.reject(contact);
  },
  addContact: contact => {
    if (!contact.name || !contact.email || !contact.phone) {
      return Promise.reject({
        status: 400,
        message: 'Bad Request',
      });
    }

    const newContact = {
      id: contacts.reduce((maxId, contact) => Math.max(contact.id, maxId), 0) + 1,
      ...contact,
    };

    contacts.push(newContact);

    return Promise.resolve(contacts);
  },
};

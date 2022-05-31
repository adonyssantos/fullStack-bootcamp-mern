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
};

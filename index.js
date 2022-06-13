const argv = require("yargs").argv;
const contactsOperations = require("./cotacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsOperations.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;

    case "add":
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;

    case "remove":
      // ... id
      break;

    default:
      console.log("Unknown action type!");
  }
};
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "9" });
// invokeAction({
//   action: "add",
//   name: "Ye",
//   email: "ye@gmail.com",
//   phone: "222-33-44",
// });
// invokeAction(argv);

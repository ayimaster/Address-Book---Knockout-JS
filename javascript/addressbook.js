var AddressBook = function () {
  var contact = {
    name: ko.observable(),
    phoneNumber: ko.observable()
  };

  var contacts = ko.observableArray();

  var clearContact = function () {
    contact.name(null);
    contact.phoneNumber(null);
  };

  var addContact = function () {
//    console.log("Adding new contact with name: " + contact.name() + " and phone number: " + contact.phoneNumber());
    contacts.push({name: contact.name(), phoneNumber: contact.phoneNumber()});
    clearContact();
  };

  var init = function () {
    ko.applyBindings(AddressBook);
  };

  $(init);


  return {
    contact: contact,
    contacts: contacts,
    addContact: addContact
  };



}();
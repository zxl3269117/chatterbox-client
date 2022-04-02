// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var inputMessage = event.currentTarget[0].value;

    var newMessage = {
      username: App.username,
      text: inputMessage,
      roomname: $('#rooms select').find(':selected').text()
    };
    Parse.create(newMessage, function() {

      Parse.readAll(function (data) {
        Messages.clear();
        Rooms.clear();
        _.each(data, function(element) {
          Messages.add(element);
          Rooms.addMessageToRooms(element);
        });
        MessagesView.render(newMessage['roomname']);
      });
      console.log('Message sent (:');
    });
    console.log('click!');

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

// $('form #message').val() => return the value from the input bo;x
// $( "select#foo option:checked" ).val();
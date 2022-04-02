// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  //Render out the list of rooms.
  render: function(defaultRoom = 'all rooms') {
    RoomsView.$select.empty();
    var allRooms = Rooms.retrieveRoomNames();

    _.each(allRooms, function(currentRoom) {
      RoomsView.renderRoom(currentRoom, defaultRoom);
    });
  },

  // Render out a single room.
  renderRoom: function(roomname, defaultRoom = 'all rooms') {

    var domString = '';
    if (roomname === defaultRoom) {
      domString = `<option value=${roomname} selected>${roomname}</option>`;
    } else {
      domString = `<option value=${roomname}>${roomname}</option>`;
    }
    $(domString).appendTo('#rooms select');
  },

  // Handle a user selecting a different room.
  handleChange: function(event) {
    var selected = RoomsView.$select.find(':selected').text();
    MessagesView.render(selected);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var newRoom = $('#addRoomTextBox').val();
    // add the room to the room list
    Rooms.addRoom(newRoom);
    // rerender the room list
    RoomsView.render(newRoom);
    // render the message in the new room
    MessagesView.render(newRoom);
    // clear the input box
    $('#addRoomTextBox').val('');
  }

};

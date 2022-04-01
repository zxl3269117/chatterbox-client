// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    //Render out the list of rooms.
    var allRooms = Rooms.retrieveRoomNames();

    _.each(allRooms, function(currentRoom) {
      RoomsView.renderRoom(currentRoom);
    });
  },

  renderRoom: function(roomname) {
    // Render out a single room.
    var domString = '';
    if (roomname === 'all rooms') {
      domString = `<option value=${roomname} selected>${roomname}</option>`;
    } else {
      domString = `<option value=${roomname}>${roomname}</option>`;
    }
    $(domString).appendTo('#rooms select');
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    /*
      - get which room is selected when event triggered
      - retieve messages that have same roomname (retrieveMessagesFromRoom method)
      - refresh page with only messages from matching room
     */
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};

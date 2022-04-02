// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {'all rooms': []},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  clear: () => {
    Messages._data = {'all rooms': []};
  },

  // add message to corresponding rooms
  addMessageToRooms: function(message) {
    var roomName = message.roomname;
    // put all messaged in all rooms
    Messages._data['all rooms'].push(message);

    // if message.roomname is falsy, it is not a room
    if (!roomName) {
      return;
    }
    // if data happen to have 'all rooms' as the roomname
    if (roomName === 'all rooms') {
      return;
    }

    // put message in the corresponding rooms
    if (Messages._data[roomName]) {
      Messages._data[roomName].push(message);
    } else {
      Messages._data[roomName] = [message];
    }
  },

  // retrieve messages from selectedRoom
  retrieveMessagesFromRoom: (selectedRoom) => {
    return Messages._data[selectedRoom];
  },

  // // return messages belong to the selected room
  // retrieveMessagesFromRoom: function(selectedRoom) {
  //   return Rooms._data[selectedRoom];
  // },

};

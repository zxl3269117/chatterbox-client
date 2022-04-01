// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {'all rooms': []},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  addMessageToRooms: function(message) {
    // if the roomname is null or empty string, message only existing
    if (!message.roomname || message.roomname.toLowerCase() === 'null') {
      Rooms._data['all rooms'].push(message);
      return;
    }

    var roomName = message.roomname.toLowerCase();

    // put message in the corresponding rooms
    if (Rooms._data[roomName]) {
      Rooms._data[roomName].push(message);
    } else {
      Rooms._data[roomName] = [message];
    }

    // push all other messages in all rooms
    Rooms._data['all rooms'].push(message);
  },

  // return all the room names available
  retrieveRoomNames: function() {
    return Object.keys(Rooms._data);
  },

  retrieveMessagesFromRoom: function() {}

};


/*
  rooms: lobby, test, guest
  _data: {
    'all rooms': [] // has all messages
    lobby: [],
    test: [],
    guest: []
    }

roomname available in _data: 'all room', lobby, test, guest

<select>
  <option value='lobby'>lobby</option>
  <option value='all room'>all room</option>
</select>


*/
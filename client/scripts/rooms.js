// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  _data: ['all rooms'],

  // add a room name
  addRoom: function(roomname) {
    if (roomname && !Rooms._data.includes(roomname)) {
      Rooms._data.push(roomname);
    }
  },

  // return all room names
  retrieveRoomNames: function() {
    return Rooms._data;
  },

  // return messages belong to the selected room
  retrieveMessagesFromRoom: function(selectedRoom) {
    return Rooms._data[selectedRoom];
  },

  clear: () => {
    Rooms._data = ['all rooms'];
  }
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
// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  // Render ALL messages OR messages in selected room
  render: function(selectedRoom = 'all rooms') {
    MessagesView.$chats.empty();
    _.each(Messages.retrieveMessagesFromRoom(selectedRoom), function(eachMessage) {
      MessagesView.renderMessage(eachMessage);
    });
  },

  // Render a single message.
  renderMessage: function(message) {
    message.text = _.escape(message.text);
    message.username = _.escape(message.username);

    var friendList = Friends.getFriend();

    var renderedMessage = MessageView.render(message);
    if (friendList.includes(message.username)) {
      $(renderedMessage).appendTo(MessagesView.$chats).css('background-color', 'yellow');
    } else {
      $(renderedMessage).appendTo(MessagesView.$chats);
    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

    var friendName = $(event.target).siblings('.username').text() || $(event.target).text();
    var currentRoom = RoomsView.$select.find(':selected').text();
    Friends.addFriend(friendName);
    MessagesView.render(currentRoom);
  }

};
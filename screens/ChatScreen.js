import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { getMessages, sendMessage } from '../components/APIFunctions';

export default function ChatScreen(params) {
  const [messages, setMessages] = useState([]);

  async function updateMessages() {
    const userId = params.route.params.id;
    const newMessages = await getMessages(userId);
    const formattedMessages = await newMessages.map((item) => {
      return {
        _id: item._id,
        text: item.text,
        createdAt: new Date(item.createdAt),
        user: {
          _id: item.sender,
          name: params.route.params.userName,
          avatar: require('../assets/images/default-pfp.png'),
        }
      };
    }).reverse();
    setMessages(formattedMessages);
  }
  useEffect(() => {
    updateMessages();
  }, [messages]);
  
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    let formattedMessage = messages.map((item) => ({
      conversationId: params.route.params.id,
			sender: params.route.params.senderId,
			text: item.text, // message
    }))[0];
    sendMessage(formattedMessage);
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: params.route.params.senderId,
      }}
    />
  )
}
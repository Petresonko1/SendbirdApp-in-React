// Chat.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import SendBird from 'sendbird';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const APP_ID = 'BC823AD1-FBEA-4F08-8F41-CF0D9D280FBF';
  const API_URL = `https://api-BC823AD1-FBEA-4F08-8F41-CF0D9D280FBF.sendbird.com`;
  const API_TOKEN = 'f93b05ff359245af400aa805bafd2a091a173064';

  const sb = new SendBird({ appId: APP_ID });

  useEffect(() => {
    authenticateUser();
  }, []);

  const authenticateUser = () => {
    fetch(`${API_URL}/v3/users/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': API_TOKEN,
      },
    })
      .then(response => response.json())
      .then(data => {
        sb.connect(data.user_id, (user, error) => {
          if (error) {
            console.error('Error connecting to Sendbird:', error);
          } else {
            console.log('User connected:', user);
            joinOpenChannel();
          }
        });
      })
      .catch(error => {
        console.error('Authentication error:', error);
      });
  };

  const joinOpenChannel = () => {
    const CHANNEL_URL = 'sendbird_open_channel_14092_bf4075fbb8f12dc0df3ccc5c653f027186ac9211';

    sb.GroupChannel.getChannel(CHANNEL_URL, (channel, error) => {
      if (error) {
        console.error('Error joining channel:', error);
      } else {
        console.log('Channel joined:', channel);
        setupChannelHandler(channel);
        displayPreviousMessages(channel);
      }
    });
  };

  const setupChannelHandler = (channel) => {
    const ChannelHandler = new sb.ChannelHandler();
    ChannelHandler.onMessageReceived = (channel, message) => {
      console.log('New message:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    sb.addChannelHandler('UNIQUE_HANDLER_ID', ChannelHandler);
  };

  const displayPreviousMessages = (channel) => {
    const messageListQuery = channel.createPreviousMessageListQuery();
    messageListQuery.load(30, true, (messages, error) => {
      if (error) {
        console.error('Error loading previous messages:', error);
      } else {
        setMessages(messages);
      }
    });
  };

  const sendMessage = () => {
    const CHANNEL_URL = 'sendbird_open_channel_14092_bf4075fbb8f12dc0df3ccc5c653f027186ac9211';

    const params = new sb.UserMessageParams();
    params.message = messageInput;

    sb.GroupChannel.getChannel(CHANNEL_URL, (channel, error) => {
      if (error) {
        console.error('Error getting channel:', error);
      } else {
        channel.sendUserMessage(params, (message, error) => {
          if (error) {
            console.error('Error sending message:', error);
          } else {
            console.log('Message sent:', message);
            setMessages((prevMessages) => [...prevMessages, message]);
            setMessageInput('');
          }
        });
      }
    });
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <ScrollView style={{ flex: 1, borderRightWidth: 1, borderColor: '#ccc' }}>
        {messages.map((message, index) => (
          <Text key={index}>{`${message.sender.nickname}: ${message.message}`}</Text>
        ))}
      </ScrollView>
      <View style={{ flex: 1, padding: 10 }}>
        <TextInput
          style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
          value={messageInput}
          onChangeText={(text) => setMessageInput(text)}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default Chat;

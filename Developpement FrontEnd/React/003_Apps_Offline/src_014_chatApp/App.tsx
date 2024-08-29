import { useEffect, useState } from 'react';
import { Channel as StreamChannel, User } from 'stream-chat';
import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  VirtualizedMessageList,
  Window,
} from 'stream-chat-react';

import { useClient } from './hooks/useClient';

import 'stream-chat-react/dist/css/v2/index.css';
import './layout.css';

const userId = 'crimson-bread-5';
const userName = 'crimson';

const user: User = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
};

const apiKey = 'dz5f4d5kzrue';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiY3JpbXNvbi1icmVhZC01IiwiZXhwIjoxNzAxMTk5OTc2fQ.TZSeaU7H5_7aR0brEBXCUfAxBgyIsvj4Tg7x5xRwbiI';

const App = () => {
  const chatClient = useClient({
    apiKey,
    user,
    tokenOrProvider: userToken,
  });

  const [channel, setChannel] = useState<StreamChannel>();
  useEffect(() => {
    if (!chatClient) return;

    const spaceChannel = chatClient.channel('livestream', 'spacex', {
      image: 'https://goo.gl/Zefkbx',
      name: 'SpaceX launch discussion',
    });

    setChannel(spaceChannel);
  }, [chatClient]);


  if (!chatClient) return null;

  return (
    <Chat client={chatClient} theme='str-chat__theme-dark'>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader live />
          <VirtualizedMessageList />
          <MessageInput focus />
        </Window>
      </Channel>
    </Chat>
  );
};

export default App;

import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    return (
      <ChatEngine
        height="100vh"
        projectID="b27134b4-8136-4bfa-9589-a244a39f69ae"
        userName="Derrick"
        userSecret="alxchat"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    );
  };
  
  // infinite scroll, logout, more customizations...
  
  export default App;
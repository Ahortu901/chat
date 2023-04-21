import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
      <ChatEngine
        height="100vh"
        projectID="b27134b4-8136-4bfa-9589-a244a39f69ae"
        userName={localStorage.getItem('Username')}
        userSecret={localStorage.getItem('Password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    );
  };
  
  // infinite scroll, logout, more customizations...
  
  export default App;
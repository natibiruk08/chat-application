import { ChatEngine } from "react-chat-engine";
import "./App.css";
import { ChatFeed } from "./components/ChatFeed";
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="
      7d6cabd7-77f6-4884-b6da-7c513f0abfd9"
      userName="user1"
      userSecret="123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};
export default App;

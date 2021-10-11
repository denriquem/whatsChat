import "./App.css";
import ChatFeed from "./components/ChatFeed";
import { ChatEngine } from "react-chat-engine";

const userSecretValue = process.env.REACT_APP_SECRET;
const projectIDValue = process.env.REACT_APP_PROJECT_ID;

const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID={projectIDValue}
			userName="danielMartinez"
			userSecret={userSecretValue}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;

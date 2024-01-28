// JavaScript (with React.js)
import React, { useState } from 'react';

function ChatApp() {
    const [messages, setMessages] = useState([]);

    // Functions to send and receive messages
    
    return (
        <div id="chatApp">
            <div className="chatContainer">
                <div className="messageList">
                    {/* Render messages here */}
                </div>
                <input type="text" className="messageInput" placeholder="Type your message..." />
                <button className="sendMessageBtn">Send</button>
            </div>
        </div>
    );
}

export default ChatApp;

Using React.js Framework.
/* # React.js
   npx create-react-app chat-app-lite
   cd chat-app-lite
   npm start  */

import React from 'react';
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import './style.scss';

const ChatWindow = () => {
    return (
        <section>
            <MessageList />
            <MessageInput />
        </section>
    );
};

export default ChatWindow;

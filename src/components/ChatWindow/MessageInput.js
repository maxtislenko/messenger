import React, { useState, useContext } from 'react';
import { AppStateContext } from "../../context/AppStateContext";
import { MessageContext } from "../../context/MessageContext";
import {makeAnswer} from "../../utils/reponseBot";

const MessageInput = () => {
    const [message, setMessage] = useState('');
    const { appState: {userId, name, activeChannel} } = useContext(AppStateContext);
    const { setMessageList } = useContext(MessageContext);

    const addMessage = (newMessage) => {
        setMessageList(prevState => {
            if(prevState[activeChannel]) {
                return {
                    ...prevState,
                    [activeChannel]: [...prevState[activeChannel], newMessage]
                }
            }
            return {
                ...prevState,
                [activeChannel]: [newMessage]
            }
        })
    }

    const submitForm = (event)=>{
        event.preventDefault();
        if(!message?.trim()) return;

        const newMessage = {
            id: Date.now(),
            text: message,
            timestamp: Date.now(),
            name,
            authorId: userId
        }
        addMessage(newMessage);
        makeAnswer(addMessage);
        setMessage('');
    }

    return (
        <form autoComplete="off" onSubmit={submitForm}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control message-input"
                    name="message"
                    id="messageInput"
                    onInput={(event) => setMessage(event.target.value)}
                    disabled={!activeChannel}
                    placeholder={activeChannel ? null : 'Select user to start conversation'}
                    value={message} />
                <div className="input-group-append">
                    <button
                        disabled={!activeChannel}
                        className="btn btn-primary px-5"
                        onClick={submitForm}>
                        Send
                    </button>
                </div>
            </div>
        </form>
    );
};

export default MessageInput;

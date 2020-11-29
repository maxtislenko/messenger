import React, {useContext, useEffect} from 'react';
import Message from "./Message";
import classNames from 'classnames';
import { MessageContext } from "../../context/MessageContext";
import { AppStateContext } from "../../context/AppStateContext";
import * as Storage from "../../utils/Storage";

const MessageList = () => {
    const {
        appState: {
            userId,
            activeChannel
        }
    } = useContext(AppStateContext);

    const { messageList } = useContext(MessageContext);
    const currentMessageList = messageList[activeChannel];

    useEffect(()=>{
        Storage.save('messageList', messageList);
    },[messageList]);

    return (
        <div className={classNames("message-list mb-3 px-3", {
            "empty d-flex": !currentMessageList?.length
        })}>
            {
                currentMessageList?.length
                    ? currentMessageList.map(message => <Message userId={userId} key={message.id} {...message} />)
                    : <div>No messages yet</div>
            }
        </div>
    );
};

export default MessageList;

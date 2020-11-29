import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Channel from "./Channel";
import { AppStateContext } from "../../context/AppStateContext";
import {save} from "../../utils/Storage";

const ChannelList = () => {
    const [loader, toggleLoader] = useState(true);
    const { appState: {activeChannel, channelList}, setAppState } = useContext(AppStateContext);

    useEffect(() => {
        (async ()=> {
            try {
                const response = await axios.get('/mock/channelList.json')
                setAppState(prevState => {
                    const newAppState = {
                        ...prevState,
                        channelList: response.data,
                    }
                    save('appState', newAppState)
                    return newAppState;
                });
                toggleLoader(false);
            } catch (error) {
                toggleLoader(false);
            }
        })()
    },[])

    const changeChannel = (channelId) => {
        setAppState(prevState => {
            const newAppState = {
                ...prevState,
                activeChannel: channelId
            }
            save('appState', newAppState)
            return newAppState;
        });
    }

    return (
        loader

        ? <div className="text-center py-5"><div className="spinner-border text-primary" role="status" /></div>
        :
        <ul className="list-group list-group-flush">
            {channelList.map(channel =>
                <Channel onClick={()=>changeChannel(channel.id)}
                         active={channel.id === activeChannel}
                         key={channel.id}
                         {...channel} />
            )}
        </ul>
    )
};

export default ChannelList;

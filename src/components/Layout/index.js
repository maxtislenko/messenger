import React, {useContext} from 'react';
import ChannelList from "../ChannelList";
import ChatWindow from "../ChatWindow";
import './style.scss';
import EnterScreen from "../EnterScreen";
import { AppStateContext } from "../../context/AppStateContext";

const Index = ({ quit }) => {
    const { appState: {userId} } = useContext(AppStateContext);

    return (
        <section className="container mt-5 rounded shadow layout">
            <div className="header d-flex py-3 border-bottom justify-content-between">
                <h3 className="font-weight-lighter">
                    Messenger
                </h3>
                <div className="justify-content-end">
                    {userId &&
                    <div className="btn btn-outline-secondary" onClick={quit}>
                        Quit
                    </div>
                    }
                </div>
            </div>
            <div className="row py-4">
                {userId
                    ?
                    <>
                        <div className="col-4">
                            <ChannelList />
                        </div>
                        <div className="col-8">
                            <ChatWindow />
                        </div>
                    </>
                    :
                    <div className="col">
                        <EnterScreen />
                    </div>
                }
            </div>
        </section>
    );
};

export default Index;

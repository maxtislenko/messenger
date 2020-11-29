import React, { useState } from 'react';

import Layout from "./Layout";
import { AppStateContext } from '../context/AppStateContext';
import { MessageContext } from '../context/MessageContext';
import * as Storage from '../utils/Storage'
import {clear} from "../utils/Storage";

function App() {
  const [appState, setAppState] = useState(Storage.retrieve('appState') || {});
  const [messageList, setMessageList] = useState(Storage.retrieve('messageList') || {});

  const resetStorage = () => {
      clear('appState');
      clear('messageList');
      setAppState({});
      setMessageList({});
  }

  return (
      <AppStateContext.Provider value={{appState, setAppState}}>
          <MessageContext.Provider value={{messageList, setMessageList}}>
              <div className="App">
                  <Layout quit={resetStorage} />
              </div>
          </MessageContext.Provider>
      </AppStateContext.Provider>
  );
}

export default App;

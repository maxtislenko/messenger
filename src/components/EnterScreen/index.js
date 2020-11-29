import React, {useContext, useState} from 'react';
import { AppStateContext } from "../../context/AppStateContext";
import { save } from "../../utils/Storage";

const EnterScreen = () => {
    const [name, setName] = useState('');
    const { setAppState } = useContext(AppStateContext);

    const handleNameInput = (event) => {
        setName(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        if(!name?.trim()) return;
        const appState = {
            userId: Date.now(),
            name
        }
        setAppState(appState);
        save('appState',appState)
    }

    return (
        <div className="p-5">
            <form onSubmit={submitForm}>
                <input type="text" className="form-control" placeholder="Enter your name to start" name="name" value={name} onInput={handleNameInput} />
                <div className="mt-3">
                    <button className="btn btn-success w-100" onClick={submitForm}>Enter</button>
                </div>
            </form>
        </div>
    );
};

export default EnterScreen;

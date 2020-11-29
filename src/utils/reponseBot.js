import {retrieve} from "./Storage";

const answerList = ['Great', 'Amazing', 'Lit man!', 'Not now', 'Lets talk later', 'How about you?', 'Hey!','Like it!'];

export const makeAnswer = (callback) => {
    const answerNumber = Math.round(Math.random() * answerList.length)-1
    const {channelList, activeChannel} = retrieve('appState');
    const { user } = channelList.find(channel => channel.id === activeChannel);
    setTimeout(()=>{
        const message = {
            authorId: user.id,
            name: user.name,
            text: answerList[answerNumber],
            timestamp: Date.now(),
            id: Date.now()
        };
        callback(message)
    }, 1500)
}

import { createContext, useState, useEffect } from "react";

const ChatContext = createContext();

const ChatProvider = ({children}) => {

    const [chatMessage, setChatMessage] = useState([]);
    
    useEffect(() => {
        const chatData = async () => {
            const res = await fetch("http://localhost:5000/chat");
            const chatData = await res.json();
            setChatMessage(chatData);
        };
        chatData();
    }, []);
    
    const addNewMessage = async (newMessage) =>{
        await fetch("http://localhost:5000/chat",{
            method: "POST",
            body: JSON.stringify(newMessage),
            headers: { "Content-Type": "application/json"},
        }).then (res => res.json())
        .then(chatData => setChatMessage([...chatMessage,chatData]));
    }

    const deleteMessage = async (id) =>{
        await fetch(`http://localhost:5000/chat/${id}`, {
            method: "DELETE",
        }).then(res => {
            if(res.ok){
                setChatMessage(chatMessage.filter(message => message.id !==id))
            }
        })
    };

    const updateMessage =  async (id, updatedMessage) => {
        await fetch(`http://localhost:5000/chat/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedMessage),
        headers: { 'Content-Type': 'application/json' },
      }).then(res => {
        if(res.ok){
            setChatMessage(chatMessage.map(message => message.id === id ? {...message, ...updatedMessage} : message));
      }
    })
    };
    



    return(
        <ChatContext.Provider
          value={{
            addNewMessage,
            deleteMessage,
            updateMessage,
            chatMessage

          }}
        
        >
        {children}
        </ChatContext.Provider>
    );
}

export { ChatProvider };
export default ChatContext;
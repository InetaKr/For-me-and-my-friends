import { createContext, useState, useEffect } from "react";

const ChatContext = createContext();

const ChatProvider = ({children}) => {

    const [chatMessages, setChatMessages] = useState([]);
    
    useEffect(() => {
        const chatData = async () => {
            const res = await fetch("http://localhost:5000/chat");
            const chatData = await res.json();
            setChatMessages(chatData);
        };
        chatData();
    }, []);
    
    const addNewMessage = async (newMessage) =>{
        await fetch("http://localhost:5000/chat",{
            method: "POST",
            body: JSON.stringify(newMessage),
            headers: { "Content-Type": "application/json"},
        }).then (res => res.json())
        .then(chatData => setChatMessages([...chatMessages,chatData]));
    }

    const deleteMessage = async (id) =>{
        await fetch(`http://localhost:5000/chat/${id}`, {
            method: "DELETE",
        }).then(res => {
            if(res.ok){
                setChatMessages(chatMessages.filter(message => message.id !==id))
            }
        })
    };

    const updateMessage =  async (id, updatedMessage) => {
        console.log("id:", id);
        await fetch(`http://localhost:5000/chat/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedMessage),
        headers: { 'Content-Type': 'application/json' },
      }).then(res => {
        console.log(res);
        if(res.ok){
            setChatMessages(chatMessages.map(message => message.id === id ? {...message, message: updatedMessage.message, ...updatedMessage} : message));

      }
    })
    };
    



    return(
        <ChatContext.Provider
          value={{
            addNewMessage,
            deleteMessage,
            updateMessage,
            chatMessages

          }}
        
        >
        {children}
        </ChatContext.Provider>
    );
}

export { ChatProvider };
export default ChatContext;
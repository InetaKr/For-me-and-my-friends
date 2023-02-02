import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import Message from "./Message";

const Messages = () => {

    const { chatMessages } = useContext(ChatContext);
    const { users } = useContext(UserContext);


    const bannedUsers = users.map(user => user.isBanned && user.id).filter(item => item !== false);
    const availableMessages = chatMessages.filter(message => !bannedUsers.includes(message.userId));

    return (
        <>
        <div>
            {
                availableMessages.map((message, index) =>
                <Message
                   key={message.id || index}
                   chatData={message}
                   />
                )
            }
        </div>
        
        </>

    )
}

export default Messages;
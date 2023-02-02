import UserContext from "../../context/UserContext";
import ChatContext from "../../context/ChatContext";
import { useContext } from "react";
import Message from "./Message";

const UserPostedMessage = () => {

  const { loggedInUser } = useContext(UserContext);
  const { chatMessage } = useContext(ChatContext);

  return (
    <>
      {
        chatMessage
          .filter(message => message.userId === loggedInUser.id)
          .map(message => 
            <Message 
              key={message.id}
              chatData={message}
            />  
          )
      }
    </>
  );
}
 
export default UserPostedMessage;
import UserContext from "../../context/UserContext";
import ChatContext from "../../context/ChatContext";
import { useContext, useState } from "react";
import EditMessage from "./EditMessage";


const Message = ({ chatData }) => {
    const [isEditing, setIsEditing] = useState(false);
  
    const { users, loggedInUser } = useContext(UserContext);
    const { deleteMessage, updateMessage } = useContext(ChatContext);
  
    const chatMessageOwner = users.find(user => user.id === chatData.userId);
  
    const toggleEdit = () => {
      setIsEditing(!isEditing);
    };
  
    const onUpdate = (id, updatedMessage) => {
      updateMessage(id, {
          ...updatedMessage,
          isEdited: true,
          timestamp: new Date().toLocaleString()
      });
      setIsEditing(false);
    };
  
    return (
      <>
        <div className={loggedInUser && loggedInUser.id === chatData.userId ? "rightMessageContainer" : "leftMessageContainer"}>
          <div>
            {chatMessageOwner && (
              <>
                <div className="messageOwnerInfo">
                  <img src={chatMessageOwner.avatar} alt="user avatar" />
                  <span>{chatMessageOwner.userName}</span>
                </div>
              </>
            )}
          </div>
          <div>
            {isEditing ? (
              <EditMessage chatData={chatData} setIsEditing={setIsEditing} onUpdate={onUpdate} />
            ) : (
              <>
                <p>{chatData.message}</p>
                {chatData.isEdited && <p>Edited </p>}
                <p>{chatData.timestamp}</p>

              </>
            )}
          </div>
          {loggedInUser &&
          loggedInUser.id === chatData.userId && (
            <div>
              <button onClick={toggleEdit}>
                <i className="fa fa-edit" />
              </button>
              <button onClick={() => deleteMessage(chatData.id)}>
                <i className="fa fa-trash" />
              </button>
            </div>
          )}
        </div>
      </>
    );
  };
  
  export default Message;
  
  
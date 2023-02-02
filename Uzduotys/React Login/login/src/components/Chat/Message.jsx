import UserContext from "../../context/UserContext";
import ChatContext from "../../context/ChatContext";
import { useContext, useState } from "react";
import EditMessage from "./EditMessage";


const Message = ({ chatData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);


  const { users, loggedInUser } = useContext(UserContext);
  const { deleteMessage, updateMessage } = useContext(ChatContext);

  const chatMessageOwner = users.find(user => user.id === chatData.userId);
  

  const toggleEdit = () => {
    setSelectedId(chatData.id);
    setIsEditing(!isEditing);
  };

  const onUpdate = updatedMessage => {
    updateMessage(selectedId, updatedMessage);
    setIsEditing(false);
  };

  return (
    <>
      <div>
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
            <EditMessage chatData={chatData} setIsEditing={setIsEditing}  onUpdate={onUpdate} />
          ) : (
            <>
              <p>{chatData.message}</p>
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
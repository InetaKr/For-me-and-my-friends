import UserContext from "../../context/UserContext";
import ChatContext from "../../context/ChatContext";
import { useContext } from "react";


const Message = ({ chatData }) => {

    const { users, loggedInUser } = useContext(UserContext);
    const { deleteMessage,  updateMessage } = useContext(ChatContext);

    const chatMessageOwner = users.find(user => user.id === chatData.userId)
    
    return(
        <>
        <div>
            <div>
                {chatMessageOwner &&
                  <>
                    <div className="messageOwnerInfo">
                        <img
                            src={chatMessageOwner.avatar}
                            alt="user avatar" 
                        />
                        <span>{chatMessageOwner.userName}</span>
                    </div>
                  </>
                }
            </div>
            <div>
                <p>{chatData.message}</p>
                <p>{chatData.timestamp}</p>
            </div>
            {loggedInUser && loggedInUser.id === chatData.userId &&
            <div>
                <button onClick={()=> updateMessage(chatData.id)}><i className="fa fa-edit"></i></button>
                <button onClick={()=>deleteMessage(chatData.id)}><i className="fa fa-trash"></i></button>
            </div>
            }
        </div>
        </>

    );
}

export default Message;
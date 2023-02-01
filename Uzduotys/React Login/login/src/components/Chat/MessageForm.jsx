import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



const MessageForm = () => {

    const [formInputs, setFormInputs] = useState({
       message: "", 
    });

    const { addNewMessage } = useContext (ChatContext);
    const { loggedInUser } = useContext(UserContext);
    const navigation = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        const newMessage ={
            message: formInputs.message,
            id: Date.now(),
            userId: loggedInUser.id,
            timestamp: new Date().toLocaleString
        };

        addNewMessage(newMessage);
        navigation()
    }
    return(
        <form onSubmit={handleSubmit} className="AddMessage-form">
        <label>
          Message:
          <input type="text" name="message"
            value={formInputs.message}
            onChange={(e) => setFormInputs({...formInputs, message:e.target.value})}
          />
        </label>
        <input type="submit" value="Send" />
        </form>
    )
}

export default MessageForm
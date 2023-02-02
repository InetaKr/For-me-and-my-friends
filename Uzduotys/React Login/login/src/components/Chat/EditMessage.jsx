import { useState} from "react";

const EditMessage = ({ chatData, setIsEditing, onUpdate }) => {
  const [formInputs, setFormInputs] = useState({
    message: chatData.message,
  });

  const handleSubmit = event => {
    event.preventDefault();
    onUpdate(chatData.id, { message: formInputs.message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formInputs.message} onChange={e => setFormInputs({ ...formInputs, message: e.target.value })} />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditMessage;
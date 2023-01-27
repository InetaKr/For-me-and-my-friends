const UserAdminCard = ({data, banOrUnbanUser}) => {
    return (
      <div style={{border:'3px solid black'}}>
        <img
          src={data.avatar}
          alt="user avatar"
          style={{width:'30px', height:'auto'}}
        />
        <span>{data.userName}</span>
        <button onClick={() => banOrUnbanUser(data.id)}>
          {data.isBanned ? 'UnBan' : 'Ban'}
        </button>
      </div>
    );
  }
   
  export default UserAdminCard;
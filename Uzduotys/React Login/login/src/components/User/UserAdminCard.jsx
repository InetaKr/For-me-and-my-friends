const UserAdminCard = ({data, banOrUnbanUser}) => {
    return (
      <div className="UserListWrapper">
      <div className="UsersListCard">
        <img
          src={data.avatar}
          alt="user avatar"
          
        />
        <span>{data.userName}</span>
        <button onClick={() => banOrUnbanUser(data.id)}>
          {data.isBanned ? 'UnBan' : 'Ban'}
        </button>
      </div>
      </div>
    );
  }
   
  export default UserAdminCard;
import UserContext from "../context/UserContext";
import { useContext } from "react";
import UserAdminCard from "./UserAdminCard";

const AdminPage = () => {

  const { users, banOrUnbanUser } = useContext(UserContext);

  const nonAdminUsers = users.filter(user => user.level !== 'admin');

  return (
    <>
    <h1>Manage users</h1>
  
      {
        nonAdminUsers.map(user => 
          <UserAdminCard
            key={user.id}
            data={user}
            banOrUnbanUser={banOrUnbanUser}
          />
        )
      }
    </>
  );
}
 
export default AdminPage;
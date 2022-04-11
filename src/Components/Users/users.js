import {useEffect, useState} from "react";
import {usersService} from "../../Services";
import {User} from "../User/user";

export const Users = ({setUser, setPosts}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(({data})=> setUsers(data))
            },[])
    return (
        <div>
            {users.map((user)=> <User key={user.id} user={user} setUser={setUser} setPosts={setPosts}/>)}
        </div>
    );
};

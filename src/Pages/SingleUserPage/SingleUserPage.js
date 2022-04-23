import {useEffect, useState} from "react";
import {userService} from "../../Services";
import {UserDetails} from "../../Components/UserDetails/UserDetails";
import {useLocation, useParams} from "react-router-dom";

const SingleUserPage = () => {
    const {state} = useLocation()
    const [user, setUser] = useState(state);
    const {id} = useParams()
    useEffect(() => {
        if (!state) {
        userService.getById(id).then(({data})=>setUser(data))
        }else {
            setUser(state)
        }
    }, [id, state])
    return (
        <div>
            {user && <UserDetails key={user.id} user={user}/>}
        </div>
    );
};

export {SingleUserPage}
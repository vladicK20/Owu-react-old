import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadUsers} from "../redux/actions";

const Users = () => {
    let defaultRootState = useSelector(state => state.usersState);
    let dispatch = useDispatch();
    console.log(defaultRootState)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((value) => value.json())
            .then(users => {
                loadUsers(users, dispatch)
            })
    }, [])
    return (
        <div>
            {
                defaultRootState.map(value => <div key={value.id}>{value.name}</div>)
            }
        </div>
    );
};

export {Users}
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadUsers} from "../redux/actions.creator"

const Users = () => {
    let defaultRootState = useSelector(({usersState}) => usersState);
    let dispatch = useDispatch();
    console.log(defaultRootState)

    useEffect(() => {
        dispatch(loadUsers())
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
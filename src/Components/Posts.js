import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadPosts} from "../redux/actions.creator";

const Posts = () => {
    let postsDefaultState = useSelector(({postsState}) => postsState);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts())
    }, [])
    return (
        <div>
            {
                postsDefaultState.map(value => <div key={value.id}>{value.title}</div>)
            }
        </div>
    );
};

export {Posts}
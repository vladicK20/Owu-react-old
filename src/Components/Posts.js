import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadPosts} from "../redux/actions";

const Posts = () => {
    let postsDefaultState = useSelector(({postsState}) => postsState);
    let dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((value) => value.json())
            .then(posts => {
                loadPosts(posts, dispatch)
            })
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
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../Services";
import {PostDetails} from "../../Components";

const SinglePostPage = () => {
    const {state} = useLocation();
    const [post, setPost] = useState(state);
    const {id} = useParams();
    useEffect(() => {
        if (!state) {
            postService.getById(id).then(({data}) => setPost(data))
        } else {
            setPost(state)
        }
    }, [id, state])
    return (
        <div>
            {post && <PostDetails key={post.id} post={post}/>}
        </div>
    );
};

export {SinglePostPage}
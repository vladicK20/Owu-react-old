import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../Services";
import {PostDetails} from "../../Components";

const SinglePostPage = () => {
    const [post,setPost] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        postService.getById(id).then(({data})=>setPost(data))
    }, [id])
    return (
        <div>
            {post && <PostDetails key={post.id} post={post}/>}
        </div>
    );
};

export {SinglePostPage}
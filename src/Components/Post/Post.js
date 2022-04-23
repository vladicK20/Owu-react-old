import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div>
            {id} -- {title} <Link to={id.toString()}>Get Details</Link>
        </div>
    );
};

export {Post}
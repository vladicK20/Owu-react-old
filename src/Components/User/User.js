import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name} = user
    return (
        <div>
            {id} --- {name} <Button to={id.toString()} state={user}>Get user's info</Button>
        </div>
    );
};

export {User}
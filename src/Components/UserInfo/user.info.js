export const UserInfo = ({user, setPosts}) => {

    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
            <div>website: {user.website}</div>
            <input type='button' value='show users`s posts' onClick={()=> setPosts(user.id)}/>
        </div>
    );
};

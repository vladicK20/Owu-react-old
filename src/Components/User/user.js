export const User = ({user, setUser, setPosts}) => {
    const click = () => {
        setPosts(false)
        setUser(user)
    }
    return (
        <div>
            {user.name}
            <input type="button" value='show info' onClick={click}/>
        </div>
    );
};

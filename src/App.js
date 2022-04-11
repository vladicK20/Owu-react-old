import {useState} from "react";

import './App.css'
import {Users, Posts} from "./Components/index";
import {UserInfo} from "./Components/UserInfo/user.info";

const App = () => {
    const [user, setUser] = useState([null])
    const [userIdPosts, setPosts] = useState(null)
    return (
        <div>
            <div className={"wrapper"}>
                <div className={'border'}><Users setUser={setUser} setPosts={setPosts}/></div>
                <div className={'border'}>{user && <UserInfo user={user} setPosts={setPosts}/>}</div>
            </div>
            {userIdPosts && <Posts userId={userIdPosts}/>}
        </div>
    );
};

export default App;

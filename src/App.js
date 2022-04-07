import './App.css'
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

const App = () => {
    return (
        <div>
            <div className={'users_post'}>
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    );
};

export default App;
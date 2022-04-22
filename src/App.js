import {CarForm, Cars} from "./Components";
import {useEffect, useState} from "react";

const App = () => {
    const [newCar, setNewCar] = useState([null]);
    const [carForUpdate, setCarForUpdate] = useState(null);
    useEffect(() => {
    }, [])

    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} />
        </div>
    );
};

export default App;
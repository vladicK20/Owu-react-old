import {Car} from "../Car/Car";
import {useEffect, useState} from "react";
import {carService} from "../../Services";

const Cars = ({newCar, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);
    const [deleteCar, setDeleteCar] = useState([null]);


    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [newCar, deleteCar])

    // useEffect(() => {
    //     if (newCar) {
    //         // setCars([...cars, newCar])
    //         setCars(prevState => [...prevState,newCar])
    //     }
    // }, [newCar])
    //
    // useEffect(() => {
    //     if (deleteCar) {
    //         // setCars([...cars, deleteCar])
    //         // setCars(prevState => [...prevState,deleteCar])
    //         setCars(cars.filter(car=>car.id !==deleteCar))
    //     }
    // }, [deleteCar])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDeleteCar={setDeleteCar}/>)}
        </div>
    );
};

export {Cars}
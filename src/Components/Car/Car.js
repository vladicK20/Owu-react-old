import {carService} from "../../Services";

const Car = ({car,setCarForUpdate,setDeleteCar}) => {
    const {id,model,price,year} = car
    const deleteCar = async ()=>{
        await carService.deleteById(id)
        setDeleteCar(id)
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <br/>
            <button onClick={()=>deleteCar(car)}>delete</button>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
        </div>
    );
};

export {Car}
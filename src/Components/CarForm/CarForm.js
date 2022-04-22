import {useForm} from "react-hook-form";
import {carService} from "../../Services";
// import {useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi"
import {carValidator} from "../../Validators";
import {useEffect} from "react";

const CarForm = ({setNewCar, carForUpdate}) => {
    // const [formError, setFormError] = useState({});
    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'onTouched'
    });
    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate
            setValue('model',model)
            setValue('price',price)
            setValue('year',year)
        }
    },[carForUpdate])
    const mySubmit = async (car) => {
        try {
            if (carForUpdate){
                const {data} = await carService.updateById(carForUpdate.id, car);
                setNewCar(data)
            } else {
                const {data} = await carService.create(car);
                setNewCar(data)
            }
            reset()
        } catch (e) {
            // setFormError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')} /></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})} /></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})} /></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            <button>save</button>
        </form>
    );
};

export {CarForm}
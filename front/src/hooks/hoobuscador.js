import { useState } from "react";

//initial form es un diccionario vacio porque no hay ninguna busqueda
export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    //el evento la e en javascript 

    const onImputChange = ({target}) =>{
        const {name, value} = target

        setFormState({
            ...formState,
            [name] : value
        })

    }

    const onResetForm = () =>{
        setFormState(initialForm)
    }

    return{
        ...formState,
        formState,
        onImputChange,
        onResetForm
    }

}
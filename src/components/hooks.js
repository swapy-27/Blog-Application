import { useState } from "react";

function useFormInput(){
    const [value,setvalue]=useState();



    function handleChange (e){
        setvalue(e.target.value)
    }

    return (
        {
            value,
            onChange:handleChange
        }
    )
}

export default useFormInput;
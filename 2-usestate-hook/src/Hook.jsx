import { useState } from "react";

export default function Hook(){
    const [name, setName] = useState('Shuvo')

    function handleClick(){
        setName('Hasan')
    }
    return(
        <h1 onClick={handleClick}>Hi {name}</h1>
    )
}
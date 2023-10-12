import { useState } from "react"

export function AgePlus2(){
    const [name, setName] = useState('Kamrul')
    const [age, setAge] = useState(25)

    function handleClick(){
        setName('Shuvo')

        setAge( newAge => {
            return newAge + 1
        })
    }

    return(
        <h1 onClick={handleClick}>I&apos;m {name}. And I&apos;m {age}</h1>
    )
}
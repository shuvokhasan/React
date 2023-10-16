export function Card({name, age, address, phoneNumber}){
    return(
        <div>
            <h1>{name} </h1>
            <h3>Age: {age}</h3>
            <h3>He is from {address}</h3>
            <h3>Contact His with {phoneNumber} from anywhere.</h3>
        </div>
    )
}
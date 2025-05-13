import {useEffect, useState} from "react"
import { useMatch } from "react-router-dom"

function LearningUseEffect() {
    // Type 1
    // useEffect(()=>{
    //     console.log("Hello world haha")
    // },[])

    // type 2
    const[number, setnumber] = useState(0)
    function increasnumber () {
        setnumber(number + 1)
    }
    useEffect (()=>{
        console.log("UseEffect Triggered!!!")
    },[number])


    return (
        <div>
        <h1>Learning Use Effect today</h1>
        <h1>{number}</h1>
        <button onClick={increasnumber}>+</button>
        </div>
    )
}

export default LearningUseEffect
import { useState } from "react"

function Home(){
    // let meronum = 0
    // console.log(useState())

    let something = useState(100)
    let myvalue = something[0]
    let myfunction = something[1]

    function increase (){
        myfunction(myvalue + 1)
    }

    function decrease () {
        myfunction(myvalue - 1)
    }

    return (
        <div>
            <h1>This is Home page</h1>
            <h1>{myvalue}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default Home
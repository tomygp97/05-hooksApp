import { useState } from "react";

export const CounterApp = () => {


    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const changeCounter1 = () => {
        setCounter( { ...counter, counter1: counter.counter1 + 1 } )
    }
    const changeCounter2 = () => {
        setCounter( { ...counter, counter2: counter.counter2 + 1 } )
    }
    const changeCounter3 = () => {
        setCounter( { ...counter, counter3: counter.counter3 + 1 } )
    }


  return (
  
    <>
        <h1>Counter: { counter.counter1 }</h1>
        <h1>Counter: { counter.counter2 }</h1>
        <h1>Counter: { counter.counter3 }</h1>

        <hr />

        <button className="btn btn-primary" onClick={ () => changeCounter1() }>+1</button>
        <button className="btn btn-primary" onClick={ () => changeCounter2() }>+1</button>
        <button className="btn btn-primary" onClick={ () => changeCounter3() }>+1</button>

    </>

  )
}



// export const CounterApp = () => {


//     const [{counter1, counter2, counter3}, setCounter] = useState({
//         counter1: 10,
//         counter2: 20,
//         counter3: 30,
//     })

 


//   return (
  
//     <>
//         <h1>Counter: { counter1 }</h1>
//         <h1>Counter: { counter2 }</h1>
//         <h1>Counter: { counter3 }</h1>

//         <hr />

//         <button className="btn" onClick={ () => setCounter({ ...{counter1,counter2,counter3} , counter1: counter1 + 1 }) }>+1</button>
//         <button className="btn" onClick={ () => setCounter({ ...{counter1,counter2,counter3} , counter2: counter2 + 1 }) }>+1</button>
//         <button className="btn" onClick={ () => setCounter({ ...{counter1,counter2,counter3} , counter3: counter3 + 1 }) }>+1</button>

//     </>

//   )
// }
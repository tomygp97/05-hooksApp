import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";



export const MultipleCustomHooks = () => {
    
    const { increment, counter } = useCounter(1);

    const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    

  return (
   <>
   
   <h1>Breaking Bad Quotes</h1>
   <hr />

    <LoadingQuote isLoading={isLoading}/>

    <Quote data={data}/>

    <button className="btn btn-primary" 
            onClick={ () => increment() }
            disabled = { isLoading }
            >
        Next Quote
    </button>

    

   
   </>
  )
}


//! Como lo hizo el profesor
//! Me evito escribir el if en LoadingQuote y queda solo el div
//! Desestructuro antes la data y envio solo author y quote

// export const MultipleCustomHooks = () => {
    
//     const { increment, counter } = useCounter(1);

//     const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

//     const { author, quote } = !!data && data[0];
    

//   return (
//    <>
   
//    <h1>Breaking Bad Quotes</h1>
//    <hr />

//     {

//         isLoading
//         ?  <LoadingQuote />
//         :  <Quote author={ author } quote={ quote }/>

//     }

   

//     <button className="btn btn-primary" 
//             onClick={ () => increment() }
//             disabled = { isLoading }
//             >
//         Next Quote
//     </button>

    

   
//    </>
//   )
// }

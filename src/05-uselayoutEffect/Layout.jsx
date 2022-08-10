import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";




export const Layout = () => {
    
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
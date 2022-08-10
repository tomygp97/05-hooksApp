import PropTypes from "prop-types";
import { useFetch } from "../hooks";


export const Quote = ({data}) => {

  const { author, quote } = !!data && data[0]; // !! date tiene valor undefined y al negarlo dos veces pregunta si esta en true y ahi ejecuta la sig linea

  return (

    <blockquote className="blockquote text-end">
    <p className="mb-1">{ quote }</p>
    <footer className="blockquote-footer">{ author }</footer>
    </blockquote>


  )
}

Quote.propTypes = {
    data: PropTypes.array,
}
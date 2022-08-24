import PropTypes from "prop-types";
import { useState, useLayoutEffect, useRef } from "react";
// import { useFetch } from "../hooks";


export const Quote = ({data}) => {

  const { author, quote } = !!data && data[0]; // !! date tiene valor undefined y al negarlo dos veces pregunta si esta en true y ahi ejecuta la sig linea
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });

  }, [quote])

  return (

<>

    <blockquote 
      className="blockquote text-end"
      style={{ display:"flex" }}
      >
    <p ref={ pRef } className="mb-1">{ quote }</p>
    <footer className="blockquote-footer">{ author }</footer>
    </blockquote>

    <code>{ JSON.stringify(boxSize) }</code>

</>

  )
}

Quote.propTypes = {
    data: PropTypes.array,
}
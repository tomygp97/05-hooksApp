import { memo } from "react";
// import React from "react";


// export const Small = React.memo(({ value }) => { //Forma comun de como se ve memo escrita y con la importacion de React

//     console.log("Me volvi a dibujar :)")

//   return (
//     <small>{ value }</small>
//   )
// }
// )


export const Small = memo(({ value }) => {

    console.log("Me volvi a dibujar :)")

  return (
    <small>{ value }</small>
  )
}
)
import { useReducer } from "react"
import { useForm } from "../hooks/useForm";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: "Recolectar la piedra del alma",
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: "Recolectar la piedra del poder",
        done: false,
    },
]

// const [formState, onInputChange ] = useForm();


export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    const handleNewTodo = (tarea) => {

        
        const mensaje = "handleNewTodo funciona";
        // console.log( "Ahora si funciono" );
        return (
            console.log(mensaje)
            );
            // [   
                //     ...initialState,
                //     {
                    //         id: new Date().getTime() * 4,
                    //         description: ,
                    //         done: false,
                    //     },
                    // ]
    }


  return (
   

    <>
        <h1>TodoApp 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">

                {/* TodoList */}
                <ul className="list-group">
                    {
                        todos.map( e => (
                            
                            <TodoList
                                      key={ e.id }
                                      description={ e.description }
                            />
                        ) )
                    }
                </ul>
                
                {/* Fin TodoList */}

        
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />

                {/* TodoAdd onNewTodo( todo ) */}
                {/* id: newDate()..., description: "", done: false */}

                    <TodoAdd 
                        onNewTodo={ handleNewTodo() }
                    />

{/*                 
                <form>
                    <input 
                        type="text"
                        placeholder="Que hay que hacer?"
                        className="form-control"
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-1"
                    >
                        Agregar
                    </button>
                </form> */}

                {/* Fin TodoAdd */}

            </div>

        </div>

    </>


  )
}

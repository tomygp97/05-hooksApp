import { useForm } from "../hooks/useForm";

export const TodoAdd = () => {

    
    const  {formState, onInputChange, onResetForm, onSubmitForm, username} = useForm({
        tarea: "",
    })


    
// console.log(value);

  return (

 
            <form>
                <input 
                    type="text"
                    placeholder="Que hay que hacer?"
                    className="form-control"
                    value= { username }
                    onChange={ onInputChange }
                    
                />
                <button
                    onClick={ () => onNewTodo() }
                    type="reset"
                    className="btn btn-outline-primary mt-1"
                >
                     Agregar
                </button>
            </form>


  )
}

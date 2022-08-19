import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Tests in <TodoItem />', () => {

    const todo = {
        id: 1,
        description: "Piedra del Alma",
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should show pending todo ', () => {

        render( <TodoItem 
                todo={ todo }
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

            const liElement = screen.getByRole("listitem");

            expect( liElement.className ).toBe("list-group-item d-flex justify-content-between");

            const spanElement = screen.getByLabelText("span");
            expect( spanElement.className ).toContain("align-self-center");
            expect( spanElement.className ).not.toContain("text-decoration-line-through");

    });



    test('should show complete todo ', () => {

        todo.done = true;

        render( <TodoItem 
                todo={ todo }
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

            const spanElement = screen.getByLabelText("span");
            expect( spanElement.className ).toContain("text-decoration-line-through");


    });

    test('should call toggleTodo on click', () => {

        render( <TodoItem 
            todo={ todo }
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
        /> 
    );

        const spanElement = screen.getByLabelText("span");
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    });


    test('button should call deleteTodo on click', () => {

        render( <TodoItem 
            todo={ todo }
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
        /> 
    );
    
        const buttonElement = screen.getByRole("button");
        fireEvent.click( buttonElement );
            
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    });

});
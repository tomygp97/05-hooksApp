import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Test in todoReducer', () => {

    const initialState = [{
        id: 1,
        description: "Demo Todo",
        done: false,
    }]


    test('should return initial state', () => {

        const newState = todoReducer(initialState, {});
        expect( newState ).toBe( initialState );

    });

    test('should add todo', () => {

        const action = {
            type: "[TODO] Add todo",
            payload: {
                id: 2,
                description: "Nuevo todo #2",
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
 
    });

    test('should delete todo', () => {
        
        const action = {
            type: "[TODO] Add todo",
            payload: {
                id: 2,
                description: "Nuevo todo #2",
                done: false
            }
        };

        const remove = {
            type: "[TODO] Remove todo",
            payload: 2,
        };

        const newState = todoReducer(initialState, action);
        const newState2 = todoReducer(newState, remove);
        expect( newState2.length ).toBe( 1 );

    });

    test('should toggle todo', () => {

        const action = {
            type: "[TODO] Toggle todo",
            payload: 1,
        };

        const newState = todoReducer(initialState, action);
        console.log(newState);
        expect( newState[0].done ).toBeTruthy();

    });

});
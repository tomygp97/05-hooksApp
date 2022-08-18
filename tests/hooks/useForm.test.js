import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";



describe('Test in useForm', () => {

    
    const initialForm = {
        name: "Tomas",
        email: "tomygp16@gmail.com",
    }

    test('should return default values', () => {

        // const initialForm = {
        //     name: "Tomas",
        //     email: "tomygp16@gmail.com",
        // }

        const { result } = renderHook( () => useForm(initialForm) );

        // const { formState, onInputChange, onResetForm } = result.current;
        expect(result.current).toEqual({
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any( Function ),
        onResetForm: expect.any( Function ),
        });

    });

    test('should change form name', () => {

        const newValue = "Juan";

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, formState } = result.current;
        
        act( () => {
            onInputChange({ target: {name: "name", value: newValue} });
        } )
    

        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );

    });


    test('should reset form name to default', () => {

        const newValue = "Juan";

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm, formState } = result.current;
        
        act( () => {
            onInputChange({ target: {name: "name", value: newValue} });
            onResetForm();
        } )
    

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

    });
    

})